import bookList from '../../../data/book/list.json';
export default defineEventHandler(async (event) => {
    const id = event.context.params.update;
    return bookList.find((list) => list.id == id);
});
