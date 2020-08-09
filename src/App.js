import React from 'react';
import Tooltip from './components/TooltipWrapper'
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      position: 'top'
    }
  }

  changeState = () => {
    // console.log(this.radio.childNodes)
    let childNodes = this.radio.getElementsByClassName('position');
    let newState = null;
    for(let i = 0; i < childNodes.length; i++) {
      if(childNodes[i].checked) {
        newState = childNodes[i].value;
      }
    }

    this.setState({
      position: newState
    })
  }

  componentDidMount() {
    
  }
  render() {
    return (
      <div className="App">
          <div className="radio" ref={(element) => this.radio = element}>
              <input type="radio" id="top" className="position" name="position" value="top" onClick={this.changeState}/>
              <label>Top</label>
              <input type="radio" id="bottom" className="position" name="position" value="bottom" onClick={this.changeState} />
              <label>Bottom</label>
              <input type="radio" id="left"  className="position" name="position" value="left" onClick={this.changeState}/>
              <label>Left</label> 
              <input type="radio" id="right" className="position" name="position" value="right" onClick={this.changeState} />
              <label>Right</label>
            </div>
          <Tooltip position={this.state.position}></Tooltip>
      </div>
    );
  }
}

export default App;
