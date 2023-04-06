import { colorSelected } from "../actions";

const updateColor = (todoId, color) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: 'PATCH',

            body: JSON.stringify({
                color: color
            }),
            headers: {
                "Content-type": 'application/json'
            }
        });
        const todo = await res.json();
        dispatch(colorSelected(todo.id, todo.color))
    }
}

export default updateColor;