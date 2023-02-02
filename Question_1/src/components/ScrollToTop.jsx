import React, { Component } from 'react'

export default class ScrollToTop extends Component {




    scrollUp = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
          
        })
      }
    render() {
    return (
     
       <button className='btn btn-dark position-fixed bottom-0 end-0' onClick={this.scrollUp}>Scroll to Top</button>
    
    )
  }

}
