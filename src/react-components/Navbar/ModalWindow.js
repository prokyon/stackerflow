import React from "react";

class ModalWindow extends React.Component {
  renderModalContent() {
    return (
      <section className="modal">
        <section className="modal-wrap">
          <img src="/img/close.png" onClick={this.props.hideModal}/>
        </section>

        <section className={"modal-content " + this.props.style}>
          <section>{this.props.children}</section>
        </section>
      </section>
    );
  }

  render() {
    return (
      <section>
        {
          this.props.status? this.renderModalContent() : null
        }
      </section>
    );
  }
}

export default ModalWindow;
