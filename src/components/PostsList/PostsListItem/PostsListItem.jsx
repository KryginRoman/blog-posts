import React from 'react'

import './PostsListItem.scss';

export default ({ text, title, author, date, likeCount, onLike }) => {
  return (
    <div className="post-list__item">
      <h4 className="post-list__item-title">{title}</h4>
      <p className="post-list__item-text">{text}</p>
      <div className="post-list__item-info">
        <span>{`Author: ${author}`}</span>
        <span>{`Posted: ${date}`}</span>
        <span className="post-list__item-info__likes" onClick={onLike}>
          {`Like: ${likeCount}`}
        </span>
      </div>
    </div>
  )
}