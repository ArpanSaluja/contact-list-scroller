import React, { useState } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loggingIn } from "../actions";
import './Login.css';

const Login = ({ loggingIn }) => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const onInputChange = (e) => {
        if(e.target.name === 'userName'){
            setUserName(e.target.value);
        }else{
            setPassword(e.target.value);
        }
    }

    const onSubmitClick = () => {
        console.log('onSubmitClick '+userName+" : "+password);
        loggingIn(userName,password);
    }
    
    return (
      <div>
        <div className="login-row">
            <div className="login-label">User Name</div>
            <div className="login-text">
                <input type="text" name="userName" value={userName} onChange={onInputChange}></input>
            </div>
        </div>
        <div className="login-row">
            <div className="login-label">Password</div>
            <div className="login-text">
                <input type="password" name="password" value={password} onChange={onInputChange}></input>
            </div>
        </div>
        <div className="login-row">
            <input type="button" className="login-submit-button" onClick={onSubmitClick} value="Login"></input>
        </div>
        </div>
      );
    }

    const mapStateToProps = (state) => ({
        isLoggedIn: state.todos.isLoggedIn
      })

      const mapDispatchToProps = (dispatch) => ({
        loggingIn: (userName, password) => dispatch(loggingIn(userName,password))
      })
      
      Login.propTypes = {
        loggingIn: PropTypes.func
      }
      
      export default connect(
        null,
        mapDispatchToProps)(Login);