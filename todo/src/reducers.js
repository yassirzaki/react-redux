import { combineReducers } from "redux";
import { TASK_ADD, TASK_REMOVE, TASK_UPDATE } from "./constants";

export function taskValueReducer(state="", action) {

    switch (action.type) {

        case TASK_UPDATE:
            return action.payload

        default:
            return state
    }
}

export function taskListReducer(state=[], action) {

    switch (action.type) {
        case TASK_ADD:
            return [...state, action.payload]

        case TASK_REMOVE:
            return state.filter((task) => task !== action.payload)

        default:
            return state
    }
}


export const tasksReducer = combineReducers({
    taskValue: taskValueReducer,
    taskList: taskListReducer,
});