class fibonacci extends Error {
  constructor(message){
    super(message);
    this.status = 400;
  }
}
class validationError extends fibonacci {
  constructor(message){
    super(message);
    this.status = 400;
  }
}
module.exports = {
  fibonacci,
  validationError
}