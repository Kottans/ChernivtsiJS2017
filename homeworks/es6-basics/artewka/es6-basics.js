// Don't modify
function Cart () {}
Cart.prototype.add = function (item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};

function UserCart() {
  UserCart.prototype.__proto__ = Cart.prototype
  
}

function Item(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
} 

UserCart.prototype.amount = function() {
    return this.goods.reduce(function(prev,curr) {
        return prev + curr.price;
    },0);
}

UserCart.prototype.clear = function () { 
    this.goods = []; 
    } 
    
UserCart.prototype.getAll = function () { 
    return this.goods; 
    }

UserCart.prototype.updateQnt = function (Id, quantity) {
        var mass = this.goods.filter(function(item) {
            return item.id == Id;
        });
        quantity = quantity - mass.length;
        if (quantity > 0){
            var mass1 = Object.assign(mass[0]);
            var mass2 = [].fill.call({length: quantity}, mass1);
            this.goods.push.apply(this.goods, mass2);
                 } else {
                    mass.length = quantity;                
                        this.goods.push.apply(this.goods, mass);    
                    }
                }

UserCart.prototype.remove = function (id) {
    for (let i in this.goods) {
        if (this.goods[i].id == id) 
        this.goods.splice(i, 1);
    }
}

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
console.log(cart);
console.log(amount);
cart.clear();
if (cart.getAll().length === 0) {
    console.log('Clear done');
} else {
    console.error('Clear error');
}
