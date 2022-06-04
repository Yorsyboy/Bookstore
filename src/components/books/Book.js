import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import './book.css';

const Book = ({
  category, title, author, chapter, completed,
}) => (
  <section className="bookCard">
    <div>
      <p id="category">{category}</p>
      <h2 id="title">{title}</h2>
      <p id="author">{author}</p>

      <div className="btns-section">
        <Button buttonType="button" text="Comments" id="comments-btn" />
        <Button buttonType="button" text="Remove" id="remove-btn" />
        <Button buttonType="button" text="Edit" id="edit-btn" />
      </div>
    </div>
    <div className="progress">
      <div>
        progress circle:
        <h3>
          {completed}
        </h3>
        <p>completed</p>
      </div>
    </div>

    <div className="chapter-progress">
      <p>CURRENT CHAPTER</p>
      <p>

        <span>{chapter}</span>
      </p>
      <Button text="UPDATE PROGRESS" type="button" id="update-progress" />
    </div>
  </section>
);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
};

export default Book;
