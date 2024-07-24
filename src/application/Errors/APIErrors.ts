class APIErrors extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
  }
}

export default APIErrors;
