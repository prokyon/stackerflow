import React from "react";
import ModalWindow from "./ModalWindow";

class PostQuestionModal extends React.Component {
  postQuestion = () => {
    
  };

  render() {
    return (
      <ModalWindow {...this.props} style="post-question-modal">
        <header>
          Post a question
        </header>

        <section>
          <table>
            <tbody>
              <tr>
                <td>Title</td>
                <td>
                  <input placeholder="Please enter your question title.">
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  <input placeholder="Please enter your question description">
                </td>
              </tr>
              <tr>
                <td>Tags</td>
                <td>
                  <input placeholder="Please enter tags">
                </td>
              </tr>
              <tr>
                <td>Image</td>
                <td>
                  <input placeholder="Please enter link to image">
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
