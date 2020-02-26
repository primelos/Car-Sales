import React from 'react';

import {removeItem} from '../actions'
import {connect} from 'react-redux'


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=> {props.removeItem(props.feature)}}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null,{removeItem})(AddedFeature);
