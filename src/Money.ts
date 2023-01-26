export class Money {
  constructor(protected readonly amount: number) {}

  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  static euro(amount: number): Euro {
    return new Euro(amount);
  }

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

export class Dollar extends Money {}

export class Euro extends Money {}
