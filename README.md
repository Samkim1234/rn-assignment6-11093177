# rn-assignment6-11093177
DCIT_202_Assignment 6
ID - 11093177

# E-commerce App
This e-commerce app is designed to provide a seamless shopping experience for users, allowing them to browse products, add items to their cart, and proceed to checkout. The app is built using React Native and leverages AsyncStorage for persistent data storage.

# Design Choices
## UI/UX Design
### Minimalistic and Clean: 
The app follows a clean and minimalistic design approach to provide a user-friendly experience.
### Easy Navigation: 
Users can easily navigate between the home screen and the cart screen using the navigation bar.
### High-Quality Images: 
High-resolution images of products are used to enhance visual appeal and provide better product insights.
### Consistent Theme: 
The app maintains a consistent color scheme and typography throughout to ensure visual harmony.

## Data Storage
### Persistent Cart: 
The cart data is stored locally on the device using AsyncStorage, ensuring that the user's cart is preserved even if the app is closed and reopened.
### Efficient State Management: 
The app uses the React Context API to manage the cart state, providing an efficient way to add, remove, and retrieve cart items.

## Implementation
### CartContext
The CartContext provides the necessary state and functions to manage the cart. It uses AsyncStorage to store and retrieve cart items persistently.
### HomeScreen
The HomeScreen displays a list of products. Users can add items to the cart by tapping the add button.
### CartScreen
The CartScreen displays the items added to the cart. Users can remove items from the cart.
### App.js
The main entry point of the app, where navigation and context providers are set up.

## Conclusion
This e-commerce app provides a comprehensive solution for browsing products and managing a shopping cart. By leveraging AsyncStorage, the app ensures that the cart data is persistent across sessions. The clean and minimalistic design enhances the user experience, making it easy for users to navigate and interact with the app.

## Screenshots
### Home screen


### Settings Screen


## Getting Started

To run this application locally, follow these steps:

# Clone the repository.
**Clone the repository**:
   git clone https://github.com/Samkim1234/rn-assignment6-11093177.git
cd rn-assignment6-11093177/Assignment6MyDesignApp
2. Install dependencies with `npm install` or `yarn install`.
3. Start the Metro server with `npm start` or `yarn start`.
4. Use an emulator or connect a physical device to run the application.

