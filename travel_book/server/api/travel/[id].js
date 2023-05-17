import travelList from '../../../data/travel/list.json';
export default defineEventHandler(async (event) => {
    const id = event.context.params.id;
    return travelList.find((list) => list.id == id);
});
