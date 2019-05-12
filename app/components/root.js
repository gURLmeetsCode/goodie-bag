import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getCandiesThunk } from '../reducers'
// import SingleCandy from './SingleCandy'

class DisconnectedRoot extends Component{
  componentDidMount(){
    this.props.getCandies()
  }

  render(){
    return(
      <div>
        <nav>
            Goodie Bag
        </nav>
        <main>
           <h1>Welcome to the Goodie Bag!</h1>
            <p>What a nice home page for your goodies!</p>
        </main>
        {this.props.candies.map(candy => (
            // <SingleCandy key={candy.id} candy={candy} />
          <div key={candy.id}>
            {candy.name}
          <br/>
            {candy.description}
            <img src={candy.imageUrl}/>
            <h5>quantity: {candy.quantity}</h5>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => ({
  candies: state.candies
})

const mapDispatch = dispatch => ({
  getCandies: () => dispatch(getCandiesThunk())
})

export const Root = connect(mapState, mapDispatch)(DisconnectedRoot)
