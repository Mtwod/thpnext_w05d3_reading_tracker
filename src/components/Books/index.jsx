import BookCard from 'components/BookCard';
import React from 'react';

const Books = () => {
  const [books, setBooks] = React.useState();
  const fetchBooks = async () => {
    try {
      const response = await fetch('https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json');
      const data = await response.json();
      const booksList = data.books[0];
      console.log(booksList);
      setBooks(booksList);
    } catch (error) {
      console.error('An error has been catched:');
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <ul className="Books">
      {books && (
        {books.map((bookData) => (
          <BookCard data={bookData} key={bookData.isbn} />
        ))}
      )}
    </ul>
  );
};

export default Books;
