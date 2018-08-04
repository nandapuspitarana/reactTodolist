import React, { Component } from 'react';
import Aux from '../hoc/Auxiliary';
import { Input, Button, Alert } from 'reactstrap';
import SimpleStorage from 'react-simple-storage';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      list: []
    };
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ''
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <Aux>
        <SimpleStorage parent={this} />
        {this.state.list.map(item => {
          return (
            <Aux>
              <Alert
                onClick={() => this.deleteItem(item.id)}
                color="info"
                key={item.id}>
                {item.value}{' '}
              </Alert>
            </Aux>
          );
        })}
        <Input
          type="text"
          placeholder="Type item here"
          value={this.state.newItem}
          onChange={e => this.updateInput('newItem', e.target.value)}
        />
        <Button
          className="float"
          onClick={() => this.addItem()}
          disabled={!this.state.newItem.length}>
          +
        </Button>
      </Aux>
    );
  }
}
