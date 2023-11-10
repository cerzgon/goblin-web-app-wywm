$(document).ready(function () {
  let itemNumber = 0;
  let products = []; // Changed 'product' to 'products' for consistency

  if (localStorage.getItem("items")) {
    products = JSON.parse(localStorage.getItem("items"));
    itemNumber = products.length;
  }
  $(".numberOfItems").text(itemNumber);

  // Function to calculate and update the total cost
  function updateTotalCost() {
    let totalCost = 0;
    products.forEach((product) => {
      totalCost += product.price * product.quantity;
    });
    $("#totalCostValue").text(totalCost.toFixed(2));
  }

  // when the user clicks the shopping cart button, update .modal-body with the items in the cart
  $(".buttonWrapper").click(function () {
    if (localStorage.getItem("items")) {
      products = JSON.parse(localStorage.getItem("items"));

      let modalBody = $(".modal-body");
      modalBody.empty(); // empty the initial contents of modal body before adding new items

      // render products name, price, and quantity
      products.forEach((product) => {
        // Changed `map` to `forEach`
        modalBody.append(
          `<div class="productWrapper" id="${product.name}">
                <div id="productInfo">
                  <img src="${product.imgSrc}" alt="${product.name}" class="productImage">
                  <div class="name">${product.name} - $${product.price}/item</div>
                  <div class="quantity">x ${product.quantity}</div>
                </div>
                <div id="actions">
                  <button class="btn btn-primary increaseQuantity" id="${product.name}">
                    +
                  </button>
                  <button class="btn btn-danger decreaseQuantity" id="${product.name}">
                    -
                  </button>
                </div>
              </div>`
        );
      });

      // increase item quantity in the modal
      $(".increaseQuantity").click(function () {
        let productName = $(this).attr("id");
        let product = products.find((product) => product.name === productName);
        product.quantity++;
        $(this)
          .closest(".productWrapper")
          .find(".quantity")
          .text(`x ${product.quantity}`);
        localStorage.setItem("items", JSON.stringify(products));

        // Update the total cost
        updateTotalCost(); // Moved outside of this click event handler
      });

      // decrease item quantity in the modal
      $(".decreaseQuantity").click(function () {
        let productName = $(this).attr("id");
        let product = products.find((product) => product.name === productName);
        if (product.quantity > 0) {
          product.quantity--;

          if (product.quantity === 0) {
            products = products.filter((p) => p.name !== productName);
            $(this).closest(".productWrapper").remove();
          } else {
            $(this)
              .closest(".productWrapper")
              .find(".quantity")
              .text(`x ${product.quantity}`);
          }

          localStorage.setItem("items", JSON.stringify(products));

          // Update the total cost
          updateTotalCost(); // Moved outside of this click event handler
        }
      });

      // Initial total cost calculation and display
      updateTotalCost();
    }
  });

  //   // Retrieve cart items from wherever you're storing them (e.g., an array or local storage)
  // // Function to retrieve cart items from local storage
  // function getCartItemsFromLocalStorage() {
  //   const items = localStorage.getItem('items');
  //   return items ? JSON.parse(items) : [];
  // }

  // // Retrieve cart items from local storage
  // // const cartItems = getCartItemsFromLocalStorage();

  // // Send cartItems to the other page (assuming you're navigating to another page)
  // // You can use query parameters, cookies, or other methods to send data to the other page.
  // // Here's an example of using query parameters:
  // const queryParams = `cartItems=${JSON.stringify(cartItems)}`;
  // const destinationPageURL = '../pages/checkOut.html?' + queryParams;

  // Redirect to the other page
  // window.location.href = 'resources/pages/checkOut.html';
});
