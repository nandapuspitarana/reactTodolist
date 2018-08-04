import React from 'react';
import { Button } from 'reactstrap';

export default class Tombol extends React.Component {
  render() {
    return (
      <div>
        <Button color="success">{this.props.textButton}</Button>{' '}
      </div>
    );
  }
}
