import React from 'react';
import BookCard from 'components/BookCard';

const Books = () => {
  const [books, setBooks] = React.useState();
  const [favorites, setFavorites] = React.useState([]);
  const [readLaters, setReadLaters] = React.useState([]);

  const fetchBooks = async () => {
    const response = await fetch('https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json');
    const data = await response.json();
    const booksList = data.books[0];
    setBooks(booksList);
  };

  const toggleFavorite = (bookId) => {
    if (!favorites.includes(bookId)) {
      setFavorites([...favorites, bookId]);
    } else {
      setFavorites([...favorites.filter((bookKey) => bookKey !== bookId)]);
    }
  };

  const toggleReadLater = (bookId) => {
    if (!readLaters.includes(bookId)) {
      setReadLaters([...readLaters, bookId]);
    } else {
      setReadLaters([...readLaters.filter((bookKey) => bookKey !== bookId)]);
    }
  };

  React.useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <ul className="Books row">
      {books && (
        books.map((bookData, bookIndex) => {
          const bookKey = `${bookData.isbn}-${bookIndex}`;
          return (
            <BookCard
              data={bookData}
              key={bookKey}
              onFavorite={() => { toggleFavorite(bookKey); }}
              isFav={favorites.includes(bookKey)}
              onReadLater={() => { toggleReadLater(bookKey); }}
              isReadLater={readLaters.includes(bookKey)}
            />
          );
        })
      )}
      {!books && (
        <p>Loading books...</p>
      )}
    </ul>
  );
};

export default Books;
