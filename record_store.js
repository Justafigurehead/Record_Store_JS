var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.balance = 0;
  this.inventory = [];
  this.getInventory = function(){
    return this.inventory.length;
  }
  this.addInventory = function(record){
    this.inventory.push(record);
  }
}



module.exports = RecordStore;