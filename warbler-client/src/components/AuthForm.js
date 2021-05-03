import React, { Component } from "react";
// one single component
// building a form
// and the inputs we want to have control over
class AuthForm extends Component {
  // pass in some props
  constructor(props) {
    // call super
    super(props);
    // start with some state
    this.state = {
      // pass in some default state
      email: "",
      username: "",
      password: "",
      profileImageUrl: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    {/* grab from this.state */}
    const { email, username, password, profileImageUrl } = this.state;
    const { signUp, heading } = this.props;

    return (
      {/* return some JSX */}
      
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
             {/* const { heading} = this.props; */}
              <h2>{heading}</h2>

              <label htmlFor="email">E-mail</label>
              <input
                autoComplete="off"
                className="form-control"
                id="email"
                name="email"
                onChange={this.handleChange}
                type="text"
                value={email} 
              />
              {/* if it exists pre populate that with whatever the email is at the moment, value={email} */}
              
              <label htmlFor="password">Password</label>
              {/* for a password */}
              <input
                autoComplete="off"
                className="form-control"
                id="password"
                name="password"
                onChange={this.handleChange}
                type="password"
                value={password}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthForm;
