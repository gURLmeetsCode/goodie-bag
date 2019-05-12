import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getCandiesThunk } from '../reducers'
import {SingleCandy} from './SingleCandy'

 class DisconnectedListCandies extends Component{

   componentDidMount(){
     this.props.getCandies()
   }

   render(){
     return(
       <div>
         {this.props.candies.map(candy => (
            <SingleCandy key={candy.id} candy={candy} />
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

 export const ListCandies = connect(mapState, mapDispatch)(DisconnectedListCandies)
