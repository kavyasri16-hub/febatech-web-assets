import React from "react"
import { navigate } from "gatsby"
import Form from "./Form"
import View from "./View"
import { handleLogin, isLoggedIn } from "../utils/auth"

class Signup extends React.Component {
    state = {
      username: ``,
      password: ``,
    }
    handleUpdate(event) {
        this.setState({
          [event.target.name]: event.target.value,
        })
      }
    
      handleSubmit(event) {
        event.preventDefault()
        handleLogin(this.state)
      }
    
      render() {
        if (isLoggedIn()) {
          navigate(`/app/signup`)
        }
    
        return (
          <center>
          <View title="Sign up">
            <Form
              handleUpdate={e => this.handleUpdate(e)}
              handleSubmit={e => this.handleSubmit(e)}
            />
          </View>
          </center>
        )
      }
    }
    
    export default Signup
    
/* 
export default ({ handleSubmit, handleUpdate }) => (
    <form
      className={form}
      method="post"
      onSubmit={event => {
        handleSubmit(event)
        navigate(`/app/profile`)
      }}
    >
      <p>
        Sign Up, if you haven't registered yet!
      </p>
      <label className={form__label}>
        Username
        <input
          className={form__input}
          type="text"
          name="username"
          onChange={handleUpdate}
        />
      </label>
      <label className={form__label}>
        Password
        <input
          className={form__input}
          type="password"
          name="password"
          onChange={handleUpdate}
        />
      </label>

      <label className={form__label}>
        Gender
        <input
          className={form__input}
          type="text"
          name="gender"
          onChange={handleUpdate}
        />
      </label>

      <label className={form__label}>
        Phone Number
        <input
          className={form__input}
          type="integer"
          name="pno"
          onChange={handleUpdate}
        />
      </label>

      <label className={form__label}>
        Email ID
        <input
          className={form__input}
          type="email"
          name="email"
          onChange={handleUpdate}
        />
      </label>

      <input className={form__button} type="Create Account" value="Sign Up" />
    </form>
  ) */
  
