import bookList from '../../../data/book/list.json';
export default defineEventHandler(async (event) => {
    const update = await readBody(event);
    bookList.forEach((book) => {
        if (book.id == update.id){
            book.id = update.id,
            book.title = update.title,
            book.author = update.author,
            book.price = update.price,
            book.date = update.date
        }
    });
    return bookList;
});