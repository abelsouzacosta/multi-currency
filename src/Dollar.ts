export class Dollar {
  constructor(public amount: number) {}

  times(rounds: number): void {
    this.amount *= 2;
  }
}
