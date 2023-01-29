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
    if (this.constructor !== instance.constructor) return false;

    return this.amount === instance.amount;
  }

  abstract times(rounds: number): Money;

  getCurrency(): string {
    return this.currency;
  }
}

export class Dollar extends Money {
  times(rounds: number): Dollar {
    return Money.dollar(this.amount * rounds);
  }
}

export class Euro extends Money {
  times(rounds: number): Euro {
    return Money.euro(this.amount * rounds);
  }
}
