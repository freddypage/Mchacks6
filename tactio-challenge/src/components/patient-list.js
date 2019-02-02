import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';



class PatientList extends Component {
  //  constructor(props) {

  //   // super(props);   
  //   // this.state = {
  //   //   ingredients:[],
  //   //   ingredient:'',
  //   //   recipes: [] ,
  //   //   id: this.props.id
  //   // }
  //   // this.handleChange = this.handleChange.bind(this);
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  //   // this.handleDeleteCallback = this.handleDeleteCallback.bind(this);
  //   // this.handleSearch = this.handleSearch.bind(this);

  // }

  // componentDidMount() {
  //   // console.log("DATA:",this.props.data)
    
  //   // this.setState({id:this.props.data}, function() {
  //   //   console.log("ID:",this.state.id);
  //   //   fetch('/pantry/recipes/'+this.state.id)
  //   //     .then(res => {
  //   //         console.log("hello",res);
  //   //         return res.json()
  //   //      })
  //   //     .then(recipes => { 
  //   //         this.setState({ recipes: recipes })
  //   //      });

  //   //   fetch('/pantry/pantry/'+this.state.id)
  //   //     .then(res => {
  //   //         console.log(res);
  //   //         return res.json()
  //   //      })
  //   //     .then(ingredients => {  

  //   //         this.setState({ ingredients: ingredients })
  //   //   });
  //   // });
    

  // }

  render() {
    return (
    	<Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    );
  }
}

export default PatientList;