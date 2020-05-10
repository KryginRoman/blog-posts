import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';

import PostsList from '../PostsList/PostsList';
import AddPostPanel from '../AddPostPanel/AddPostPanel';
import NavLink from '../NavLink/NavLink';

import './Main.scss';

export default ({ posts, uid, onAddPost, onLike }) => {
  const history = useHistory();
  const filtredPosts = posts.filter(({ userId }) => userId === uid);

  return (
    <main className="main">
      <AddPostPanel
        onSubmit={onAddPost}
      />
      <div className="posts">
        <div className="posts-filter">
          <NavLink 
            text="My posts"
            active={history.location.pathname === '/my_posts'}
            onClick={() => history.push('/my_posts')} 
          />
          <NavLink 
            text="All posts"
            active={history.location.pathname === '/'}
            onClick={() => history.push('/')} 
          />
        </div>
        <Switch>
          <Route exact path="/my_posts">
            <PostsList
              posts={filtredPosts}
              onLike={onLike}
            />
          </Route>
          <Route exact path="/">
            <PostsList
              posts={posts}
              onLike={onLike}
            />
          </Route>
        </Switch>
      </div>
    </main>
  )
}