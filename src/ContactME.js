import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';




 class ContactMe extends Component {
    constructor(){
        super();
        this.state ={ 
          Name: "sonia ABBES",
          Age : 26,
          adresse : "soniaabbes1997@gmail.com",
          timer:0

        }
    }
    componentDidMount(){
      this.timerId= setInterval (()=>{this.setState({timer:this.state.timer+1})},1000)
    }
  render() {
    return (
      <div className='ContactMe'>
         <>{this.state.timer}</>
        
         <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='formLabel'> Name </Form.Label>
        <Form.Control type="text" value ={this.state.Name} className='formControl' />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='formLabel'>Email address</Form.Label>
        <Form.Control type="email"  value = {this.state.adresse}  className='formControl'/>
        
      </Form.Group>
      

      
     
    </Form>
      </div>
    )
  }
}

export default ContactMe