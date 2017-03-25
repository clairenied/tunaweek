import React, { Component } from 'react'
import Markov from 'markov-strings'

class OpinionContainer extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      opinion: '',
      pipiOpinion: '',
    }   
  }

  generateMarkovString(string){

  }

  handleChange(field, evt){
    this.setState(Object.assign({}, this.state, {
      [field]: evt.target.value
    }))
    console.log(this.state)
  }

  render(){
    return(
      <div className="cover">
        <div className="container">
          <h2>Please Enter Your Opinions.</h2>
          <textarea
            name='opinion'
            onChange={this.handleChange.bind(this, 'opinion')}
            value={this.props.opinion}/>
            { this.state.pipiOpinion.length ? 
              <div>
                <h2>Pipi Says:</h2>
                <p>{this.state.pipiOpinion}</p>
              </div>
              : null 
            }
          
        </div>
      </div>
    )
  }
}

export default OpinionContainer