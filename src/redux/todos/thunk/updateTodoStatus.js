import { toggled } from "../actions";

const updateTodoStatus = (todoId, currentStatus) => {
    console.log(todoId)
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: 'PATCH',

            body: JSON.stringify({
                completed: !currentStatus
            }),
            headers: {
                "Content-type": 'application/json'
            }
        });
        const todo = await res.json();
        dispatch(toggled(todo.id))
    }
}

export default updateTodoStatus;