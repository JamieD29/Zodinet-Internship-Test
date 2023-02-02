import React, { Component } from 'react'

export default class GoToBottom extends Component {
    // state={
    //     bottomRoll: false
    // }

    // componentDidMount(){
    //     window.addEventListener("scroll", ()=>{
    //         if(window.screenY > 0 ){
    //           this.setState({
    //             bottomRoll:true
    //           })
    //         }
    //     })
    // }

    scrollDown = () => {
      window.scrollTo({
        top:document.documentElement.scrollHeight,
        behavior: "smooth",
        
      })
    }

    render() {
    return (
      
        <button className='btn btn-warning' onClick={this.scrollDown}>Scroll to Bottom</button>
      
    )

   
  }
}
