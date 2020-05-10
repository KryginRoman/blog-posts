import { auth, db } from '../firebase';

const signIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password)
}

const signOut = () => {
  return auth.signOut()
}

const initAuth = onAurthHandler => {
  auth.onAuthStateChanged(onAurthHandler);
}

const createNewUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password)
}

const getPosts = async () => {
  const posts = await db.collection("posts").get();
  return posts.docs.map(post => ({...post.data(), id: post.id}))
}

const addPost = async (title, text, uid, author) => {
  const postBody = {
    title,
    text,
    userId: uid,
    author,
    likeCount: 0,
    date: new Date().toLocaleDateString(),
    likedUsersId: []
  }
  const receivedData = await db.collection("posts").add(postBody);
  const post = await receivedData.get();
  return {...post.data(), id: post.id}
}

const updatePost = (id, options) => {
  db.collection("posts").doc(id).update(options)
}

export {
  signIn,
  signOut,
  initAuth,
  createNewUser,
  getPosts,
  addPost,
  updatePost
}