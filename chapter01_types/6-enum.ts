{
  enum Days {
    Monday, //0 출력
    Tuesday, //1 출력
    Wednesday, //2 출력
    Thursday = 4, //4 출력
    Priday = "fri", // "fri" 출력
  }

  console.log(Days.Monday);

  // enum은 상수값을 관리한다.
  // Ts에서 enum은 사용하지 않는것이 좋다.
  // 왜냐하면 enum은 어떠한 타입도 할당이 가능해서 문제가 생길 수 있다.
  // 따라서 enum 대신 union 타입을 사용하는것이 더 좋다.
}
