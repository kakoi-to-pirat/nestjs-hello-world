export class UserToken {
  constructor(
    public token: string,
  ) {}

  toString() {
    return this.token;
  }
}
