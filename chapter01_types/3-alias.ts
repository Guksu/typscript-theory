{
  // ts는 새로운 타입을 정할 수 있다.
  type Jong = string;
  const name: Jong = "min";

  type Student = {
    name: string;
    age: number;
  };

  // String Literal Types
  type BlaBla = "name";
  let ex: BlaBla;
  ex = "name";

  // Union Types  : OR

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {}
  move("left");
}
