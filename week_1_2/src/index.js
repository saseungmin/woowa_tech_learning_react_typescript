import { createStore } from "./redux";

const INCREMENT = "increment";
const RESET = "reset";

function reducer(state = {}, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      count: state.count ? state.count + 1 : 1
    };
    //state.abc = 'OK';
  } else if (action.type === RESET) {
    return {
      ...state,
      count: action.resetCount
    };
  }
  return state;
}

const store = createStore(reducer);

function update() {
  console.log(store.getState());
}
store.subscribe(update);

function actionCreator(type, data) {
  return {
    ...data,
    type: type
  };
}

function increment() {
  store.dispatch(actionCreator(INCREMENT));
}

function reset() {
  store.dispatch(actionCreator(RESET, { resetCount: 10 }));
}

increment();
increment();
increment();
increment();
increment();

reset();

increment();

// store.dispatch(actionCreator(INCREMENT));
// store.dispatch(actionCreator(INCREMENT));
// store.dispatch(actionCreator(INCREMENT));
// store.dispatch(actionCreator(INCREMENT));
// store.dispatch(actionCreator(INCREMENT));

// 컴포넌트는 데이터 받아서 그리기만 한다.
// 컴포넌트는 스토어의 상태를 바꾸지 못한다.
// console.log(store.getState());