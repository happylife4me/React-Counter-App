import React, { Component } from 'react';
import { connect } from 'react-redux';
class displayCounter extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="container">
        <div className="notification">
          <h1>
             {this.props.count}
          </h1>
         
        </div>
    </div>
    )
  }
}
function mapStateToProps(state){
  // state.counter means  - counter is key in reducer of index.js
  console.log(state.counter)
  return {
    count: state.counter
  };
}
export default connect(mapStateToProps)(displayCounter);


