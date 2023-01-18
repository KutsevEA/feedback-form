import React from 'react';

export class Counter extends React.Component {
  // static defoultProps = {./././...........////
  //   BlaBlaBla: BlaBla
  // };

  // static propType = {.......///////
  // }

  //   constructor() {
  //     super();
  //     this.state = {
  //       Good: 0,
  //       Neutral: 0,
  //       Bad: 0,
  //     };
  // }

  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  handleGoodButton = () => {
    this.setState(prevState => {
      return {
        Good: prevState.Good + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Feedback_APP</h1>
        <section>
          <h2>Feedback button section</h2>
          <p>Please leave feedback</p>
          <div>
            <button type="button" onClick={this.handleGoodButton}>
              Good
            </button>
            <button type="button">Neutral</button>
            <button type="button">Bad</button>
          </div>
        </section>
        <section>
          <h2>Statistics section</h2>
          <p>Statistics</p>
          <div>
            <span>Good:{this.state.Good}</span>
            <span>Neutral:{this.state.Neutral}</span>
            <span>Bad:{this.state.Bad}</span>
          </div>
        </section>
      </div>
    );
  }
}
