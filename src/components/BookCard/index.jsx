import React from 'react';
import './index.scss';

const BookCard = (props) => {
  const {
    data,
    onFavorite,
    onReadLater,
    isFav,
    isReadLater,
  } = props;

  const {
    title,
    thumbnailUrl,
    shortDescription,
  } = data;

  return (
    <li className="BookCard card m-2">
      <div className="card-body">
        <div className="row">
          <img src={thumbnailUrl || './noImage.png'} className="BookCard__thumbnail col" alt="thumbnail of the book" />
          <div className="col">
            <h5 className="BookCard__title card-title">{title}</h5>
            <p className="BookCard__text card-text">{shortDescription || 'No description available.'}</p>
          </div>
        </div>
        <div className="row">
          <button className="BookCard__favorite btn btn-primary col p-1 mx-2" type="button" onClick={onFavorite}>{ isFav ? 'Remove from Favorites' : 'Add to Favorites'}</button>
          <button className="BookCard__read btn btn-info col p-1 mx-2" type="button" onClick={onReadLater}>{ isReadLater ? 'No more interested' : 'Read later'}</button>
        </div>
      </div>
    </li>
  );
};

export default BookCard;
