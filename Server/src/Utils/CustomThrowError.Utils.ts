export class ResponseError extends Error {
  public status: number;
  constructor(message: string, status: number = 500) {
    super(message);

    Error.captureStackTrace(this);

    this.status = status;
  }
}
