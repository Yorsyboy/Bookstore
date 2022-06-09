import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addBook } from '../redux/books/books';
// import store from '../redux/configureStore';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

const AddNewBook = () => {
  const [form, setForm] = useState({
    inputTitle: '',
    selectedValue: 'none',
    selectedText: '',
  });

  const handleTitleChange = (e) => {
    setForm({
      ...form,
      inputTitle: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    const index = e.target.selectedIndex;
    setForm({
      ...form,
      selectedValue: e.target.value,
      selectedText: e.target[index].innerHTML,
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: form.inputTitle,
      author: 'Toyosi',
      category: form.selectedText,
    };

    dispatch(postBook(newBook));
  };
  return (
    <>
      <hr />
      <h1 className="form-title"> ADD NEW BOOK</h1>
      <form
        onSubmit={(e) => submitBookToStore(e)}
        className="book-form"
        required
      >
        <input
          type="text"
          id="book"
          placeholder="Book title"
          value={form.inputTitle}
          onChange={handleTitleChange}
          required
        />
        <select
          value={form.selectedValue}
          onChange={handleSelectChange}
          name="categories"
          id="categories"
          required
        >
          <option value="none" disabled>
            Category
          </option>
          <option value="action">Action</option>
          <option value="sport">Sport</option>
          <option value="Fantasy">Fantasy</option>
          <option value="anime">Anime</option>
        </select>
        <button className="btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </>
  );
};
export default AddNewBook;
