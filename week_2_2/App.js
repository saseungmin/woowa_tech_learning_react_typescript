import React from "react";

const SessionItem = ({ title }) => <li>{title}</li>;

// class ClassApp extends React.Component {
//   constructor(props) {
//     // this.props 컨텍스트 객체
//     super(props);

//     // this.onToggleDisplayOrder = this.onToggleDisplayOrder.bind(this);

//     this.state = {
//       displayOrder: "ASC"
//     };
//   }

//   // onToggleDisplayOrder(){
//   //   // 그냥 함수 실행 컨텍스트를 따른다.
//   //   this.setState({
//   //     displayOrder:displayOrder ==='ASC' ? 'DESC' : 'ASC'
//   //   })
//   // }

//   toggleDisplayOrder = () => {
//     // arrow는 이
//     this.setState({
//       displayOrder: displayOrder === "ASC" ? "DESC" : "ASC"
//     });
//   };

//   render() {
//     return (
//       <div>
//         여기여기
//         <button onClick={this.onToggleDisplayOrder}>정렬</button>
//       </div>
//     );
//   }
// }

const App = (props) => {
  const [displayOrder, toggleDisplayOrder] = React.useState("ASC");
  // let displayOrder = 'ASC';
  const { sessionList } = props.store;
  const orderedSessionList = sessionList.map((session, i) => ({
    ...session,
    order: i
  }));

  // console.log(sessionList, orderedSessionList);

  const onToggleDisplayOrder = () => {
    toggleDisplayOrder(displayOrder === "ASC" ? "DESC" : "ASC");
    // displayOrder = displayOrder === 'ASC' ? 'DESC' : 'ASC';
  };
  return (
    <div>
      <header>
        <h1>React and TypeScript</h1>
      </header>
      <p>전체 세션 갯수: 4개 {displayOrder}</p>
      <button onClick={onToggleDisplayOrder}>재정렬</button>
      <ul>
        {/* 상태 */}
        {/* {sessionList.map((session) => (
          <li>{session.title}</li>
        ))} */}

        {orderedSessionList.map((session) => (
          <SessionItem title={session.title} key={session.id} />
        ))}
      </ul>
    </div>
  );
};

export default App;
