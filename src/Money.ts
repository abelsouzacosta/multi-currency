export abstract class Money {
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

  abstract times(rounds: number): Money;

  abstract currency(): string;
}

export class Dollar extends Money {
  times(rounds: number): Dollar {
    return new Dollar(this.amount * rounds);
  }

  currency(): string {
    return "USD";
  }
}

export class Euro extends Money {
  times(rounds: number): Money {
    return new Euro(this.amount * rounds);
  }

  currency(): string {
    return "EUR";
  }
}
