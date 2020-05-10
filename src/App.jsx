import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import Header from './components/Header/Header';
import Login from './components/Authorization/Login/Login';
import Registration from './components/Authorization/Registration/Registration';
import Main from './components/Main/Main';

import {
  signIn,
  signOut,
  initAuth,
  createNewUser,
  getPosts,
  addPost
} from './api/api';

import './App.css';

export default () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [allPosts, setAllPosts] = useState(null);
  const history = useHistory();

  const onLoginHandler = async (email, password) => {
    try {
      await signIn(email, password);
      history.push('/');
      setIsAuth(true);
    }
    catch (e) {
      alert("Login Error, try again");
    }
  }
  const onLogoutHandler = async () => {
    await signOut();
    setIsAuth(false);
    setUser(null);
  }
  const onRegistrSubmitHandler = async (email, password, name, surName) => {
    try {
      const userInfo = createNewUser(email, password);
      history.push('/');
      setIsAuth(true)
      userInfo.user.updateProfile({ displayName: `${name} ${surName}` })
    }
    catch (e) {
      alert("Error registration")
    }
  }
  const onAddPostHandler = async (title, text) => {
    try {
      const post = await addPost(title, text, user.uid, user.displayName);
      setAllPosts([...allPosts, post])
    }
    catch (e) {
      alert("Add post failed, try later");
    }
  }
  const onLikeHandler = idPost => console.log("liked");
  const getAllPosts = async () => {
    try {
      const posts = await getPosts();
      setAllPosts(posts);
    }
    catch (e) {
      alert("Error receive posts")
    }
  }

  useEffect(() => {
    initAuth(user => { 
      if (user) {
        setIsAuth(true)
        setUser(user);
        getAllPosts();
      }
    });
  }, []);
 
  useEffect(() => {
    isAuth ? history.goBack() : history.push('/login');
  }, [isAuth]);
  
  return (
    <div className="app">
      <Header
        user={user}
        onLogout={onLogoutHandler}
      />
      <Switch>
        <Route path="/login">
          <Login onSubmit={onLoginHandler} />
        </Route>
        <Route path="/registration">
          <Registration onSubmit={onRegistrSubmitHandler} />
        </Route>
        <Route exact path="/profile">
            My profile here
          </Route>
        <Route path="/">
          {allPosts
            ? (
              <Main
                posts={allPosts}
                uid={user && user.id}
                onLike={onLikeHandler}
                onAddPost={onAddPostHandler}
              />
            )
            : <Spinner animation="border" />
          }
        </Route>
      </Switch>
    </div>
  );
}
