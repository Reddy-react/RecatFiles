import React, { Component } from 'react'
export default class LifeCycle extends Component {
      constructor(props){
     super(props)
     console.log("Constructor");
     this.state = {
        count:0
     }
    }

    incre=()=>{
        this.setState(
            {
                count:this.state.count+1
            }
        )
      }
   componentDidMount(){
    console.log("Component did mount");
   }

   componentDidUpdate(){
    console.log("updating");
   }
   render(){
    console.log("render");
   }

  render() {
    
    return (
      <div>
        {this.state.count}
        <button onClick={this.incre}>Increment</button>
      </div>
    )
  }

  componentWillUnmount(){
    alert("Component will deleted")
    console.log("Component wil  UnMount")
  }
}
