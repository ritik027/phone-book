import React, {Component} from 'react';
import "./PhoneBook.css";

import ContactList from './ContactList/ContactList';

class PhoneBook extends Component{

	render(){
		return(
			<div className = "PhoneBook"> 
			<h1>Phone Book</h1>
			<ContactList/>
			</div>
			)
	}
}

export default PhoneBook