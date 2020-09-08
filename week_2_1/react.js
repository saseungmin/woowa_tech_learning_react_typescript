// import React from "react";
// import ReactDOM from "react-dom";
/* @jsx createElement */

// 버추얼 돔
/*
const vdom = {
  type: 'ul',
  props: {}, // 속성
  children: [
    {
      type: 'li', props: {className: 'item'}, children: 'React'
    },
    {
      type: 'li', props: {className: 'item'}, children: 'Redux'
    },
    {
      type: 'li', props: {className: 'item'}, children: 'TypeScript'
    },
    {
      type: 'li', props: {className: 'item'}, children: 'Mobx'
    }
  ] // 자식
}
*/

// 재귀함수
function renderElement(node) {
    if (typeof node === "string") {
      return document.createTextNode(node);
    }
    const el = document.createElement(node.type);
  
    node.children.map(renderElement).forEach((element) => {
      el.appendChild(element);
    });
  
    return el;
  }
  
  function render(vdom, container) {
    container.appendChild(renderElement(vdom));
  }
  
  function createElement(type, props = {}, ...children) {
    if (typeof type === "function") {
      return type.apply(null, [props, ...children]);
    }
    return { type, props, children };
  }
  
  function Row(props) {
    return <li>{props.label}</li>;
  }
  
  // 컴포넌트 이름을 변경할 수 있다.
  function StudyList(props) {
    // 버추얼돔을 만드는 녀석
    //React.createElement('ul',{});
    // 언제 화면을 붙일까? render 할때
    return (
      <ul>
        <Row label="하하하" />
        <li className="item" label="haha">
          React
        </li>
        <li className="item">Redux</li>
        <li className="item">TypeScript</li>
        <li className="item">Mobx</li>
      </ul>
    );
  }
  
  function App() {
    //const vdom = createElement('ul', {}, createElement('li', {}, 'React'));
  
    //console.log(vdom);
    return (
      <div>
        <h1>Hello?</h1>
        <StudyList item="abcd" id="hoho" />
      </div>
    );
  }
  
  console.log(<App />);
  
  render(<App />, document.getElementById("root"));
  
  //ReactDOM.render(<App />, document.getElementById("root"));
  