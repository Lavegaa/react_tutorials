import React, { Component } from 'react';
import TodoItem from '../TodoItem'

class TodoList extends Component {

    shouldComponentUpdate(nextProps,nextState){
        return this.props.todos !== nextProps.todos;
    }
    //최적화를 위해 todos가 수정되었을 때만 리랜더링 한다.

    render() {
        const {todos,onToggle,onRemove} = this.props;
        const todoList = todos.map(
            todo => (
                <TodoItem
                    key={todo.id}
                    done={todo.done}
                    onToggle={()=>onToggle(todo.id)}
                    onRemove={()=>onRemove(todo.id)}>
                    {todo.text}
                </TodoItem>
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoList;
