import React from 'react';

function salam(waktu) {
  if (waktu < 10) {
    return 'Good Morning';
  } else if (waktu > 9 && waktu < 16) {
    return 'Good Afternoon';
  } else if (waktu > 15 && waktu < 21) {
    return 'Good evening';
  } else {
    return 'Have a nice dream';
  }
}

const Greating = props => {
  let dataSalam = salam(props.termtime);
  return <span id="salam">{dataSalam}</span>;
};

export default Greating;
