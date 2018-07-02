import React, { Component , Fragment } from 'react';
//div이외의 것으로 감싸기 위해 Fragment를 import함
class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: ''
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state !== nextState){
            return true;
        }
        return this.props.info !== nextProps.info;
    }   //수정된 부분만 리랜더링함
    

    handleToggleEdit = () => {                  //입력모드인지 수정모드인지 판단하는 함수

        const{ info, onUpdate } = this.props;

        if(this.state.editing){                 //editing값이 true -> false일때 즉 적용버튼을 눌렀을 때
            onUpdate(info.id,{
                name: this.state.name,          //onUpdate로 state에 있는 값을 넣어준다
                phone: this.state.phone
            });
        }else {
            this.setState({                     //수정을 눌렀을 때 
                name: info.name,                //현재 info에 있는 값을 불러온다
                phone: info.phone
            })
        }

        this.setState({
            editing: !this.state.editing,
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    render() {
        //비구조화 할당 -> 배열이나 객체에서 에서 원하는 값 추출
        //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        const { name, phone, id } = this.props.info;    //비구조화 할당으로 name,phone,id값 가져옴
        const { editing } = this.state;

        const style ={
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }
        return (
            <div style={style}>
               {
                   editing ? (                                  //수정모드일 때 input태그를 보여줌
                    <Fragment>
                        <div>
                            <input 
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                        </div>
                        <div>
                            <input 
                                name="phone"
                                onChange={this.handleChange}
                                value={this.state.phone}
                            />
                        </div>
                     </Fragment>
                   ) : (                                        //적용모드일 때 수정된 값을 보여줌
                    <Fragment>
                        <div><b>{name}</b></div>    
                        <div>{phone}</div>
                    </Fragment>
                   )
               }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}> 
                    {
                        editing ? (
                            '적용'
                        ) : (
                            '수정'
                        )
                    }
                </button>
            </div>
        );
    }
}

export default PhoneInfo;