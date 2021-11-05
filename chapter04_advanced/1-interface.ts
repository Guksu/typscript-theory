type Type = {
  x: number;
  y: number;
};

interface Interface {
  x: number;
  y: number;
}

// type 과 interface 둘 다 상속과 implements가 가능하다.
// 그러나 interface는 다른곳에서 또 정의를 할 수 있다.
// 예시

interface Interface {
  z: number;
}

// 그러나 type은 한번 정의하면 끝이다.
