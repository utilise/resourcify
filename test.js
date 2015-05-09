var expect = require('chai').expect
  , resourcify = require('./')
  , ripple = { resources: { foo: { body: [ 1, 2, 3 ] }, bar: { body: [ 4, 5, 6 ] } } }

describe('resourcify', function() {

  it("should return undefined if no resource specified", function() {
    expect(resourcify(ripple)('')).to.not.be.ok
  })

  it("should return undefined if resource not present", function() {
    expect(resourcify(ripple)('baz')).to.not.be.ok
  })

  it("should return resource body if only one element", function() {
    expect(resourcify(ripple)('foo')).to.eql([1,2,3])
  })

  it("should return all resource bodies", function() {
    expect(resourcify(ripple)('foo bar')).to.eql({ foo: [1,2,3], bar: [4,5,6] })
  })

  it("should return undefined if one resource not present", function() {
    expect(resourcify(ripple)('foo baz')).to.not.be.ok
  })

})