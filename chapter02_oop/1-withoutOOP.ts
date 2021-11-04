{
  type CoffeeCup = {
    shots: number;
    hasmilk: boolean;
  };

  const BEANS_GRAM_PER_SHOT: number = 7;

  let coffeeBeans: number = 0;

  const makeCoffee = (shots: number): CoffeeCup => {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
    }
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots: shots,
      hasmilk: false,
    };
  };
  coffeeBeans += 5;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
