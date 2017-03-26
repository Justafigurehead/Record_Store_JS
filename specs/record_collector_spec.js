var RecordCollector = require('../record_collector');
var Record = require('../record');
var assert = require('assert');
var RecordStore = require('../record_store');

describe('Record Collector', function(){
 
  var recordCollector;
  var recordOne;
  var recordStore;
  var secondHandRecord;

  beforeEach(function(){

    recordCollector = new RecordCollector('Nigel', 100);
    recordOne = new Record('Artist', "Title", 19.99);
    recordStore = new RecordStore("Record Store", "Glasgow");
    secondHandRecord = new Record('Another Artist', 'Another album', 5.99);
  });

  it('should have a name', function(){
    assert.equal('Nigel', recordCollector.name);
  });

  it('should have a balance with personal funds', function(){
    assert.equal(100, recordCollector.funds);
  });

  it('should buy a record and decrease personal funds', function(){
    recordCollector.buyRecord(recordOne, recordStore);
    assert.equal(80.01,recordCollector.funds);
  });

  it('should be able to sell a record', function(){
    recordStore.balance = 10;
    recordCollector.sellRecordToStore(secondHandRecord, recordStore);
    assert.equal(4.01, recordStore.balance);
  });

  it('should not be able to buy a record if broke AF', function(){
    recordCollector.funds = 0;
    assert.equal("Sorry, you can't afford this.", recordCollector.buyRecord(recordOne, recordStore))
  });

})