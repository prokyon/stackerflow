import React from "react";
import ModalWindow from "../Navbar/ModalWindow";

class AnswerModal extends React.Component {
  render() {
    return (
      <ModalWindow {...this.props} style="product-modal-window">
        <h2>Question title here</h2>
      </ModalWindow>
    );
  }
}

export default AnswerModal;
