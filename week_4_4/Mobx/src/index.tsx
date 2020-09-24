import * as React from "react";
import { render } from "react-dom";
import { observable, autorun, action } from "mobx";
import App from "./App";

// const store = observable({
//   data: 1
// });

// observable 객체 배열 set map
// const cart = observable({
//   data: 1,
//   counter: 1
// });

// class로 묶어주자
// tsconfig.json에 추가 experimentalDecorators true
class Cart {
  @observable data: number = 1;
  @observable counter: number = 1;

  // myAction = action(() => {
  //   this.data++;
  //   this.counter += 2;
  // });
  @action
  myAction = () => {
    this.data++;
    this.counter += 2;
  };
}

const cart = new Cart();
// observable은 프리미티브 타입은 안된다 observable이 객체라
// const weight = observable(62);
// observable.bax사용 (별로 사용할일이 없다.)
// const weight = observable.box(82);
const rootElement = document.getElementById("root");
// 논리적인 작업단계를 묶어준다.
// const myAction = action(() => {
//   cart.data++;
//   cart.counter += 2;
//   weight.set(weight.get() - 1);
// });
// setInterval(() => {
//   store.data++;
//   render(<App data={store.data} />, rootElement);
// }, 1000);

render(<App data={cart.data} counter={cart.counter} />, rootElement);

// autorun(() => {
//   // console.log(weight.get());
//   render(<App data={cart.data} counter={cart.counter} />, rootElement);
//   // console.log(`in autorun => ${cart.data}`);
// });

setInterval(() => {
  // cart.data++;
  // cart.counter += 2;
  // weight.set(weight.get() -1);
  // myAction();
  cart.myAction();
}, 1000);

// cart.data++;
