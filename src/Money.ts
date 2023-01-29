export class Money {
  constructor(
    private readonly amount: number,
    private readonly currency: string
  ) {}

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static euro(amount: number): Money {
    return new Money(amount, "EUR");
  }

  getAmount(): number {
    return this.amount;
  }

  equals(instance: Money): boolean {
    if (this.getCurrency() !== instance.getCurrency()) return false;

    return this.amount === instance.amount;
  }

  times(rounds: number): Money {
    return new Money(this.amount * rounds, this.getCurrency());
  }

  getCurrency(): string {
    return this.currency;
  }
}
