import React, {Component} from 'react';
import './Contact.css';

export default class Contact extends Component {
  state = { currentView: 'View' };
  constructor(props) {
    super(props);
    this.state = {...this.state, ...this.props};
  }
  render() {
    return(
      <tr key = {this.props.index}>
        <td>{this.state.currentView === 'View' ? this.state.user.name :
          <input
            value = {this.state.user.name}
            onChange = {(event) => {
              let value = event.target.value;
              let user = {...this.state.user, name: value};
              this.setState({user});
            }}
            style={{fontSize: '22px'}} />}
        </td>
        <td>{this.state.currentView === 'View' ? this.state.user.contact :
          <input
            value = {this.state.user.contact}
            onChange = {(event) => {
              let value = event.target.value;
              let user = {...this.state.user, contact: value};
              this.setState({user});
            }}
            style={{fontSize: '22px'}} />}
        </td>
        <td>{this.state.currentView === 'View' ? this.state.user.location :
          <input
            value = {this.state.user.location}
            onChange = {(event) => {
              let value = event.target.value;
              let user = {...this.state.user, location: value};
              this.setState({user});
            }}
            style={{fontSize: '22px'}} />}
        </td>
        <td>
          <button className = "button" onClick = {() => {
          this.props.onDeleteContact(this.props.index)}}>Delete</button>
          <button className = "button" onClick = {() => {
            const view = this.state.currentView === 'View' ? 'Edit' : 'View';
            this.setState({currentView: view});
          }}>
            {this.state.currentView === 'View' ? 'Edit' : 'Save'}
          </button>
        </td>
      </tr>
    );
  }
};
