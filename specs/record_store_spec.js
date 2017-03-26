var assert = require('assert');
var RecordStore = require('../record_store');
var Record = require('../record');
// var isEqual = require('lodash.isEqual');

describe('Record Store', function(){
  
  var recordStore;
  var recordOne;
  
  beforeEach(function(){
    recordStore = new RecordStore('Big Al\'s Music', 'Glasgow');
    recordOne = new Record('The Black Keys', 'EL CAMINO', 19.99);
    recordTwo = new Record('Lady Gaga', 'The Fame Monster', 19.99);
    recordThree = new Record('Lady Gaga', 'Born This Way', 19.99);
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

  it('should create a function that returns all of a Record\'s details as a well-formatted string', function(){
    recordStore.addInventory(recordOne);
    assert.equal("EL CAMINO by The Black Keys. Priced at 19.99", recordStore.getSingleRecord(recordOne));
  });


  it('should create a function that returns all of a records with a well-formatted string', function(){
    recordStore.addInventory(recordOne);
    recordStore.addInventory(recordTwo);
    assert.deepEqual(["EL CAMINO by The Black Keys. Priced at 19.99", "The Fame Monster by Lady Gaga. Priced at 19.99"], recordStore.getAllRecordInfo());
  });

  it('should be able to sell a record and adjust the RecordStore so its balance goes up', function(){
    recordStore.addInventory(recordOne);
    recordStore.sellRecord(recordOne);
    assert.equal(19.99, recordStore.balance);
  });

  it('should be able to sell a record that is in the inventory only', function(){ 
    assert.equal("This item is out of stock.", recordStore.sellRecord(recordOne));
  });

  it('selling record and remove from array of inventory.', function(){
    recordStore.addInventory(recordOne);
    recordStore.sellRecord(recordOne);
    assert.equal(0, recordStore.getInventory());
    });

  it('should give a finiancial report of balance and inventory stock balance', function(){
    recordStore.addInventory(recordOne);
    recordStore.addInventory(recordTwo);
    recordStore.addInventory(recordThree);

    recordStore.sellRecord(recordOne);
    console.log(recordStore.getStoreReport());
    assert.equal("The shop has a balance of £19.99 and has an inventory value of £39.98.", recordStore.getStoreReport());
   });
})