import React, { Component, PropTypes } from 'react';


class Header extends Component {
	static propTypes = {
	};
  render() {
  	console.log('items', this.props.items);
    return (
      <div>
      {this.props.items.map((item, index) =>
  <a href={item.link} key={index}>{item.label}</a>
)}
        Header
      </div>
    );
  }
}

export default Header;
