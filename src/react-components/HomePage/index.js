import React from "react";

class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <header>
          <img src="/img/bg.png" width="100%" />
        </header>

        <section>
          <section className="container">
            <h2>Top Questions</h2>
          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;
