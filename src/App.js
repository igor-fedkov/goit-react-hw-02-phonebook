import './App.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import PhoneBook from './components/phoneBook'

class App extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string
    })),
    filter: PropTypes.string
  }

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
		this.setState(
      { [name]: value }
    )
  }
  
  addContact = ({ name, number }) => {
    const usedContactName = this.state.contacts.find(contact => contact.name === name);
    if (usedContactName !== undefined) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: uuidv4(),
      name,
      number
    }
    
    this.setState(state => {
      return {
        contacts: [...state.contacts, contact]
      }
    })
  };

  deleteContact = (id => {
    this.setState(state => {
      return {contacts: state.contacts.filter(contact => contact.id !== id)}
    })
  })

  

  render() {
    const { contacts, name, number, filter } = this.state;

    return (
      <div className="App">
        <PhoneBook
          name={name}
          number={number}
          addContact={this.addContact}
          onInputChange={this.onInputChange}
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
