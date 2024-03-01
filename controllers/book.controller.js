const bookService = require('../services/book.service');

const getAll = async (_req, res) => {
  const books = await bookService.getAll();
  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  try{
    const book = await bookService.getById(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  try{
    const newBook = await bookService.create(title, author, pageQuantity);
    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  try{
    const updatedBook = await bookService.update(id, { title, author, pageQuantity });

    if(!updatedBook) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book updated!' })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try{
    await bookService.remove(id);
    return res.status(200).json({ message: 'Book removed successfully!' })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};