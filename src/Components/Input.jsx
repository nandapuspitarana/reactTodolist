import React from 'react';
import { Input } from 'reactstrap';
import '../Styles/Input.css';

const NoteInput = props => {
  return (
    <Input
      type="Text"
      name="text"
      id="isi"
      className="form-control-custom"
      placeholder={props.placeholder}
      required
    />
  );
};

export default NoteInput;
