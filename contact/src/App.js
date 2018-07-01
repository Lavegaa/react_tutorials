import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';


class App extends Component {
  id = 0;

  state ={
    information: [],
  }

  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({
        ...data,                              // 데이터가 추가 될 때 마다 id값을 올려줌
                                              //... Spread연산자, 해당 배열을 복사해온다.
        id: this.id++
      })  //불변성을 유지하기 위해 내장배열함수인 concat을 사용
    });
  }

  handleRemove = (id) => {    //filter를 통한 삭제기능
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)   //파라미터로 받은id값 이외의 것만 출력 -> 파라미터로 받은 id만 삭제
    });
  }

  handleUpdate = (id,data) => {         //해당 수정을 위해 id값과 그에 따른 내용을 수정하는 함수
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id === id){
            return{
              id,
              ...data,
            };
          }
          return info;
        }
      )
    })
  }

  render() {
    return (


      <div className="App">
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneInfoList 
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
        
        
        {/*{JSON.stringify(this.state.information)}*/}
        {/*문자열화 해서 보여줌*/}
      </div>
    );
  }
}

export default App;
