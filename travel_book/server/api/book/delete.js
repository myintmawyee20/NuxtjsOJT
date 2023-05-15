import bookList from '../../../data/book/list.json';
export default defineEventHandler(async (event) => {
    const bid = await readBody(event);
    const removeIndex = bookList.findIndex((book) => {
        return book.id == bid.id;
    })
    bookList.splice(removeIndex, 1);
    return bookList;
});