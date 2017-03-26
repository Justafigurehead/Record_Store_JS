var assert = require('assert');
var RecordStore = require('../record_store');

describe('Record Store', function(){

  beforeEach(function(){
    recordStore = new RecordStore('Big Al\'s Music');
  })

  it('should have a Name', function(){
    assert.equal('Big Al\'s Music', recordStore.name);
  });

  it('should have a City', function(){
    assert.equal('Glasgow', recordStore.city)
  });

  it('should have an empty inventory');
  it('should have one record in it\'s inventory');

})