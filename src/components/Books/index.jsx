import React from 'react';
import BookCard from 'components/BookCard';
import SearchBar from 'components/SearchBar';

const Books = () => {
  const [books, setBooks] = React.useState();
  const [favorites, setFavorites] = React.useState([]);
  const [readLaters, setReadLaters] = React.useState([]);

  const fetchBooks = async () => {
    const response = await fetch('https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json');
    const data = await response.json();
    const booksList = data.books[0];
    setBooks({ all: booksList, display: booksList });
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

  const displaySearchedBooks = (searchInput, byFavorites, byReadLaters) => {
    let toDisplay = books.all.filter((book) => book.title.toLowerCase().includes(searchInput));

    if (byFavorites) {
      toDisplay = toDisplay.filter((book, bookIndex) => {
        const bookKey = `${book.isbn}-${bookIndex}`;
        return favorites.includes(bookKey);
      });
    }

    if (byReadLaters) {
      toDisplay = toDisplay.filter((book, bookIndex) => {
        const bookKey = `${book.isbn}-${bookIndex}`;
        return readLaters.includes(bookKey);
      });
    }
    setBooks({ all: books.all, display: toDisplay });
  };

  React.useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="Books">
      <p>Search your favorite book by typing here:</p>
      <SearchBar onChange={displaySearchedBooks} />
      <ul className="row">
        {!books && (
          <p>Loading books...</p>
        )}
        {books && (
          books.display.map((bookData, bookIndex) => {
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
      </ul>
    </div>
  );
};

export default Books;
