import React from "react";

class ModalWindow extends React.Component {
  renderModalContent() {
    return (
      <section className="modal">
        <section className="modal-wrap">
          <img src="/img/close.png"/>
        </section>

        <section className="modal-content">
          <section>Description tbd</section>
        </section>
      </section>
    );
  }

  render() {
    return (
      <section>
        {this.renderModalContent}
      </section>
    );
  }
}

export default ModalWindow;
