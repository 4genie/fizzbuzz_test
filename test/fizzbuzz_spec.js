const should = chai.should()

describe('Test fizzbuzz function', function () {
  it('should return Fizz when number can be divided by 3', function () {
    let result = fizzBuzz(6)
    result.should.be.equal('Fizz')
  })
  it('should return Buzz when number can be divided by 5', function () {
    let result = fizzBuzz(20)
    result.should.be.equal('Buzz')
  })
  it('should return FizzBuzz when number can be divided by 3 and 5', function () {
    let result = fizzBuzz(30)
    result.should.be.equal('FizzBuzz')
  })
  it('should return number when number can not be divided by 3 or 5', function () {
    let result = fizzBuzz(8)
    result.should.be.equal(8)
  })



})