export class Dollar {
  constructor(public amount: number) {}

  times(rounds: number): Dollar {
    return new Dollar(this.amount * rounds);
  }

  equals(instance: Dollar): boolean {
    return this.amount === instance.amount;
  }
}
