const { describe } = require("node:test");
const obj=require('./../RPS.js');

describe("RPS test", function(){
    test("returns 'TIE!' if P1 = P2", function(){
      expect(obj.whoWon("moh","moh")).toBe('TIE!');
    });


    test("return 'Player 2 wins!' if p1=rock et p2=paper", function(){
        expect(obj.whoWon("rock","paper")).toBe('Player 2 wins!');
      });

      test("return 'Player 2 wins!' if p1=paper et p2=scissors", function(){
        expect(obj.whoWon("paper","scissors")).toBe('Player 2 wins!');
      });
      

      test("return 'Player 2 wins!' if p1=scissors et p2=rock", function(){
        expect(obj.whoWon("scissors","rock")).toBe('Player 2 wins!');
      })
/*
player1 === 'rock' && player2 === 'paper'){

   if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';

     return 'Player 2 wins!';

*/

})