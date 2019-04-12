import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList/TodoList';


// const initialTodos = new Array(500).fill(0).map(
//     (foo,index) => ({id:index,text:`일정 ${index}`,done:false})
// );  
// 최적화 테스트용
class App extends Component {


    state = {
        input:'',
        // todos: initialTodos 
        // 최적화 테스트용
        todos:[
            {id:0, text:'리액트 공부', done:true},
            {id:1, text:'컴포넌트 스타일링', done:false}
        ]
    }

    id=1
    getId = () => {
        return ++this.id;
    }

    handleChange = (e) => {
        const {value} = e.target
        this.setState({
            input:value
        })
    }

    handleInsert = () => {
        const {todos,input} = this.state;

        const newTodo = {
            text: input,
            done: false,
            id: this.getId()
        };
        this.setState({
            todos: [...todos,newTodo],
            input:''
        })
    }

    handleToggle = (id) => {
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        //findIndex 0부터n까지 돌면서 인덱스값을 조건에따라 찾아준다.

        const toggled = {
            ...todos[index],
            done: !todos[index].done
        }
        //불변성을 위해 ...연산자로 한땀한땀 수정해준다.
        this.setState({
            todos:[
                ...todos.slice(0,index),
                toggled,
                ...todos.slice(index+1,todos.length)
            ]
        });
    }

    handleRemove = (id) => {
        const {todos} = this.state;
        const index = todos.findIndex(todo=>todo.id===id);

        this.setState({
            todos:[
                ...todos.slice(0,index),
                ...todos.slice(index+1,todos.length)
            ]
        });

    }

    render() {

        const {input,todos} = this.state;
        const{
            handleChange,
            handleInsert,
            handleToggle,
            handleRemove
        } = this;

        return (
            <div>
                <PageTemplate>
                    <TodoInput onChange={handleChange} value={input} onInsert={handleInsert}/>
                    <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
                </PageTemplate>
            </div>
        );
    }
}

export default App;