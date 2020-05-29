import React, {Component} from 'react';
import './ContactList.css';


const Contact = (props) =>{
	
	return(
		<tr>
    <td>{props.user.name}</td>
    <td>{props.user.contact}</td>
    <td>{props.user.location}</td>
    <td><button className = "danger" onClick = {() => {
    	props.onDeleteContact(props.index)}}>Delete</button></td>
  </tr>
		)
}

class AddContact extends Component{
	state = {
		name: '',
		contact: '',
		location: '',
		search: ''
	};

	render(){
		return(
			<div>
        <div class="wrap">
          <div class="search">
            <input type="text"
									 class="searchTerm"
                   onChange = {(event) => {
                   	this.setState({search: event.target.value});
                   	this.props.onSearch(event.target.value);
                   }}
									 placeholder="Search Contacts"/>
              <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
              </button>
          </div>
        </div>
				<span style={{display: 'inline-block', width: '120px', fontSize: '24px', marginBottom: '16px'}}>Name: </span>
				<input type = "text"
               style={{fontSize: '22px'}}
               onChange = {(event) => { this.setState({name: event.target.value})}}
							 value = {this.state.name} /> <br />
				<span style={{display: 'inline-block', width: '120px', fontSize: '24px', marginBottom: '16px'}}>Contact: </span>
				<input type = "text"
               style={{fontSize: '22px'}}
							 onChange = {(event) => { this.setState({contact: event.target.value})}}
							 value = {this.state.contact} /> <br />
				<span style={{display: 'inline-block', width: '120px', fontSize: '24px', marginBottom: '16px'}}>Location: </span>
				<input type = "text"
               style={{fontSize: '22px'}}
               onChange = {(event) => { this.setState({location: event.target.value})}}
							 value = {this.state.location}/> <br />
				<button className='button button1' onClick={() => {
					this.props.onAddContact(this.state);
					this.setState({name: '', contact: '', location: ''});
        }}>Add Contact</button>
			</div>
			)
		}
}

class ContactList extends Component{

	data = {
		contactList: [{
			name: 'Ajay',
			contact: 84332,
			location: 'Germany'
		},{
			name: 'Ritik',
			contact: 12323,
			location: 'India'
		},{
			name: 'Rahul',
			contact: 3233,
			location: 'Australia'
		},{
			name: 'Akash',
			contact: 33411,
			location: 'Usa'
		}]
	}

	constructor(props) {
		super(props);
		this.state = this.data;
	}

	onDeleteContact = (index) => {
		const {contactList} = this.state;
		contactList.splice(index, 1);
		this.setState({contactList});
	}

	onAddContact = contact => {
    const {contactList} = this.state;
    contactList.push(contact);
    this.setState({contactList});
	}

	onSearch = text => {
		const filteredContacts = this.data.contactList.filter((contact) => contact.name.indexOf(text)!==-1);
		this.setState({contactList: filteredContacts});
	}

	render(){
		return(
			<div className = "ContactList"> 
			<h1>Add Contact</h1>
			<AddContact
				onAddContact = {this.onAddContact}
				onSearch = {this.onSearch}
			/>
			<br />
			<br />
			<br />
			<div className = "Contact">
			<table>
  <tr>
    <th>Name</th>
    <th>Contact</th>
    <th>Location</th>
    <th>Delete Contact</th>
  </tr>
  {this.state.contactList.map((user, index) => {
  	return <Contact user = {user}
										index = {index}
										onDeleteContact = {this.onDeleteContact}/>
  })
  }
  
</table>
			</div>
			</div>
			)
	}
}

export default ContactList