var assert = require('assert');
var RecordStore = require('../record_store');
var Record = require('../record');

describe('Record Store', function(){
  
  var recordStore;
  var recordOne;
  
  beforeEach(function(){
    recordStore = new RecordStore('Big Al\'s Music', 'Glasgow');
    recordOne = new Record('The Black Keys', 'EL CAMINO', 19.99);
  })

  it('should have a Name', function(){
    assert.equal('Big Al\'s Music', recordStore.name);
  });

  it('should have a City', function(){
    assert.equal('Glasgow', recordStore.city)
  });

  it('should have a zero balance', function(){
    assert.equal(0, recordStore.balance);
  });
  
  it('should have an empty inventory', function(){
    assert.equal(0, recordStore.getInventory());
  });

  it('should have one record in it\'s inventory', function(){
    recordStore.addInventory(recordOne);
    assert.equal(1, recordStore.getInventory());
  });

  it('should create a function that returns all of a Record\'s details as a well-formatted string');
  it('should create a function that returns all of a records with a well-formatted string');
  it('should be able to sell a record and adjust the RecordStore so its balance goes up');



})