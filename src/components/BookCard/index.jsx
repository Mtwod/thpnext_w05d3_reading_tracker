import React from 'react';

const BookCard = (book) => {
  const { isFav, read, title, thumbnailUrl, shortDescription } = book;
  return (
    <div className="BookCard">
      <div className="card" style={{ width: '18rem', height: '27rem' }}>
        <img src={thumbnailUrl} className="card-img-top" alt="thumbnail of the book" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{shortDescription}</p>
          <div className="row">
            <button className="btn btn-primary" type="button">{ isFav ? 'Remove from Favorite' : 'Add to Favorites'}</button>
            <button className="btn btn-primary" type="button">{ read ? 'No more interested' : 'Read later'}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
