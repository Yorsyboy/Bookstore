import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import './book.css';
import CreateNewBook from '../form/Form';

const BooksList = () => {
  const books = [
    {
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanna Collins',
      chapter: 'Chapter 17',
      completed: '64%',
    },
    {
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      chapter: 'Chapter 3: "A Lesson Learned"',
      completed: '8%',
    },
    {
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanna Collins',
      chapter: 'Introduction',
      completed: '0%',
    },
  ];

  return (
    <>
      <ul className="allBooks">
        <li className="bookInfo">
          {books.map((book) => (
            <Book
              category={book.category}
              title={book.title}
              author={book.author}
              chapter={book.chapter}
              completed={book.completed}
              key={uuidv4()}
            />
          ))}
        </li>
      </ul>
      <CreateNewBook />
    </>
  );
};

export default BooksList;
