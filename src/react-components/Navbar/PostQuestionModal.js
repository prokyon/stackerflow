import React from "react";
import ModalWindow from "./ModalWindow";
import Actions from "../../actions";

class PostQuestionModal extends React.Component {
  postQuestion = () => {
    var newQuestion = {
      name: this.refs.title.value,
      description: this.refs.description.value,
      tags: this.refs.tags.value,
      image: this.refs.image.value,
      likes: 0,
      user: {
        name: this.props.user.name,
        avatar: this.props.user.avatar
      }
    }

    Actions.addQuestion(newQuestion);
  };

  render() {
    return (
      <ModalWindow {...this.props} style="post-modal-window">
        <header className="post-header">
          Post a question
        </header>

        <section>
          <table>
            <tbody>
              <tr>
                <td>Title</td>
                <td>
                  <input placeholder="Please enter your question title." ref="title"/>
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  <input placeholder="Please enter your question description" ref="description"/>
                </td>
              </tr>
              <tr>
                <td>Tags</td>
                <td>
                  <input placeholder="Please enter tags" ref="tags"/>
                </td>
              </tr>
              <tr>
                <td>Image</td>
                <td>
                  <input placeholder="Please enter link to image" ref="image"/>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <footer className="post-footer">
          <button className="post-button" onClick={this.postQuestion}>
            Post question
          </button>
        </footer>
      </ModalWindow>
    );
  }
}

export default PostQuestionModal;
