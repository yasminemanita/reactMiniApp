import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewProductForm extends React.Component {
  state = {
    // id: 0,
    nom: "",
    description: "",
     image: "",
   
  };

  // componentDidMount() {
  //   if (this.props.product) {
  //     const {  nom, description} = this.props.product;
  //     this.setState({  nom, description});
  //   }
  // }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createProduct = e => {
    e.preventDefault();
    axios.post(API_URL+"graphql", this.state).then(res => {
     console.log(res); 
     console.log(res.data); 
    });
  };

  // editProduct = e => {
  //   e.preventDefault();
  //   axios.put(API_URL + this.state.id, this.state).then(() => {
  //     this.props.resetState();
  //     this.props.toggle();
  //   });
  // };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.product ? this.editProduct : this.createProduct}>
        <FormGroup>
          <Label for="nom">nom:</Label>
          <Input
            type="text"
            name="nom"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.nom)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">description:</Label>
          <Input
            type="text"
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
          />
        </FormGroup>
         <FormGroup>
          <Label for="image">Image:</Label>
          <Input
            type="text"
            name="image"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.image)}
          />
        </FormGroup> 
       
        <Button>Save</Button>
      </Form>
    );
  }
}

export default NewProductForm;