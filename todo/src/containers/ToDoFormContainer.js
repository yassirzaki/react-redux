import { connect } from 'react-redux';
import { taskUpdate, taskAdd } from '../actions';
import ToDoForm from '../ToDoForm';
import { selectTaskValue } from '../selectors'

function mapStateToProps(state) {
  return {
    taskValue: selectTaskValue(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    taskUpdate: (taskValue) => dispatch(taskUpdate(taskValue)),
    taskAdd: (taskValue) => dispatch(taskAdd(taskValue)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);