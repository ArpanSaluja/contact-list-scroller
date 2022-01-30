import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import ContactCardList from './contactCard/ContactCardList';
import Login from './login/Login';

const App = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <ContactCardList /> : <Login />}
      </div>
    );
  }

const mapStateToProps = (state) => ({
  isLoggedIn: state.todos.isLoggedIn
})

ContactCardList.propTypes = {
  isLoggedIn: PropTypes.object
}

export default connect(
  mapStateToProps,
null)(App);
