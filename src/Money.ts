export abstract class Money {
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

  abstract times(rounds: number): Money;

  getCurrency(): string {
    return this.currency;
  }
}

export class Dollar extends Money {
  times(rounds: number): Money {
    return new Dollar(this.amount * rounds, this.getCurrency());
  }
}

export class Euro extends Money {
  times(rounds: number): Money {
    return new Euro(this.amount * rounds, this.getCurrency());
  }
}
