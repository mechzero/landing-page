const cart  = require('../src/assets/script.js')

describe("Cart Functionality Tests", () => {
    let product1 = cart.productsArr[1];
    let cartArr = cart.cartArr;

    test("addToCart adds product to cart", () => {
        cart.addToCart(product1.sku); 
        expect(product1.quantity).toEqual(1);
        expect(cartArr).toEqual([product1]);
    })
    test("addToCart a second time does not append the item twice", () => {
        cart.addToCart(product1.sku); 
        expect(product1.quantity).toEqual(2);
        expect(cartArr).toEqual([product1]);
    })
    test("increase product quantity", () => {
        cart.increase(product1.sku); 
        expect(product1.quantity).toEqual(3);
    })
    test("increase a second time", () => {
        cart.increase(product1.sku); 
        expect(product1.quantity).toEqual(4);
    })
    test("decrease quantity from 4 to 1 items", () => {
        cart.decrease(product1.sku);
        cart.decrease(product1.sku);
        cart.decrease(product1.sku); 
        expect(product1.quantity).toEqual(1);
    })
    test("decrease quantity from 1 to 0 removes item from cart", () => {
        cart.decrease(product1.sku); 
        expect(product1.quantity).toEqual(0);
        expect(cartArr).toEqual([]);
    })
    test("remove 1 item from cart updates quantity to 0 and removes from cart", () => {
        cart.addToCart(product1.sku); 
        cart.remove(product1.sku);
        expect(product1.quantity).toEqual(0);
        expect(cartArr).toEqual([]);
    })

})



describe("Checkout Functionality Tests", () => {
    let product1 = cart.productsArr[1];
    let product2 = cart.productsArr[2];
    let cartArr = cart.cartArr;

    // Functiion get's grand total of cart
    function grandTotal(){
        let cartSum = 0;
        
        for (let i = 0; i < cartArr.length; i++){
            let itemTotal = cartArr[i].quantity * cartArr[i].price;
            
            cartSum += itemTotal;
        }
        
        return cartSum;
    }
    
    test("cartTotal gets grand total of cart", () =>{
        cart.addToCart(product1.sku);
        cart.addToCart(product2.sku);
        cart.increase(product1.sku);
        expect(cart.cartTotal()).toEqual(grandTotal());
    })

    test("pay more than the total works", () =>{
        expect(cart.pay(100000000000000)).toBeGreaterThan(grandTotal());
    })

    test("pay less than the total works", () =>{
        cart.addToCart(product1.sku);
        cart.addToCart(product2.sku);
        expect(cart.pay(1)).toBeLessThan(grandTotal());
    })
})
    
