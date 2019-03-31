import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    //clear content
    this.setState({
      name: '',
      email: '',
      phone: ''
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name.."
                    value={name}
                    onChange={this.onchange}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email.."
                    value={email}
                    onChange={this.onchange}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone.."
                    value={phone}
                    onChange={this.onchange}
                  />
                </form>
              </div>
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-light btn-block"
              />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
