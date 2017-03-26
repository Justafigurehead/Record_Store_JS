var RecordCollector = require('../record_collector');
var Record = require('../record');
var assert = require('assert');
var RecordStore = require('../record_store');

describe('Record Collector', function(){

  beforeEach(function(){
    recordCollector = new RecordCollector('Nigel', 100);
    recordOne = new Record('Artist', "Title", 19.99);
    recordStore = new RecordStore("Record Store", "Glasgow");
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

  });

})