// 결국 promise
// Generator function
// function* foo(){

// }
// /* 비동기함수 */
// async function bar() {

// }
// x가 할당되기 전이기 때문에 동시에 실행 불가능
// 그러니 어쩔수 없이 순차적으로 실행할 수 밖에 없다.
// const x = 10;
// const y = x*10;

// 지연을 시켜서 함수 호이스팅 때문에
// const z = () => 10;
// const q = z*10;

// promise 도 위의 지연과 굉장히 비슷
const p = new Promise(function (resolve, reject) {
    // 함수로 실행해서 지연을 일으킨다.
    setTimeout(() => {
      resolve("1");
    }, 100);
    //resolve("1");
  });
  
  p.then(function (r) {
    console.log(r);
  });
  
  // 호출자한테 함수인데 리턴을 여러번 : 코루틴
  // function* make() {
  //   return 1;
  // }
  
  function* makeNumber() {
    let num = 1;
    // 무한 루프이지만 문제가 없다.
    while (true) {
      // 제너레이터 안의 리턴이지만 함수를 끝내지 않고 바깥으로 내보낸다.
      // 기존 상태를 저장하고 있다.
      const x = yield num++;
      // 바깥의 값도 받을 수 있다.
      console.log(x);
    }
  }
  
  // 제네레이터 객체 반환 : 값을 계속 생성해낸다.
  // 코루틴이라고하는 구현체
  const i = make();
  
  const j = makeNumber();
  // next가 실행함.
  // yield가 나올때 리턴
  // 객체를 준다.
  console.log(j.next());
  console.log(j.next("a"));
  //console.log(j.next("a"));
  
  console.log(i);
  
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  const delay2 = (ms) => ms;
  
  // 동기 함수처럼 보인다.
  // 바깥쪽에서 상황을 해결한다.
  function* main() {
    console.log("시작");
    //yield delay(3000);
    yield delay2(3000);
    console.log("3초뒤");
  }
  
  // next가 담겨있는 값
  const it = main();
  // 프로미스 객체가 온다.
  const { value } = it.next();
  console.log(value);
  
  if (value instanceof Promise) {
    value.then(() => {
      it.next();
    });
  } else {
    setTimeout(() => {
      it.next();
    }, value);
  }
  
  // 콜백 함수 구조
  delay(3000).then(() => {
    console.log("3초뒤");
  });
  
  // async
  async function main2() {
    console.log("시작");
    await delay(3000);
    console.log("3초뒤");
  }
  
  main2();
  
  // 비동기 함수는 promise에 최적화되어있다.
  // 제너레이터 더 다양한 상황(응용)에서 사용할 수있다.
  