# goblin-web-development-project-wywm
This project involves demonstrating skills in HTML, CSS, and JavaScript, with a focus on the Bootstrap CSS library, to create a web application. You are required to:

1. Utilize HTML, CSS (with emphasis on flexbox/grids), and JavaScript best practices to build a web application.
2. Integrate external services like a mailing API.
3. Design wireframes for a Checkout and Products page using Figma or draw.io.
4. Follow specific instructions for the Shop Page, including changing images, adding items with feedback via Bootstrap toast, and storing data in localStorage.
5. Implement a Shopping Cart Modal with functionality to adjust item quantities and calculate total cost, along with fixing a specified bug.
6. Develop a Checkout Page that includes a detailed form with validation, and triggers an email confirmation upon submission using an external emailer API.
7. Blur out sensitive credit card information in the email confirmation.
8. Set up a Google Firebase Real-time Database to store purchase data.
9. Implement a Products page using async/await for API calls, with its own CSS file and folder structure.
10. Ensure the application is responsive with at least three breakpoints.

## Project setup
```
open index.html in your browser or use Live Server in Visual Studio Code
```
# Project Notes:

1. The Shop page now features new goblin images, each with an "Add Item" button below. I utilized Bootstrap Toast for alerting the user whenever an item is added to the shopping cart. The localStorage now correctly saves each item.
2. The shopping cart modal accurately records the image and quantity of each item and calculates the total purchase price. The issue with negative values has been resolved.
3. The checkout page is effectively linked to the shopping cart modal via the "Continue to Checkout" button. On the checkout page, the shopping cart contents and form data (note: using Bootstrap) are displayed side by side. Each form field is validated using a regex pattern.
4. There were no issues with the emailer service; I have been using EmailJS (https://www.emailjs.com/) for this purpose. The emailer worked well, there were some issues with masking of the credit card number and having the shopping cart appear populated.  I have included several screen shots in the extras folder.
5. For the database service, I chose Google Firebase, but I've encountered some challenges in getting it operational. The form is designed to collect six essential pieces of information. The 'extras' folder contains the designs (i.e., wireframes) for both the checkout and product pages.
6. The Products page utilizes an API provided by the site https://rawg.io/. This is implemented using async/await in conjunction with the JS Fetch API. The 'Game List' button on the page, when clicked, triggers an event that calls the API and retrieves twenty movies from the RAWG website. I used four unique keys (i.e., name, released, genre, rating, and img) to extract the corresponding values for product name, release date, genre, and image.
7. The 'extras' folder includes images and wireframes (i.e., draw.io), I have also include screen shots.
                   
