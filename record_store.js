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
    this.inventory.shift(record);
    } else {
      return "This item is out of stock.";
    };
  },

  getStoreReport: function(){
    var inventoryTotal = 0;

    this.inventory.forEach(function(record){
      inventoryTotal += record.price;
    })
    return "The shop has a balance of £" + this.balance + " and has an inventory value of £" + inventoryTotal + ".";
  }, 

  buyRecord: function(record){
    this.addInventory(record);
    this.balance -= record.price;
  } 
}


module.exports = RecordStore;