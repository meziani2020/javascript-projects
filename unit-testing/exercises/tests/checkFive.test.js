const { describe } = require("node:test");
const checkFive=require("../checkFive.js");

describe("checkFive tests",function(){
  test("returns 'num is less than 5' when num < 5.",function(){
    let out=checkFive(2);
    expect(out).toEqual('2 is less than 5.');
  });

  test("returns '5 is equal to 5.' when num = 5.",function(){
    let out=checkFive(5);
    expect(out).toEqual('5 is equal to 5.');
  });

  test("returns '6 is greater than 5.' when num greater than 5.",function(){
    let out=checkFive(6);
    expect(out).toEqual('6 is greater than 5.');
  });

});

