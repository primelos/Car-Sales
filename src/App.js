import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from 'react-redux'
import { addItem, removeItem } from './actions/'

const App = (props) => {
  console.log(props)
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  const removeFeature = item => {
    props.removeItem(item)
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
      props.addItem(item)
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">

        <Header 
        car={props.state.car} />
        
        <AddedFeatures 
        car={props.state.car} 
        removeItem={removeFeature} 
        />

      </div>
      <div className="box">

        <AdditionalFeatures 
        additionalFeatures={props.state.additionalFeatures} 
        addItem={buyItem} 
        />

        <Total 
        car={props.state.car} 
        additionalPrice={props.state.additionalPrice} 
        />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
     state: state.reducer
  }
}

export default connect(mapStateToProps, {addItem, removeItem})(App);
