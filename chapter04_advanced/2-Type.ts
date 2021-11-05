{
  // index Type
  const obj = {
    name: "guksu",
  };
  //"guksu 출력방법"
  obj.name;
  obj["name"];

  // index Type 예시
  type Person = {
    name: string;
    age: number;
  };

  type Name = Person["name"];
  type Key = keyof Person; //  Key는 "name" | "age" 타입인 unio Type이다.
}

{
  // Mapped Type
  type Video = {
    title: string;
    data: number;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // []는 for in문과 같은 코드다 // 모든 key를 하나하나 다 도는 코드
  };

  type VideoOptional = Optional<Video>;
}

{
  //Conditional Type
  type Check<T> = T extends string ? boolean : number;
  // T가 string을 상속하면 boolean 타입 아니면 number타입
}
