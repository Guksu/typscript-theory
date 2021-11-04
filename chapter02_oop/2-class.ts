{
  type CoffeeCup = {
    shots: number;
    hasmilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 7; // class level (사용시 인스턴스 불필요)
    coffeeBeans: number = 0; // instance level (사용시 인스턴스 필요)

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

  const maker = new CoffeeMaker(40);
  console.log(maker);
  console.log(CoffeeMaker.BEANS_GRAM_PER_SHOT);
  console.log(maker.makeCoffee(5));
}
