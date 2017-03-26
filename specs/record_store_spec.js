var assert = require('assert');
var RecordStore = require('../record_store');

describe('Record Store', function(){

  beforeEach(function(){
    recordStore = new RecordStore();
  })

  it('should have a Name', function(){
    assert.equal('Big Al\'s Music', recordStore.name);
  });
  it('should have a City');
  it('should have an empty inventory');
  it('should have one record in it\'s inventory');

})