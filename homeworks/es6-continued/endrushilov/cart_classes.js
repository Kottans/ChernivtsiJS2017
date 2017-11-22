// Don't modify
function Cart () {}
Cart.prototype.add = function (item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};
 
//My Code
class Item extends Cart{
    constructor(id, name, price){
        super() 
        this.id = id,
        this.name = name,
        this.price = price
    }    

};
class UserCart extends Item{
    constructor(){
        super()
    }
    amount(){
        var amount = 0; 
        for(var i = 0; i < this.goods.length; i++){             
            amount += this.goods[i].price;
        }        
        return amount
    }
    updateQnt(id_number, count){
        var this_elem;
         for(var i = 0; i<this.goods.length; i++ ){
             if(this.goods[i].id === id_number){
                 this_elem = this.goods[i];
             }
         }
         var this_elem_id = this_elem.id;
         var count_this_elem = 0;
         for(var j = 0; j<this.goods.length; j++){
             if(this.goods[j].id === this_elem_id){
                 count_this_elem++
             }
         }
         if(count_this_elem == count){
             console.log("return");
            return
         }
         if(count_this_elem < count){
             count_this_elem = count -  count_this_elem;
             var new_elements = [].fill.call({length: count_this_elem}, Object.assign(this_elem));
             for(var k = 0; k<count_this_elem; k++){
                 this.goods.push(new_elements[k]);
             }
         }
         else{
             var count_to_remove = count_this_elem - count;
             for(var l = 0; l < this.goods.length; l++){
                 if(count_to_remove !== 0){
                     if(this.goods[l].id === this_elem.id){
                         this.goods.splice(l, 1);
                         count_to_remove--;
                     }
                 }
                 else{
                     return
                 }
     
             }
         }
    }
    remove(id_remove){
        for(var i = 0; i < this.goods.length; i++){             
        if(this.goods[i].id == id_remove){ 
            this.goods.splice(i, 1);                   
        }    
        } 
    }
    clear(){
        this.goods = []; 
    }
    getAll(){
        return this.goods 
    }
};
//My Code end

 
// Test
const cart = new UserCart();
cart.add(new Item(1, 'Сhair', 2000));
cart.add(new Item(2, 'Desk', 3000));
cart.add(new Item(3, 'Sofa', 4000));
let amount = cart.amount();
if (amount === 9000) {
    console.log('Add done');
} else {
     console.error('Add error');
}
cart.updateQnt(3, 10); 
cart.remove(2);
amount = cart.amount();
if (amount === 42000) {
    console.log('Modify done');
} else {
    console.error('Modify error');
}
cart.clear();
if (cart.getAll().length === 0) {
    console.log('Clear done');
} else {
    console.error('Clear error');
}