import React from 'react';
import Button from '../button/Button';

const CreateNewBook = () => (
  <section className="form-section">
    <h4>ADD NEW BOOK</h4>
    <form className="book-form">
      <input
        id="book-title"
        placeholder="Book title"
        type="text"
        value=""
        required
      />

      <select id="category" name="category" placeholder="Category">
        <option value="category" selected="selected">
          Category
        </option>
        <option value="action">Action</option>
        <option value="sport">Sport</option>
        <option value="Fantasy">Fantasy</option>
        <option value="anime">Anime</option>
      </select>
      <Button text="ADD BOOK" buttonType="submit" id="submit" />
    </form>
  </section>
);

export default CreateNewBook;
