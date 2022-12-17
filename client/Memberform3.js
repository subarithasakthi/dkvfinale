import React, { Component } from 'react'
import { Container, Form, Segment, Grid, Button,Dropdown} from 'semantic-ui-react'
import Drop from './Dropdown';



class Button extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    
    return (
      
     <div></div>    )
  }
}

export default Button;