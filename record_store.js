var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.balance = 0;
  this.inventory = [];
}


RecordStore.prototype = {
  getInventory: function(){
    return this.inventory.length;
  },
  addInventory: function(record){
    this.inventory.push(record);
  }, 
  getSingleRecord: function(record){
    return record.title + " by " + record.artist + ". Priced at " + record.price;
  },
  getAllRecordInfo: function(){
    var allinfo = []
    this.inventory.forEach(function(record){
      var recordInfo = this.getSingleRecord(record);
      allinfo.push(recordInfo);
    }, this)
    return allinfo;
  }, 
  sellRecord: function(record){
    if (this.inventory.includes(record)){
    this.balance += record.price;
    } else {
      return "This item is out of stock.";
    };
  }

}


module.exports = RecordStore;