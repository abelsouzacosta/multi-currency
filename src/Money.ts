export class Money {
  constructor(protected readonly amount: number) {}

  getAmount(): number {
    return this.amount;
  }

  equals(instance: Money): boolean {
    if (this.constructor !== instance.constructor) return false;

    return this.amount === instance.amount;
  }

  times(rounds: number): Money {
    return new Money(this.amount * rounds);
  }
}
