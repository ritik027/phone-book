import React, {Component} from 'react';
import './ContactList.css';
import Contact from '../Contact/Contact.js';
import Pagination from '@material-ui/lab/Pagination';

class AddContact extends Component{
	state = {
		name: '',
		contact: '',
		email: '',
		search: ''
	};

	render(){
		return(
			<div>
        <div class="wrap">
          <div class="search">
            <input type="text"
									 className="searchTerm"
                   onChange = {(event) => {
                   	this.setState({search: event.target.value});
                   	this.props.onSearch(event.target.value);
                   }}
									 placeholder="Search Contacts"/>
              <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
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
				<span style={{display: 'inline-block', width: '120px', fontSize: '24px', marginBottom: '16px'}}>Email: </span>
				<input type = "text"
               style={{fontSize: '22px'}}
               onChange = {(event) => { this.setState({email: event.target.value})}}
							 value = {this.state.email}/> <br />
				<button className='button button1' onClick={() => {
					this.props.onAddContact(this.state);
					this.setState({name: '', contact: '', email: ''});
        }}>Add Contact</button>
			</div>
			)
		}
}

class ContactList extends Component{

	data = {
		currentPage: 1,
		contactList: [{
			name: 'Ajay',
			contact: 84332,
			email: 'ajay@gmail.com'
		},{
			name: 'Ritik',
			contact: 12323,
			email: 'ritik@gmail.com'
		},{
			name: 'Rahul',
			contact: 3233,
			email: 'rahul@gmail.com'
		},{
			name: 'Akash',
			contact: 33411,
			email: 'akash@gmail.com'
		},{
			name: 'Ramesh',
			contact: 8435772,
			email: 'ramesh@gmail.com'
		},{
			name: 'Suresh',
			contact: 1239874432,
			email: 'suresh@gmail.com'
		},{
			name: 'Rakesh',
			contact: 3288191,
			email: 'rakesh@gmail.com'
		},{
			name: 'Rajesh',
			contact: 33411,
			email: 'rajesh@gmail.com'
		},{
			name: 'Ramrang',
			contact: 84332,
			email: 'ramrang@gmail.com'
		},{
			name: 'Satish',
			contact: 12323,
			email: 'satish@gmail.com'
		},{
			name: 'Suchen',
			contact: 32332132,
			email: 'suchen@gmail.com'
		},{
			name: 'Naveen',
			contact: 33424321,
			email: 'naveen@gmail.com'
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
		const filteredContacts = this.data.contactList.filter((contact) => contact.name.toLowerCase().indexOf(text.toLowerCase())!==-1);
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
							<th>Email</th>
							<th>Delete/Edit Contact</th>
						</tr>
						{this.state.contactList.slice((this.state.currentPage-1)*2, (this.state.currentPage-1)*2 + 2).map((user, index) => {
							return <Contact user = {user}
															key = {user.name}
															index = {index}
															onDeleteContact = {this.onDeleteContact}/>
						})
						}
					</table>
					<div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
						<Pagination
							page={this.state.currentPage}
							count={Math.ceil(this.state.contactList.length / 2)}
							onChange = {(event, page) => {
								this.setState({currentPage: page});
							}}
							color="primary" />
					</div>
				</div>
			</div>
			)
	}
}

export default ContactList