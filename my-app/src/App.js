import React, { useEffect , useRef , useState , useReducer , Component } from 'react';

class App extends Component{
    constructor(props) {
      super(props);
    }
    
    state = {
          
      isVis : false,
      butStat: true
    }


    showHide = (e)=>{
        this.setState({
          isVis : !this.state.isVis,
          butStat: !this.state.butStat
        })
    }


  render(){

     const {isVis} = this.state;
     const {butStat} = this.state;
     
    return(
      <div className="fac fjc">
        <div className="grid grid-cols-[5fr_1fr] bg-blue-300 p-2">
          <p className="bg-red-300 p-2">Temporibus?</p>
          <button onClick={this.showHide}
          className="btn btn-green">{butStat ? "Show" : "Hide"}</button>
          {isVis && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea?</p>}
        </div>

      </div>
    )
  }
}

export default App;