{
  const checkNull = <T>(arg: T | null): T => {
    if (arg === null) {
      throw new Error("Null !!");
    }
    return arg;
  };

  // 예제
  interface Employee {
    pay(): void;
  }

  class Full implements Employee {
    pay() {
      console.log("Full!!");
    }
    workFullTime() {}
  }

  class Part implements Employee {
    pay() {
      console.log("part!!");
    }
    workPartTime() {}
  }
  //generic에 조건 거는방법
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const guk = new Full();
  const su = new Part();

  // 조건을 거는 다른 방법
  const obj = {
    name: "s",
    age: 18,
  };

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj, "name"));
  console.log(getValue(obj, "age"));
}
