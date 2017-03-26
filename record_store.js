var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.getInventory = function(){
    return this.inventory.length;
  }
}



module.exports = RecordStore;