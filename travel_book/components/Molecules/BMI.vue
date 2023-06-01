<template>
    <div class="card">
        <VForm @submit="calculateBMI">
            <div class="card-header p-4">
                <AtomsHeading :text="'BMI Calculator'"></AtomsHeading>
            </div>
            <div class="card-body w-75">
                <div class="row mb-3">
                    <label for="unitsLabel" class="col-sm-2 col-form-label h1 fs-5">Units :</label>
                    <div class="col-sm-7">
                        <div class="form-check form-check-inline">
                            <AtomsInputField :design="'form-check-input'" :type="'radio'" :radio="'radioOptions'" :id="'inlineRadio1'" v-model="useImperial" :value="true" />
                            <label class="form-check-label fs-5" for="inlineRadio1">U.S. (Imperial)</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <AtomsInputField :design="'form-check-input'" :type="'radio'" :radio="'radioOptions'" :id="'inlineRadio2'" v-model="useImperial" :value="false" />
                            <label class="form-check-label fs-5" for="inlineRadio2">Metric</label>
                        </div>
                    </div>
                </div>
                <div v-if="useImperial">
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label h1 fs-5">Height :</label>
                        <div class="col-sm-7">
                            <div class="row g-3">
                                <div class="col">
                                    <AtomsInputField :design="'form-control form-control-lg'" :text="'Feet'" :type="'number'" :radio="'heightFeetValue'"  v-model="heightFeet" />
                                    <ErrorMessage name="heightFeetValue"></ErrorMessage>
                                </div>
                                <div class="col">
                                    <AtomsInputField :design="'form-control form-control-lg'" :text="'Inches'" :type="'number'" :radio="'heightInchesValue'"  v-model="heightInches" />
                                    <ErrorMessage name="heightInchesValue"></ErrorMessage>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="weight1" class="col-sm-2 col-form-label h1 fs-5">Weight :</label>
                        <div class="col-sm-7">
                            <AtomsInputField :design="'form-control form-control-lg'" :text="'Pounds'" :type="'number'" :radio="'weightInPoundValue'"  v-model="weightInPound" />
                            <ErrorMessage name="weightInPoundValue"></ErrorMessage>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label h1 fs-5">Height :</label>
                        <div class="col-sm-7">
                            <AtomsInputField :design="'form-control form-control-lg'" :text="'Centimeters'" :type="'number'" :radio="'heightValue'"  v-model="height" />
                            <ErrorMessage name="heightValue"></ErrorMessage>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="weight1" class="col-sm-2 col-form-label h1 fs-5">Weight :</label>
                        <div class="col-sm-7">
                            <AtomsInputField :design="'form-control form-control-lg'" :text="'Kilograms'" :type="'number'" :radio="'weightInKgValue'"  v-model="weightInKg" />
                            <ErrorMessage name="weightInKgValue"></ErrorMessage>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-7 offset-sm-2">
                        <button type="submit" class="btn btn-success btn-lg w-100">CALCULATE</button>
                    </div>
                </div>
                <div v-if="bmi">
                    <div class="row mb-3">
                        <div class="col-sm-7 offset-sm-2">
                            <p class="d-inline h1 fs-5">Your BMI: </p>
                            <p class="d-inline text-info fs-4">{{ bmi.toFixed(2) }} ({{ getBMICategory(bmi) }}) </p>
                        </div>
                    </div>
                </div>
            </div>
        </VForm>
    </div>
</template>

<script setup lang="ts">
import * as yup from "yup";

const useImperial = ref<boolean>(true);
const height = ref<number | null>(null);
const weightInKg = ref<number | null>(null);
const heightInches = ref<number | null>(null);
const bmi = ref<number | null>(null);
const heightFeet = ref<number | null>(null);
const weightInPound = ref<number | null>(null);

function calculateBMI() {
    const heightInInches = (parseInt(heightFeet.value) * 12) + parseInt(heightInches.value);
    const bmi_val = ((weightInPound.value ?? 0) / (heightInInches * heightInInches)) * 703;
    bmi.value = bmi_val;
    if (height.value && weightInKg.value) {
        const heightInMeters = height.value / 100;
        const bmi_val = weightInKg.value / (heightInMeters * heightInMeters);
        bmi.value = bmi_val;
    }
}

function getBMICategory(bmi: number) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

const schema = yup.object({
    weightInPoundValue: yup.number().required("Please enter weight in pounds*"),
    heightInchesValue: yup.number().required("Please enter height in inches*"),
    heightFeetValue: yup.number().required("Please enter height in feet*"),
    weightInKgValue: yup.number().required("Please enter weight in kilograms*"),
    heightValue: yup.number().required("Please enter height in centimeters*"),
});
</script>

<style scoped></style>
