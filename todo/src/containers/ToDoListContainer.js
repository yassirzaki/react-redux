import { connect } from 'react-redux';
import { taskRemove } from '../actions';
import ToDoList from '../ToDoList';
import { selectTaskList } from '../selectors'

function mapStateToProps(state) {
  return {
    taskList: selectTaskList(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    taskRemove: (taskValue) => dispatch(taskRemove(taskValue)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);