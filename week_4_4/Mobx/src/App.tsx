import * as React from "react";
import { inject, observer } from "mobx-react";
import "./styles.css";

interface AppProps {
  data: number;
  counter: number;
}

@inject("cart")
@observer
export default class App extends React.Component<AppProps> {
  render() {
    return (
      <div className="App">
        <h1>
          외부 데이터: {this.props.data} vs. {this.props.counter}
        </h1>
      </div>
    );
  }
}

// export default function App(props: AppProps) {
//   return (
//     <div className="App">
//       <h1>
//         외부 데이터: {props.data} vs. {props.counter}
//       </h1>
//     </div>
//   );
// }
