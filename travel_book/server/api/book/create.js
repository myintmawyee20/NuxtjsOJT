import bookList from '../../../data/book/list.json';
export default defineEventHandler(async (event) => {
    const create = await readBody(event);
    bookList.push(create);
    return bookList;
});
