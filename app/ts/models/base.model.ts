/**
 * Challenge Model 
 * @type {Object}
 */
var mongoose = require('mongoose');

class Solution {
  code: String;
  score: Number;
  constructor(code: String,score: Number) {
    this.code = code;
    this.score = score;
  }
}
console.log('model :)');
module.exports = mongoose.model("Challenge", new mongoose.Schema({
  name: String,
  url: String,
  statement: String,
  //solutions: [Solution]
}));
