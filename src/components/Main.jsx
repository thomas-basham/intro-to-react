import React from "react";
import AllCars from "./AllCars";

export default function Main() {
  return (
    <main>
      <div>
        <h2>What is React?</h2>
        <p>React is JS library for creating UI's</p>
      </div>

      <div>
        <h2>What are components?</h2>
        <ul>
          <li>Components are reuseable building blocks for React</li>
          <li>Components can go inside a components folder, that you make.</li>
          <li>
            Start the first letter capitalized such as <code>Footer.jsx</code>
          </li>
          <li>
            We write components with jsx. Jsx is JavaScript that returns HTML
          </li>
          <li>
            To create a functional component, use React Snippets shortcut: RFC
          </li>
          <li>
            Return your component wrapped in a jsx fragment{" "}
            <code>{"<> </>"}</code>
          </li>
        </ul>
      </div>

      <div>
        <h2>Getting Started/Installation</h2>
        <ul>
          <li>
            Install with{" "}
            <code>npm create vite@latest my-app -- --template react</code>
          </li>
          <li>Alternatively use a manual Webpack/babel setup</li>
          <li>
            The <code>App.jsx</code> file is your main component. You can also
            think of it as the parent component to hold all of your child
            components
          </li>
          <li>
            FOR NOW, Only update the meta data in the <code>index.html</code>{" "}
            file
          </li>
          <li>
            FOR NOW, don't change the <code>main.jsx</code> file{" "}
          </li>
          <li>
            Remove App.jsx starter code, and the css in App.css and index.css
          </li>
        </ul>
      </div>

      <AllCars />
    </main>
  );
}
