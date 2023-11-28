/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

const products = [
  {
    name: "Cherry",
    price: 6,
    quantity: 0,
    productId: 1,
    image: "../images/cherry.jpg",
  },
  {
    name: "Orange",
    price: 6,
    quantity: 0,
    productId: 2,
    image: "../images/orange.jpg",
  },
  {
    name: "Strawberry",
    price: 5,
    quantity: 0,
    productId: 3,
    image: "../images/strawberry.jpg",
  },
];

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/**
 *
 * Based on a product's id number, we add a product to the cart based on it's productId
 * All below methods (except 'cartTotal()') will use the below param
 *
 * @param {number} productId - The Id number of the product to be added to the cart
 * @description Finds the product by using the productId from the products array.
 *              We check first if the product exists within the array.
 *
 *
 */



function addProductToCart(productId) {
  let product = products.find((prod) => prod.productId === productId);

  if (product) {
    // Resetting the product quantity to match the quantity in the cart
    let productInCart = cart.find((item) => item.productId === productId);
    
    // check if ProductInCart Is True
    if (productInCart) {
      product.quantity = productInCart.quantity; // Update the product quantity
    }

    // If the item in the cart is, not false, set item product id to the productId being passed in as a function parameter
    if (!cart.find((item) => item.productId === productId)) {
      cart.push(product);
    }

    product.quantity += 1; // Increment the quantity directly in the products list
  }
}


function removeProductFromCart(productId) {
  let product = products.find((prod) => prod.productId === productId);

  if (product) {
    let productInCartIndex = cart.findIndex((item) => item.productId === productId);

    if (productInCartIndex !== -1) {
     product.quantity = 0;

      // Remove the product from the cart
      cart.splice(productInCartIndex, 1);

    
    }
  }
}


function increaseQuantity(productId) {
  let product = products.find((prod) => prod.productId === productId);

  if (product) {
    let productInCart = cart.find((item) => item.productId === productId);

    if (productInCart) {
      // increment the product quantity by one
      productInCart.quantity += 1;
    }
  }
}

function decreaseQuantity(productId) {
  let product = products.find((prod) => prod.productId === productId);

  if (product) {
    let productInCart = cart.find((item) => item.productId === productId);

    // if the product is found in the cart
    if (productInCart) {
      // if the products quantity is greater than zero
      if (productInCart.quantity > 0) {
        // decrease the product's quantity by decrements of one
        productInCart.quantity -= 1;
        // if product quantity is decreased to zero, remove the product from the cart
        if (productInCart.quantity === 0) {
          removeProductFromCart(productId);
        }
      }
    }
  }
}

function cartTotal() {
  // Calculate the cart total based on items in the cart
  let total = 0;
  // iterate through the cart's item
  cart.forEach((item) => {
    // multiply the item of the cart by the quantity and add to the total then set total equal to that product(multiplication)
    total += item.price * item.quantity;
  });

  // return the current total
  return total;
}


function emptyCart() {
  return (cart = []);
}

let totalPaid = 0;

function pay(amount) {
    // If amount is provided, it's considered as a payment; otherwise, it's treated as a balance check
    if (amount !== undefined) {
        totalPaid += amount;
    }

    let total = cartTotal();
    let remaining = totalPaid - total;

    // Check if the remaining amount is enough to cover the cart total
    if (remaining >= 0) {
        totalPaid = 0; // Reset totalPaid for the next transaction
        emptyCart(); // Empty the cart as the payment covers the total
    }

    return remaining;
}

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart
};
