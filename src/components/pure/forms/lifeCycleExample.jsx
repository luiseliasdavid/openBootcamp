import { ReactPropTypes } from 'react'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class lifeCycleExample extends Component {
  constructor(props){
    super(props)
    console.log('Constructor: cuando se inicializa el componente')
  }
  componentWillMount(){
   console.log('componente will mount')
  }
  componentDidMount(){
   console.log('componente did mount')
  }
  componentWillUnmount(){
    console.log('componente will unmount')
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
