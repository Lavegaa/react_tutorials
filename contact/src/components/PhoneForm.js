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

    render() {
        return (
            <form>
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
                <div>
                    {this.state.name}   {this.state.phone}
                </div>

            </form>
        );
    }
}

export default PhoneForm;