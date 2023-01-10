import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = ({todos, changeStatusTodo, deleteTodo}) => {
    
    if (!todos.length) return <p>Список задач пуст</p>  // Если длина списка задач НЕ >= 1 (те пустой), то выводим фразу

    return (
        <ul className="list-group">
            {todos.map((todo, index) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    index={index}
                    completed={todo.completed}
                    changeStatusTodo={changeStatusTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    )
}