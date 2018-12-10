import React, { Component } from 'react';

class RegistrationForm extends Component {
	constructor (props) {
		super(props);
		this.state = {
			email : ''
		}
	}
	handleSubmit (event){
		  event.preventDefault();
		console.log('form submitted and email value is', this.state.email);
	}
	handleEmailChange (event) {
		 console.log('handleEmailChange', this);
		 this.setState({email: event.target.value});
	}
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input type="text" placeholder="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
      <button> subm</button>
      </form>
    );
  }
}

export default RegistrationForm;
