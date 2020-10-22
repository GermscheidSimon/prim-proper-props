import React, { Component } from 'react';
import Header from '../Header/Header'
import GuestForm from '../GuestForm/GuestForm'
import GuestList from '../GuestList/GuestList'
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies'
import './App.css';

class App extends Component {
  state = {
    guestList: [],
    newGuest: {
      name: '',
      kidsMeal: 'no',
    },
  }

  handleChangeFor = (propertyName) => (event) => {
    console.log('in function');
    this.setState({
      newGuest: {
        ...this.state.newGuest,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    console.log('in function');
    
    event.preventDefault();
    if (this.state.newGuest.name) {
      console.log('yay');
      this.setState({
        guestList: [...this.state.guestList, this.state.newGuest],
        newGuest: {
          name: '',
          kidsMeal: 'no',
        },
      });
    } else {
      alert('The new guest needs a name!');
    }
  }

  render() {
    return (
      <div className="App">
        < Header/>
        <h2>Party Leader</h2>
        {this.state.guestList[0] && <h3>{this.state.guestList[0].name}</h3>}
        <GuestForm
        newGuest={this.state.newGuest}
        handleChangeFor={this.handleChangeFor}
        handleSubmit={this.handleSubmit}
        />
         <GuestList guests={this.state.guestList}/>
         <DinnerSupplies count={this.state.guestList.length} />
        <footer>
          <h3>Have fun!</h3>
          <p>Don't forget to mind your Ps and Qs!</p>
        </footer>
      </div>
    );
  }
}

export default App;
