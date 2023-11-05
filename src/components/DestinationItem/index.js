// Write your code here
import {Component} from 'react'
import './index.css'

const DestinationSearch = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <div className="bg-container">
      <li className="card-container">
        <h1 className="bg-container">{name}</h1>
        <img src={imgUrl} alt="destinationsList" />
      </li>
    </div>
  )
}
export default 