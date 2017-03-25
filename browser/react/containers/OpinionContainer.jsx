import React, { Component } from 'react'
import Markov from 'libmarkov'

class OpinionContainer extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      opinion: '',
      pipiOpinion: '',
    }   

    this.bubblesNumber = []
  }

  componentWillMount() {
    for (var i = 0; i < 5; i++){
      this.bubblesNumber.push({
        top: `${Math.floor((Math.random() * 50) + 1)}%`,
        right: `${Math.floor((Math.random() * 100) + 1)}%`,
      })
    }
  }

  generateMarkovChain(string){
    let text = string += " Hello, I am PIPI. I am whatever you want me to be. The more you type, the more your voice and my voice will merge."
    let generator = new Markov(text)
    return generator.generate(5)
  }

  handleChange(evt){
    this.setState(Object.assign({}, this.state, {
      opinion: evt.target.value,
      pipiOpinion: this.generateMarkovChain(evt.target.value),
    }))
  }



  render(){ 
    return(
      <div className="cover">
        { this.bubblesNumber.map((item, i) => {
          const bubbleStyle = this.bubblesNumber[i]
          return (
            <div key={i} className="bubble" style={bubbleStyle}></div>
          )
        }) }
        <div className="container">
          <h2>Tunaweek will podcast your original music for free.</h2>
          <textarea
            name='opinion'
            onChange={this.handleChange.bind(this)}
            value={this.props.opinion}
            placeholder="type something"/>
          { this.state.pipiOpinion.length ? 
            <div>
              <p>{this.state.pipiOpinion}</p>
            </div>
            : <div>
              <p>Hello, I am PIPI. I would bet that you have something to say. Maybe an opinion? The more you type, the more our voices will unify. Give it a try above!</p>
            </div>
          }
          
        </div>
      </div>
    )
  }
}

export default OpinionContainer