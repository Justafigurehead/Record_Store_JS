var assert = require('assert');
var Record = require('../Record');

describe('Record', function(){

  var record;

  beforeEach(function(){
    record = new Record('Counting Crows', 'August and Everything After', 19.99);
  });

  it('should have an artist name', function(){
    assert.equal('Counting Crows', record.artist);
  });
  it('should have a Title name', function(){
    assert.equal('August and Everything After', record.title);
  });
  it('should have a float price', function(){
    assert.equal(19.99, record.price);
  });

})