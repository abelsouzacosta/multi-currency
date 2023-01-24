export class Euro {
  constructor(private readonly amount: number) {}

  times(rounds: number): Euro {
    return new Euro(this.amount * rounds);
  }

  equals(instance: Euro): boolean {
    return this.amount === instance.amount;
  }

  getAmount(): number {
    return this.amount;
  }
}
