import React, { Component } from 'react';

class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.state = {isOpened : false }
	}
	toggleState (){
		this.setState({ isOpened: !this.state.isOpened });
	}

  render() {
  	let dropdownText = null
  	if (this.state.isOpened){
  		dropdownText = <div> My dropped menu</div>
   	}
    return (<div onClick={this.toggleState.bind(this)}>
    	Its dropdown baby
    	{dropdownText}
    	</div>)
  }
}

export default Dropdown;