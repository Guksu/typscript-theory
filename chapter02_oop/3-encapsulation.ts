{
  type CoffeeCup = {
    shots: number;
    hasmilk: boolean;
  };

  interface CoffeeMake {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMaker implements CoffeeMake {
    private static BEANS_GRAM_PER_SHOT: number = 7; // 외부에서 접근 불가능
    private coffeeBeans: number = 0;

    protected constructor(coffeeBeans: number) {
      // 외부에서 접근 불가능하지만 상속한 자식은 접근 가능
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("0보다 커야함 !");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots: shots,
        hasmilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(40); // 생성자가 protected 형식이라 오류가 발생
  maker.fillCoffeeBeans(20);

  class User {
    constructor(private firstName: string, private lastName: string) {}

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  const name = new User("kim", "jong");
  console.log(name.fullName);
}
