import { create } from 'zustand';
import { ListOfTodos, Todo } from '../types';

type Store = {
    todos: ListOfTodos;
    getTodos: () => void;
    addTodo: (todo: Todo) => void;
    toggleTodo: (id: number, done: boolean) => void;
    updateTodoText: (id: number, text: string) => void;
    removeTodo: (id: number) => void;
};

export const useTodosStore = create<Store>()((set) => ({
    todos: [],
    getTodos: () => {
        // GET TODOS FROM LOCAL STORAGE
        const todos = localStorage.getItem('todos');
        if (todos) {
            set((state) => {
                return { ...state, todos: JSON.parse(todos) };
            });
        }
    },
    addTodo: (todo: Todo) => {
        set((state) => {
            return { ...state, todos: [...state.todos, todo] };
        });

        // SAVE IN LOCAL STORAGE
        localStorage.setItem(
            'todos',
            JSON.stringify([...useTodosStore.getState().todos, todo]),
        );
    },
    toggleTodo: (id: number, done: boolean) => {
        set((state) => {
            const newTodos = state.todos.map((t) => {
                if (t.id === id) {
                    return { ...t, done: done };
                } else {
                    return t;
                }
            });

            // SAVE IN LOCAL STORAGE
            localStorage.setItem('todos', JSON.stringify(newTodos));

            return { ...state, todos: newTodos };
        });
    },
    updateTodoText: (id: number, text: string) => {
        set((state) => {
            const newTodos = state.todos.map((t) => {
                if (t.id === id) {
                    return { ...t, text: text };
                } else {
                    return t;
                }
            });

            // SAVE IN LOCAL STORAGE
            localStorage.setItem('todos', JSON.stringify(newTodos));

            return { ...state, todos: newTodos };
        });
    },
    removeTodo: (id: number) => {
        set((state) => {
            const newTodos = state.todos.filter((t) => t.id !== id);

            // SAVE IN LOCAL STORAGE
            localStorage.setItem('todos', JSON.stringify(newTodos));

            return { ...state, todos: newTodos };
        });
    },
}));
