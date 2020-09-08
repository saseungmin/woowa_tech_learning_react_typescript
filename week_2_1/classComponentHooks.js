import React, { useState } from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  componentDidMount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <p>안녕하세요!</p>;
  }
}

// const hello = new Hello();

// if(hello.hasOwnProperty('componentDidMount')){
//   hello.componentDidMount();
// }

function App() {
  // 반환하는 값은 배열
  const [counter, setCounter] = useState(1);
  // const counter = result[0];
  // const setCounter = result[2];

  return (
    <div>
      <h1 onClick={() => setCounter(counter + 1)}>상태{counter}</h1>
      <Hello />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
