// import './App.css'
import Navbar from './component/Navbar'
import  { Component } from 'react'
// import PropTypes from 'prop-types'
import News from './component/News'

export default class App extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
        <>
          <Navbar/>
          <News pageSize={5}/>
        </>
    )
  }
}

