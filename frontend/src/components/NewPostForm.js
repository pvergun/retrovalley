import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";

var API_URL = 'api/posts/'

class NewPostForm extends React.Component {
  state = {
    pk: 0,
    title: "",
    author: "",
    content: ""
  };

  componentDidMount() {
    if (this.props.post) {
      const { pk, title, author, content} = this.props.post;
      this.setState({ pk, title, author, content});
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createPost = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editPost = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.pk ? this.editPost : this.createPost}>
        <FormGroup>
          <Label for="title">Title:</Label>
          <Input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="content">Content:</Label>
          <Input
            type="text"
            name="content"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.content)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewPostForm;