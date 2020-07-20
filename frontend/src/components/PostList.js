import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPostModal from "./NewPostModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

class PostList extends Component {
  render() {
    const posts = this.props.posts;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Author</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!posts || posts.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>{post.author}</td>
                <td align="center">
                  <NewPostModal
                    create={false}
                    post={post}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={post.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default PostList;