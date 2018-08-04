import React from 'react';
import { Alert } from 'reactstrap';

class NoteAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  componentDidMount() {}

  render() {
    return (
      <Alert
        color="info"
        id="list"
        isOpen={this.state.visible}
        toggle={this.onDismiss}>
        <strong>{this.props.textBold}</strong> {this.props.paragraph}
      </Alert>
    );
  }
}

export default NoteAlert;
