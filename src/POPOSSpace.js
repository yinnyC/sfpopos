// src/Project.js
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './POPOSSpace.css';

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props
  return (
    <div className="POPOSSpace">
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt='{name}' />
      </Link>
      <h3>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h3>
      <div>{address}</div>
      <div className="hours">{hours}</div>
      <Counter/>
    </div>
  )
}

class Counter extends Component {
  state = {
    count: 0
  }
  increase_like = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }
  render(){
    return(
      <button onClick={this.increase_like}>❤ {this.state.count}</button>
    )
  
  }
}
export default POPOSSpace