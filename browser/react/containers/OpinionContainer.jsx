import React, { Component } from 'react'

class OpinionContainer extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      opinion: '',
      pipiOpinion: '',
    }   
  }

  handleChange(field, evt){
    this.setState(Object.assign({}, this.state, {
      [field]: evt.target.value
    }))
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <h2>Please Enter Your Opinions.</h2>
        <textarea
          name='opinion'
          onChange={this.handleChange.bind(this, 'opinion')}
          value={this.props.opinion}/>
        <h2>Pipi Says:</h2>
      </div>
    )
  }
}

export default OpinionContainer