import React from 'react';
import './Answersheet.css'

const Answersheet = () => {
    return (
        <div className='answer'>
            <h1>Answer to the question</h1>
            <p>1. React is a User Interface (UI) library. It also work a declarative, efficient, and flexible JavaScript library for building user interfaces. It implements a virtual DOM that is basically a DOM tree representation in JavaScript. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements.JavaScript is very fast and it's worth keeping a DOM tree in it to speed up its manipulation. Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
            <p>2. Props vs State :
                a) Props are read-only. But State changes can be asynchronous.
                b) Stateless component can have Props. But Stateless components cannot have State.
                c) Props make components reusable. But State cannot make components reusable.
                d) Props are immutable. But State is mutable.
                e) Props allow you to pass data from one component to other components as an argument. But State holds information about the components.
                f) Props are used to communicate between components. But States can be used for rendering dynamic changes with the component.
                g) Props can be accessed by the child component. But State cannot be accessed by child components.
            </p>
            <p>
                3. useState abides by the same rules that all Hooks follow: Only call Hooks at the top level and Only call Hooks from React functions. The first rule means that, even inside functional components, anyone shouldn't call useState in loops, conditions, or nested functions because React relies on the order in which useState functions are called to get the correct value for a particular state variable. When useState is executed, the state of the current Hook is read or initialized during the first render and then the variable is changed to point to the next Hook. A functional component can have many calls to useState or other Hooks. Each Hook is stored in a list, and there's a variable that keeps track of the currently executed Hook.
            </p>
        </div>
    );
};

export default Answersheet;