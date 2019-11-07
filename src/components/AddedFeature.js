import React from 'react';
import { connect } from "react-redux";


const AddedFeature = props => {
  return (
    <li>

      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => {props.removeItem(props.item)}} className="button">X</button>
      {props.feature.name}
    </li>
  );
};
// const mapStateToProps = state => {
//   return{
//   state:  state  
//   }
// }
const mapStateToProps = state => {
  console.log('mapstatetoprops: ', state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  }
}

export default connect(mapStateToProps,{})(AddedFeature);
