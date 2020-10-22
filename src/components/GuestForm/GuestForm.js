import React, { Component } from "react";

class GuestForm extends Component{
    render(){
        return (
            <>
            <h2>Add a new guest</h2>
            <form onSubmit={this.props.handleSubmit}>
            <label>
            Name
            </label>
            <input
            type="text"
            placeholder="Name"
            value={this.props.newGuest.name}
            onChange={this.props.handleChangeFor('name')}
            />
            <div>
            Would this guest like a kid's meal?
            <div onChange={this.props.handleChangeFor('kidsMeal')}>
                <div>
                <label>
                    <input
                    type="radio"
                    value="yes"
                    name="kidsMeal"
                    />
                    Yes, this guest would like a Kid's Meal
                </label>
                </div>
                <div>
                <label>
                    <input
                    type="radio"
                    value="no"
                    defaultChecked
                    name="kidsMeal"
                    />
                    No, this guest would not like a Kid's Meal
                </label>
                </div>
            </div>
            </div>
            <button type="submit">Add Guest</button>
            </form>
            </>
        )

    }
}

export default GuestForm;