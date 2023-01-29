export class Money {
  constructor(
    protected readonly amount: number,
    protected readonly currency: string
  ) {}

  static dollar(amount: number): Dollar {
    return new Dollar(amount, "USD");
  }

  static euro(amount: number): Euro {
    return new Euro(amount, "EUR");
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

export class Dollar extends Money {}

export class Euro extends Money {}
