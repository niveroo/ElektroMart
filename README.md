# University Subject Project - ElektroMart

## Overview
This project is part of the coursework for the subject **Web applications programming** at **Rzeszow University of Technology**. It was developed using **React**, a popular JavaScript library for building user interfaces.

### Project Goal
The objective of this project is to create a website for an electronics shop powered by the backend application built by group member. This project demonstrates core concepts in React including component-based design, state management, routing, and API integration.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)

## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/niveroo/[project-name].git
cd [project-name].
```
2. Install the required dependencies:

Make sure you have Node.js installed on your machine, then run:

```bash
npm install
```

3. Run the application:
```bash
npm run dev
```

## Features

- Product Search with Filters: Users can search for products by name and apply additional filters. Search parameters are saved in the URL, allowing easy sharing and revisiting filtered results.
- Persistent Shopping Cart: The shopping cart saves its contents, ensuring that items remain stored even when the user navigates away from the page or refreshes the browser.
- Recommended Products Section: A section displays recommended products. (To be completed on the backend side.)
- Professional Clock: A clock located in the top-right corner helps users keep track of time while browsing and selecting products.

## Technologies Used

- React: JavaScript library used to build the user interface with reusable components.
- React Router: Enables seamless navigation between different components.
- Fetch API: Used for making HTTP requests to external APIs to fetch data.
- Redux: State management tool used to manage the application state across different components efficiently.
  
These technologies ensure the scalability and maintainability of the project.

## Usage

- Home Page: Use the search bar to find products or navigate to categories by clicking on the category tiles. Recommended products are also available for browsing.
- Search Page: View and filter search results to narrow down your options.
- Product Page: View the product quantity available and add products to the cart to purchase them.
- Cart: The cart is always accessible by clicking the cart icon at the top of the page.
