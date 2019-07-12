import React, { Component } from 'react';
import { connect } from 'react-redux';


function CounterControlled(props) {
  return (
    <div className="CounterControlled">
      <button onClick={() => props.handleClick(10)}>{props.count}</button>
    </div>
  );
}

function mapStateToProps(state){
    return{
        count: state.count,
    };
}

function mapDispatchToProps(dispatch){
    return {
        handleClick: (step) => dispatch({type: 'COUNTER_INCREMENT', payload: step})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterControlled)