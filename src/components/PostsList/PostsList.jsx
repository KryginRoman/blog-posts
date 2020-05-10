import React from 'react'

import PostsListItem from './PostsListItem/PostsListItem';

import './PostsList.scss';

export default ({ posts, onLike }) => (
  posts.length
    ? (
      <ul className="posts">
        {posts.map(post => (
          <li className="posts-item" key={post.id}>
            <PostsListItem {...post} onLike={() => onLike(post.id)} />
          </li>
        ))}
      </ul>
    )
    : <p>No posts..</p>
)