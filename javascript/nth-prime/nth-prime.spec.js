var prime = require ('./nth-prime');

describe('Prime',function() {

  xit('first',function(){
    expect(prime.nth(1)).toEqual(2);
  });

  xit('second',function(){
    expect(prime.nth(2)).toEqual(3);
  });

  it('sixth',function(){
    expect(prime.nth(6)).toEqual(13);
  });

  it('seventh',function(){
    expect(prime.nth(7)).toEqual(17);
  });

  it('big prime',function(){
    expect(prime.nth(10001)).toEqual(104743);
  });

  it('weird case',function() {
    expect( function () {
      prime.nth(0);
    }).toThrow(new Error('Prime is not possible'));
  });

});
