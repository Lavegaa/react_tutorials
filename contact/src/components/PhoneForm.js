import React, { Component } from 'react';

class PhoneForm extends Component {

    state={
        name: '',
        phone:'',
    }
    //변화가 있을 때 마다 실행되는 이벤트
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value     //여기서 target은 input
            //target에 있는 name 으로 이동해 해당 값을 value로 수정함 
        });
    }

    handelSubmit = (e) =>{
        e.preventDefault();     //submit 시 새로고침을 막아줌
        this.props.onCreate(this.state);    //App.js에서 onCreate로 보내준 handleCreate를 사용 data로 state내부의 정보를 보냄
        this.setState({
            name:'',
            phone:'',
        })
    }

   

    render() {
        const style={
            width: '70%',
            margin: '8px auto'
        }
        return (
            <form onSubmit={this.handelSubmit} style={style}>
                <input 
                    name="name"
                    placeholder="이름" 
                    onChange={this.handleChange} 
                    value={this.state.name}
                />
                <input 
                    name="phone"
                    placeholder="전화번호" 
                    onChange={this.handleChange}
                    value={this.state.phone}
                />
                <button type="submit">등록</button>

            </form>
        );
    }
}

export default PhoneForm;