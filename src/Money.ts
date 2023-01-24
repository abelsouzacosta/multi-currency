export class Money {
  constructor(protected readonly amount: number) {}

  getAmount(): number {
    return this.amount;
  }

  equals(instace: Money): boolean {
    return this.amount === instace.amount;
  }

  times(rounds: number): Money {
    return new Money(this.amount * rounds);
  }
}
