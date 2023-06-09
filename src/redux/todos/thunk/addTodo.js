import { added } from "../actions";


const addTodo = (todoText) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:9000/todos', {
            method: 'POST',
            body: JSON.stringify({
                text: todoText,
                completed: false
            }),
            headers: {
                "Content-type": 'application/json; charset=UTF-5'
            }
        });
        const todo = await res.json();
        dispatch(added(todo.text))
    }
}

export default addTodo;