import { useTodosStore } from '../../store/store';
import { Todo } from '../../types';

type Props = {
    todo: Todo;
};

function Todo({ todo }: Props) {
    const { toggleTodo, removeTodo, updateTodoText } = useTodosStore();

    return (
        <div className="todo-container">
            <label
                className="checkbox-container"
                style={{
                    padding: '0px',
                }}
            >
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={todo.done}
                    readOnly
                    onChange={() => {
                        toggleTodo(todo.id, !todo.done);
                    }}
                />
                <span className="checkmark"></span>
            </label>
            <input
                type="text"
                className="todo-input"
                value={todo.text}
                style={{
                    color: todo.done ? 'gray' : 'black',
                    textDecoration: todo.done ? 'line-through' : 'none',
                }}
                onChange={(e) => {
                    updateTodoText(todo.id, e.target.value);
                }}
            />
            {/* <label>{todo.text}</label> */}
            <button
                onClick={() => {
                    removeTodo(todo.id);
                }}
                style={{
                    height: 'auto',
                    marginBottom: '0px',
                }}
                className="destroy"
            />
        </div>
    );
}

export default Todo;
