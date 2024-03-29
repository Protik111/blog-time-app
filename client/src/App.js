import './App.css';
import Home from "./components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import setAuthToken from './utils/setAuthToken';
import { useEffect } from 'react';
import { loadUser } from './redux/action/Auth.action';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CreateProfile from './components/CreateProfile/CreateProfile';
import ViewProfile from './components/ViewProfile/ViewProfile';
import EditProfile from './components/EditProfile/EditProfile';
import AddExperience from './components/AddExperience/AddExperience';
import CreatePost from './components/CreatePost/CreatePost';
import { getAllPosts } from './redux/action/Post.action';
import SinglePost from './components/SinglePost/SinglePost';
import EditPost from './components/EditPost/EditPost';
import PublicSinglePost from './components/Home/PublicSinglePost/PublicSinglePost';
import PublicViewProfile from './components/PublicViewProfile/PublicViewProfile';

function App() {
  
  
  useEffect(() => {
    if(localStorage.token){
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
    store.dispatch(getAllPosts());
    // store.dispatch(fetchAllPosts());
  }, []);

  // useEffect(() => {
  // }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/:id" element={<PublicSinglePost></PublicSinglePost>}></Route>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
          <Route path="/createprofile" element={<PrivateRoute><CreateProfile /></PrivateRoute>}></Route>
          <Route path="/viewprofile" element={<PrivateRoute><ViewProfile /></PrivateRoute>}></Route>
          <Route path="/editprofile" element={<PrivateRoute><EditProfile /></PrivateRoute>}></Route>
          <Route path="/addexperience" element={<PrivateRoute><AddExperience /></PrivateRoute>}></Route>
          <Route path="/createpost" element={<PrivateRoute><CreatePost /></PrivateRoute>}></Route>
          <Route path="/singlepost/:id" element={<PrivateRoute><SinglePost /></PrivateRoute>}></Route>
          <Route path="/editpost/:id" element={<PrivateRoute><EditPost /></PrivateRoute>}></Route>
          <Route path="/:name/:userId" element={<PublicViewProfile></PublicViewProfile>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
