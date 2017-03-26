var RecordCollector = function(name, funds){
  this.name = name;
  this.funds = funds;
}

RecordCollector.prototype = {
  buyRecord: function(record, recordStore){
    if (this.funds >= record.price){
    recordStore.sellRecord(record);
    this.funds -= record.price;
    }
    if (this.funds < record.price){
      return "Sorry, you can't afford this."
    }
  }, 

  sellRecordToStore: function(record, recordStore){
    recordStore.buyRecord(record);
    this.funds += record.price;
  }
}

module.exports = RecordCollector;