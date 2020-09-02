import React from 'react';
import ReactDOM from 'react-dom';

// 인터페이스
interface AppProps {
  title: string;
  color: string;
}

// 타입 정의
// 상태 : 시간의 흐름에 따라서 변화하는 것
// 현재 상태는 불변
function App(props: AppProps){
  return (
    <h1>{props.title}</h1>
  )
}

// 버추얼 돔의 랜더를 이용
// 두개의 인자
// render최상위에서만 실행
// 단일 버추얼 돔
ReactDOM.render(
  // 첫번째 인자
  // StrictMode => 경고해주는 안내해주는 개발툴에서 제공하는 툴
  <React.StrictMode>
    <App title="Tech Hello?" color="blue"/>
  </React.StrictMode>,
  // 돔으로 변경후 root 컴포넌트에 붙친다.
  document.getElementById('root')
);
