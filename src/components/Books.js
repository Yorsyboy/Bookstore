import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const Books = () => {
  const booksState = useSelector((state) => state.bookReducer.books);
  const booksArray = Object.values(booksState);
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <section>
      {booksArray.map((books, index) => (
        <div key={Object.keys(booksState)[index]} className="book-card">
          <div className="book-info">
            <h3 className="book-category">{books[0].category}</h3>
            <h2 className="book-title">{books[0].title}</h2>
            <h4 className="book-author">Toyosi</h4>
            <ul className="book-events">
              <button type="button" disabled>Comments</button>
              <button
                type="button"
                onClick={(e) => remove(e.target.id)}
                id={Object.keys(booksState)[index]}
              >
                Remove
              </button>
              <button type="button" disabled>Edit</button>
            </ul>
          </div>
          <div className="book-completion">
            <CircularProgressbar value={66} />
            <h2>
              64%
              <br />
              <span>Completed</span>
            </h2>
          </div>
          <div className="book-update">
            <h4>CURRENT CHAPTER</h4>
            <p>Chapter 17</p>
            <button className="btn" type="button" disabled>
              UPDATE PROGRESS
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Books;
