var should = require('chai').should();
var PEG = require("../grammar.js");

function requireFromString(src, filename) {
  var Module = module.constructor;
  var m = new Module();
  m._compile(src, filename);
  return m.exports;
}

describe('translation', function() {
  it('translates procedure func; var a,b,c; begin a=5; c=6; b=a*c; end; .', function() {
    var r = PEG.parse('procedure func; var a,b,c; begin a=5; c=6; b=a*c; end; .');
    r.should.match(/a\s*=\s*4,\s*b\s*=\s*5[+]a,\s*c\s*=\s*2[*]a/);
  });
});
