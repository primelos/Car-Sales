import React from "react";
import Header from "./Header";
import AddedFeatures from "./AddedFeatures";
import AdditionalFeatures from "./AdditionalFeatures";
import Total from "./Total";
import { connect } from "react-redux";
import { addItem, removeItem } from "../actions";
import { axiosWithAuth } from "./utils/axiosWithAuth";

const CarHome = props => {
  const logout = e => {
    e.preventDefault();
    localStorage.clear();
    props.history.push("/");
  };

  return (
    <div className="home-body">
      <div className="boxes">
        <div className="box">
          <Header car={props.state.car} />
          <AddedFeatures />
        </div>
        <div className="box">
          <AdditionalFeatures />

          <Total
            car={props.state.car}
            additionalPrice={props.state.additionalPrice}
          />
        </div>
      </div>
      <button className='log-out' onClick={logout}>Logout</button>

    </div>
  );
};
const mapStateToProps = state => {
  return {
    state: state.reducer
  };
};

export default connect(mapStateToProps, { addItem, removeItem })(CarHome);
