# Far Away ✈️

A simple and interactive packing list application built with React. This app helps users keep track of items needed for a trip, allowing them to add, check off, and remove items.

## 🚀 Live Deployment

[![Live Deployment Status](https://img.shields.io/badge/Deployed%20on-YOUR_SERVICE-2a9d8f?style=for-the-badge&logo=vercel)](https://react-travel-away.netlify.app)

_To use this, simply update the URL and service name. For example, if you deploy on Netlify, you'd use `logo=netlify` and your Netlify app URL._

---

## ✨ Features

- **Add Items:** Easily add new items to your packing list with a quantity and description.
- **Check Off Items:** Mark items as packed by clicking the checkbox. The app provides a clear visual indicator by striking through the text.
- **Remove Items:** Delete unwanted items from the list with a simple click.
- **Clear List:** Clear the entire packing list with a single button.
- **Sorting Options:** Sort your list by three different criteria:
  - **Insertion Order:** The default order in which you added items.
  - **Alphabetical Order:** Sort by item description.
  - **Packed First:** Group all packed items at the top of the list.
- **Real-time Stats:** A dynamic footer provides a summary of your packing progress, showing the total number of items, how many are packed, and the packing percentage.

---

## 📦 Getting Started

### Prerequisites

You need to have **Node.js** and **npm** (or yarn) installed on your machine.

### Installation

1.  **Clone the repository:**

    ```sh
    git clone [https://github.com/your-username/far-away.git](https://github.com/your-username/far-away.git)
    cd far-away
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the App

1.  **Start the development server:**
    ```sh
    npm start
    ```
2.  Open your browser and navigate to `http://localhost:3000`.

The app will automatically reload if you make any changes to the source code.

---

## ⚙️ Project Structure

- `App.js`: The main component that manages the application state and renders all child components (`Logo`, `Form`, `PackingList`, `Stats`).
- `index.js`: The entry point for the React application, which mounts the `App` component to the DOM.
- `index.css`: Contains all the styling for the application, including custom fonts and responsive design for various screen sizes.

---
