import { TASK_UPDATE, TASK_ADD, TASK_REMOVE } from './constants';

export function taskUpdate(value) {

  return {
    type: TASK_UPDATE,
    payload: value
  };
}


export function taskAdd(value) {

  return {
    type: TASK_ADD,
    payload: value
  };
}

export function taskRemove(value) {

  return {
    type: TASK_REMOVE,
    payload: value
  };
}