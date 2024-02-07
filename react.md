# Introduction
React is a JavaScript library for building user interfaces, particularly for web applications. It was developed by Facebook and has gained widespread adoption due to its simplicity, performance, and flexibility.

React allows developers to create interactive, reusable UI components for web applications. It follows a component-based architecture where the user interface is divided into small, isolated pieces called components. These components encapsulate their own state and behavior, making it easier to manage and maintain complex UIs.

# DOM
React uses a virtual DOM (Document Object Model) to efficiently update the UI. Instead of directly manipulating the browser's DOM, React creates a virtual representation of the DOM in memory and updates it based on changes in the application's state. This approach minimizes DOM manipulation and improves performance.


# JSX
React also supports JSX (JavaScript XML), an extension to JavaScript that allows developers to write HTML-like code within JavaScript. JSX makes it easier to describe UI components and their structure, resulting in more readable and maintainable code.

## To run a React file in terminal
1. Install Node.js
2. Install Create React App:
```
npm install -g create-react-app
```
3. Create a React Application:
```
npx create-react-app my-react-app
```
Replace "my-react-app" with name of your choice for React application.

4. Navigate to Your React Project:
```
cd my-react-app
```
5. Start the Development Server:
```
npm start
```
6. Make Changes and Save:

 You can now make changes to your React files (usually found in the src directory) using your preferred code editor like Visual studion code. Save the changes, and you should see them reflected in your browser if you're using the development server.

7. Stop the Server:

By pressing ' Ctrl + C ' in terminal to stop the development server.

# Features of React
##  **Props (Properties):**
Props are a way to pass data from a parent component to a child component. They are similar to function arguments in JavaScript.

#### **Passing props:**
```
// ParentComponent.js
import ChildComponent from './ChildComponent';

function ParentComponent() {
  return <ChildComponent name="John" age={30} />;
}
```
#### **Accessing props:**
```
// ChildComponent.js
function ChildComponent(props) {
  return <div>{props.name} is {props.age} years old.</div>;
}
```
## **useState:**
'useState' is a React Hook that allows functional components to manage state. 

#### **Importing useState:**
```
import React, { useState } from 'react';
```
#### **Using useState:**
```
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```



