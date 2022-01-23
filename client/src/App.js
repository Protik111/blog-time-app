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

if(localStorage.token){
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
          <Route path="/createprofile" element={<PrivateRoute><CreateProfile /></PrivateRoute>}></Route>
          <Route path="/viewprofile" element={<PrivateRoute><ViewProfile /></PrivateRoute>}></Route>
          <Route path="/editprofile" element={<PrivateRoute><EditProfile /></PrivateRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
