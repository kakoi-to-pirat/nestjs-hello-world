export class UserToken {
  constructor(
    public token: string,
  ) { }

  setToken(token: string): UserToken {
    this.token = token;
    return this;
  }

  toString() {
    return this.token;
  }
}
