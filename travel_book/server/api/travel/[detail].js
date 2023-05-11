import travelList from '../../../data/travel/list.json';
export default defineEventHandler(async (event) => {
    const id = event.context.params.detail;
    return travelList.filter((list) => list.id == id);
});
