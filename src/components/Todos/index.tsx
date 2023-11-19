import { useTodosStore } from '../../store/store';
import Todo from '../Todo';

function Todos() {
    const todos = useTodosStore((state) => state.todos);
    const { addTodo } = useTodosStore();
    return (
        <>
            <h1>TODOlist</h1>
            {todos.length === 0 && (
                <h3
                    style={{
                        textAlign: 'center',
                        font: "24px 'Helvetica Neue', Helvetica, Arial, sans-serif",
                        fontWeight: 200,
                    }}
                >
                    No todos yet
                </h3>
            )}
            <ul className="todo-list">
                {todos.map((todo) => {
                    return (
                        <li
                            key={todo.id}
                            className={todo.done ? 'completed' : ''}
                        >
                            <Todo todo={todo} />
                        </li>
                    );
                })}
            </ul>
            <button
                onClick={() => {
                    addTodo({
                        done: false,
                        id: todos.length + 1,
                        text: 'New todo',
                    });
                }}
                className="button"
            >
                Add TODO
            </button>
        </>
    );
}

export default Todos;
