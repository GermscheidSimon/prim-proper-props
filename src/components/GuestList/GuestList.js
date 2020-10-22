import React, {Component} from 'react';

class GuestList extends Component {

    render(){

        return (
            <>
            <h2>Guest List</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Kid's Meal</th>
                </tr>
              </thead>
              <tbody>
                {this.props.guests.map(guest => (
                  <tr key={guest.name}>
                    <td>{guest.name}</td>
                    <td>{guest.kidsMeal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </>
        )

    }

}

export default GuestList;
