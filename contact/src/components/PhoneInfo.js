import React, { Component } from 'react';

class PhoneInfo extends Component {

    render() {
        //비구조화 할당 -> 배열이나 객체에서 에서 원하는 값 추출
        //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        const { name, phone, id } = this.props.info;    //비구조화 할당으로 name,phone,id값 가져옴

        const style ={
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        }
        return (
            <div style={style}>
                <div><b>{name}</b></div>    
                <div>{phone}</div>
            </div>
        );
    }
}

export default PhoneInfo;