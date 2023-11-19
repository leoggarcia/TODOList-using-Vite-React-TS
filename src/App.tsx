import Todos from './components/Todos';
import './App.css';
import { useTodosStore } from './store/store';
import { useEffect } from 'react';

function App() {
    const { getTodos } = useTodosStore();
    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className="todoapp" style={{ paddingBottom: '10px' }}>
            this is just a test o branches
            <Todos />
        </div>
    );
}

export default App;
