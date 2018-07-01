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

  render() {
    return (


      <div className="App">
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneInfoList data={this.state.information}/>
        
        
        {/*{JSON.stringify(this.state.information)}*/}
        {/*문자열화 해서 보여줌*/}
      </div>
    );
  }
}

export default App;
