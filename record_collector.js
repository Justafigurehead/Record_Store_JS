var RecordCollector = function(name, funds){
  this.name = name;
  this.funds = funds;
}

RecordCollector.prototype = {
  buyRecord: function(record, recordStore){
    recordStore.sellRecord(record);
    this.funds -= record.price;
  }
}

module.exports = RecordCollector;