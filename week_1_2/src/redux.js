export function createStore(reducer) {
    // 클로저로 상태를 숨긴다.
    let state;
    const listeners = [];
    // 새로운 객체를 내보낸다.
    const getState = () => ({ ...state });
  
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach((fn) => fn());
    };
  
    const subscribe = (fn) => {
      listeners.push(fn);
    };
  
    return {
      getState,
      dispatch,
      subscribe
    };
  }