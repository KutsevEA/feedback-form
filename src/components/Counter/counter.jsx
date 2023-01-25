import React from 'react';

export class Counter extends React.Component {

  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  handleButton = (x) => {
    const a = x
    console.log(x);
        console.log(a);
 
    this.setState(prevState => {
      console.log(prevState);
      console.log((prevState.{a}));
      console.log(prevState.x + 1);
      return {
        x: prevState.x + 1,
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
            <button
              type="button"
              onClick={currentTarget => {
                this.handleButton(currentTarget.target.textContent);
              }}
            >
              Good
            </button>
            <button
              type="button"
              onClick={currentTarget => {
                this.handleButton(currentTarget.target.textContent);
              }}
            >
              Neutral
            </button>
            <button
              type="button"
              onClick={currentTarget => {
                this.handleButton(currentTarget.target.textContent);
              }}
            >
              Bad
            </button>
          </div>
        </section>
        <section>
          <h2>Statistics section</h2>
          <p>Statistics</p>
          <div>
            <p>Good:{this.state.Good}</p>
            <p>Neutral:{this.state.Neutral}</p>
            <p>Bad:{this.state.Bad}</p>
          </div>
        </section>
      </div>
    );
  }
}
