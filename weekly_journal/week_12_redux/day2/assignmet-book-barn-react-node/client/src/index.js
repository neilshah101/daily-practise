import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import { BaseLayout } from './components/Baselayout';
import HomePage from "./components/HomePage";
import Register from "./components/Register"
import Login from "./components/Login";
import  BooksListPage from "./components/BooksListPage";
import AddBookPage from "./components/AddBookPage";
import UpdateBook from "./components/UpdateBook";
import MyCart from './components/MyCart'
import FavoriteBook from './components/Favorite'
import history from './utils/history'
import { setAuthenticationHeader } from './utils/authenticate';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore } from 'redux'
import cartReducer from './stores/reducers/cart'
import authReducer from './stores/reducers/authentictaion'
import favoriteReducer from './stores/reducers/favorite'
// import reducer from './stores/reducer';
import { Provider } from 'react-redux'
import requireAuth from './components/requireAuth'




const rootReducer = combineReducers({
  cartR: cartReducer,
  authR : authReducer,
  favoriteR: favoriteReducer
})


const token = localStorage.getItem("jsonwebtoken")
setAuthenticationHeader(token)


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path = "/" component = {HomePage} />
            <Route exact path = "/register" component = {Register} />
            <Route exact path = "/login" component = {Login} />
            <Route exact path = "/all-books/:user_id" component = {requireAuth(BooksListPage)} />
            <Route exact path = "/add-books" component = {requireAuth(AddBookPage)} />
            <Route  path = "/update-book/:book_id" component = {requireAuth(UpdateBook)} />
            <Route  path = "/my-cart" component = {requireAuth(MyCart)} />
            <Route  path = "/my-favorite-book" component = {requireAuth (FavoriteBook)} />

          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
