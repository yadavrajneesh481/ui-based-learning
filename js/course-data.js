export const tutorials = {
    week1: {
        title: "🗓 Week 1: JavaScript Foundations",
        description: "Days 1-7: Core concepts, variables, operators, functions, and scope",
        tutorials: [
            { title: "JavaScript Execution Simplified", file: "js.html" },
            { title: "Day 1: Introduction to JavaScript", file: "day1-introduction-to-javascript.html" },
            { title: "Day 2: Variables & Data Types", file: "day2-variables-data-types.html" },
            { title: "Day 3: Operators & Expressions", file: "day3-operators-expressions.html" },
            { title: "Day 4: Conditional Logic", file: "day4-conditional-logic.html" },
            { title: "Day 5: Loops & Iterations", file: "day5-loops-iterations.html" },
            { title: "Day 6: Functions in JavaScript", file: "day6-functions-javascript.html" },
            { title: "Day 7: Scope & Hoisting", file: "day7-scope-hoisting.html" },
        ]
    },
    week2: {
        title: "🗓 Week 2: Working with Data & Modern Syntax",
        description: "Days 8-14: Arrays, objects, ES6+ features, regex, and error handling",
        tutorials: [
            { title: "Day 8: Arrays Learning Page", file: "arrays-learning-page.html" },
            { title: "Day 9: JavaScript Objects Learning", file: "js-objects-learning.html" },
            { title: " JavaScript Objects In Detail", file: "objects-details.html" },
            { title: "Day 10-11: ES6+ Features Tutorial", file: "es6-features-tutorial.html" },
            { title: "Day 10-11: Modern JS Features (Hindi)", file: "modern-js-features-hindi.html" },
            { title: "Day 12: Array Methods Learning", file: "array-methods-learning.html" },
            { title: "Day 13: Regex Learning Tool", file: "regex-learning-tool.html" },
            { title: "Day 14: Error Handling Tutorial", file: "error-handling-tutorial.html" }
        ]
    },
    week3: {
        title: "🗓 Week 3: Asynchronous JavaScript & DOM Mastery",
        description: "Days 15-21: Callbacks, promises, async/await, DOM manipulation, and APIs",
        tutorials: [
            { title: "Day 16: Promises Learning", file: "promises-learning.html" },
            { title: "Day 17: Async/Await Tutorial", file: "async-await.html" },
            { title: "Day 15,17: Async JS Learning", file: "async-js-learning.html" },
            { title: "Day 18-19: DOM Manipulation Tutorial", file: "dom-manipulation-tutorial.html" },
            { title: "Day 20: Browser Storage Tutorial", file: "browser-storage-tutorial.html" },
            { title: "Day 21: Fetch API & AJAX Tutorial", file: "fetch-api-ajax-tutorial.html" },
        ]
    },
    week4: {
        title: "🗓 Week 4: Advanced Concepts & Design Patterns",
        description: "Days 22-28: OOP, prototypes, closures, this context, and design patterns",
        tutorials: [
            { title: "Day 22: OOP Learning Page", file: "oop-learning-page.html" },
            { title: "Day 23: Prototypal Inheritance Tutorial", file: "prototypal-inheritance-tutorial.html" },
            { title: "Day 24: Closures & Advanced Functions", file: "closures-advanced-functions.html" },
            { title: "Day 25: This Context Tutorial", file: "this-context-tutorial.html" },
            { title: "Day 26-27: JavaScript Design Patterns I", file: "javascript-design-patterns-1.html" },
            { title: "Day 26-27: JavaScript Design Patterns II", file: "javascript-design-patterns-2.html" },
            { title: "Day 28: JavaScript Modules - Interactive Guide", file: "javascript-modules-interactive-learning-guide.html" }
        ]
    },
    week5: {
        title: "🗓 Week 5: Modern Development & Final Project",
        description: "Days 29-35: Testing, performance, security, accessibility, and build tools",
        tutorials: [
            { title: "Day 29: Testing JavaScript", file: "testing-javascript.html" },
            { title: "Day 30: Performance Optimization", file: "performance-optimization.html" },
            { title: "Day 31: JavaScript Security", file: "day31-javascript-security.html" },
            { title: "Day 32: Accessibility (A11y)", file: "day32-accessibility-a11y.html" },
            { title: "Day 33: Build Tools & Workflow", file: "day33-build-tools-workflow.html" },
            { title: "Day 34: TypeScript Essentials", file: "day34-typescript-essentials.html" },
            { title: "Day 35: Final Project & Beyond", file: "day35-final-project-beyond.html" }
        ]
    }
};

export const roadmapData = {
    week1: {
        title: "Week 1: JavaScript Foundations",
        description: "Master the core building blocks of JavaScript programming",
        days: [
            {
                day: "Day 1",
                title: "Introduction to JavaScript",
                topics: [
                    "What is JavaScript and its role in the web ecosystem",
                    "How JavaScript powers dynamic web experiences",
                    "Setting up environment: VS Code, Node.js, browsers, DevTools",
                    "Inline, internal, and external JavaScript in HTML",
                    "Writing and executing your first JavaScript code (console.log)"
                ],
                practice: "Create a webpage that displays 'Hello JavaScript!' dynamically"
            },
            {
                day: "Day 2",
                title: "Variables & Data Types",
                topics: [
                    "Variable declarations: var, let, const and scope rules",
                    "Primitive data types: string, number, boolean, null, undefined, symbol, bigint",
                    "Type conversion and typeof operator"
                ],
                practice: "Build a mini profile script that logs personal info dynamically"
            },
            {
                day: "Day 3",
                title: "Operators & Expressions",
                topics: [
                    "Arithmetic, assignment, and logical operators",
                    "Comparison operators and strict equality",
                    "Operator precedence and associativity",
                    "Type coercion and pitfalls"
                ],
                practice: "Build a simple calculator program"
            },
            {
                day: "Day 4",
                title: "Conditional Logic",
                topics: [
                    "If-else and switch statements",
                    "Ternary operator",
                    "Truthy and falsy values"
                ],
                practice: "Create a weather or grade evaluator app"
            },
            {
                day: "Day 5",
                title: "Loops & Iterations",
                topics: [
                    "for, while, do…while loops",
                    "Iterating arrays with for…of and objects with for…in",
                    "break, continue, labeled loops"
                ],
                practice: "Generate multiplication tables and process lists dynamically"
            },
            {
                day: "Day 6",
                title: "Functions in JavaScript",
                topics: [
                    "Function declarations vs expressions",
                    "Arrow functions and implicit returns",
                    "Parameters, return values, default and rest parameters"
                ],
                practice: "Create a function library (e.g., for math utilities)"
            },
            {
                day: "Day 7",
                title: "Scope & Hoisting",
                topics: [
                    "Global, local, and block scope",
                    "Function and variable hoisting",
                    "Closures introduction and examples"
                ],
                practice: "Debug scope-related issues in code snippets"
            }
        ]
    },
    week2: {
        title: "Week 2: Working with Data & Modern Syntax",
        description: "Learn to manipulate data structures and use modern JavaScript features",
        days: [
            {
                day: "Day 8",
                title: "Arrays",
                topics: [
                    "Creating and accessing arrays",
                    "Modifying arrays (push, pop, shift, unshift, splice)",
                    "Iteration with loops and forEach"
                ],
                practice: "Build a simple to-do list"
            },
            {
                day: "Day 9",
                title: "Objects",
                topics: [
                    "Object literals and constructor functions",
                    "Adding, accessing, and deleting properties",
                    "The this keyword",
                    "Object.keys(), Object.values(), Object.entries()"
                ],
                practice: "Create a student or product object model"
            },
            {
                day: "Day 10",
                title: "Modern JavaScript Features (ES6+) — Part 1",
                topics: [
                    "Template literals & multiline strings",
                    "Destructuring arrays & objects",
                    "Spread and rest operators"
                ],
                practice: "Refactor old code into ES6 syntax"
            },
            {
                day: "Day 11",
                title: "Modern JavaScript Features (ES6+) — Part 2",
                topics: [
                    "Optional chaining (?.)",
                    "Nullish coalescing (??)",
                    "Short-circuit evaluation",
                    "Enhanced object literals"
                ],
                practice: "Apply these features in a data manipulation script"
            },
            {
                day: "Day 12",
                title: "Advanced Array Methods",
                topics: [
                    "map, filter, reduce, find, some, every, sort",
                    "Method chaining"
                ],
                practice: "Create a student grade analyzer or shopping cart summary"
            },
            {
                day: "Day 13",
                title: "Regular Expressions",
                topics: [
                    "Creating regex patterns",
                    "Using test(), exec(), match(), replace()",
                    "Common regex use cases (email, phone validation)"
                ],
                practice: "Build a form validation tool"
            },
            {
                day: "Day 14",
                title: "Error Handling",
                topics: [
                    "try, catch, finally",
                    "Throwing and catching custom errors",
                    "Error propagation"
                ],
                practice: "Implement safe error handling in user input functions"
            }
        ]
    },
    week3: {
        title: "Week 3: Asynchronous JavaScript & DOM Mastery",
        description: "Master async programming and dynamic web page manipulation",
        days: [
            {
                day: "Day 15",
                title: "Asynchronous JavaScript (Callbacks)",
                topics: [
                    "Sync vs Async execution",
                    "Callback functions and callback hell",
                    "setTimeout, setInterval"
                ],
                practice: "Create a countdown timer"
            },
            {
                day: "Day 16",
                title: "Promises",
                topics: [
                    "Creating and chaining promises",
                    "Promise combinators: all, race, any"
                ],
                practice: "Convert callback code to promises"
            },
            {
                day: "Day 17",
                title: "Async/Await",
                topics: [
                    "Writing cleaner async code",
                    "Handling errors with try/catch",
                    "Sequential vs parallel async execution"
                ],
                practice: "Fetch data using async/await"
            },
            {
                day: "Day 18",
                title: "DOM Manipulation — Part 1",
                topics: [
                    "DOM tree overview",
                    "Selecting elements with querySelector & getElementById",
                    "Modifying content, attributes, and styles",
                    "Creating & removing elements dynamically"
                ],
                practice: "Build a dynamic quote generator"
            },
            {
                day: "Day 19",
                title: "DOM Manipulation — Part 2",
                topics: [
                    "Event listeners and event objects",
                    "Event bubbling, capturing, and delegation"
                ],
                practice: "Create an interactive form or dynamic gallery"
            },
            {
                day: "Day 20",
                title: "Browser Storage",
                topics: [
                    "Cookies vs LocalStorage vs SessionStorage",
                    "Using localStorage for data persistence",
                    "Intro to IndexedDB and caching"
                ],
                practice: "Build a dark/light mode preference saver"
            },
            {
                day: "Day 21",
                title: "Fetch API & AJAX",
                topics: [
                    "Fetching data from APIs",
                    "Working with JSON responses",
                    "Error handling in network calls"
                ],
                practice: "Build a weather or movie search app using a public API"
            }
        ]
    },
    week4: {
        title: "Week 4: Advanced Concepts & Design Patterns",
        description: "Dive deep into advanced JavaScript concepts and architectural patterns",
        days: [
            {
                day: "Day 22",
                title: "Object-Oriented Programming (OOP)",
                topics: [
                    "Constructor functions and ES6 classes",
                    "Inheritance, getters/setters, static methods"
                ],
                practice: "Build a class hierarchy (e.g., Vehicle, Car, Bike)"
            },
            {
                day: "Day 23",
                title: "Prototypal Inheritance",
                topics: [
                    "Prototype chain and inheritance",
                    "Object.create() and prototype manipulation"
                ],
                practice: "Implement inheritance using prototypes manually"
            },
            {
                day: "Day 24",
                title: "Closures & Advanced Functions",
                topics: [
                    "Deep dive into closures",
                    "IIFE, currying, partial application"
                ],
                practice: "Build a private counter or data encapsulation demo"
            },
            {
                day: "Day 25",
                title: "Understanding this & Context",
                topics: [
                    "this in different contexts",
                    "call, apply, and bind methods",
                    "Lexical this in arrow functions"
                ],
                practice: "Debug and fix incorrect this behavior"
            },
            {
                day: "Day 26",
                title: "JavaScript Design Patterns — I",
                topics: [
                    "Module, Singleton, Factory, Observer patterns"
                ],
                practice: "Implement a notification system using Observer pattern"
            },
            {
                day: "Day 27",
                title: "JavaScript Design Patterns — II",
                topics: [
                    "MVC/MVVM, Revealing Module, Decorator, Pub/Sub patterns"
                ],
                practice: "Refactor a small app using a design pattern"
            },
            {
                day: "Day 28",
                title: "JavaScript Modules",
                topics: [
                    "Script loading problems and ES modules (import/export)",
                    "CommonJS vs ES6 Modules",
                    "Dynamic imports"
                ],
                practice: "Structure your project with modules"
            }
        ]
    },
    week5: {
        title: "Week 5: Modern Development & Final Project",
        description: "Professional development practices and real-world application building",
        days: [
            {
                day: "Day 29",
                title: "Testing JavaScript",
                topics: [
                    "Introduction to testing types: unit, integration, e2e",
                    "Jest or Mocha basics",
                    "Writing and running basic tests"
                ],
                practice: "Test utility functions using Jest"
            },
            {
                day: "Day 30",
                title: "Performance Optimization",
                topics: [
                    "Profiling JavaScript with DevTools",
                    "Debouncing & Throttling",
                    "Memory leaks and garbage collection"
                ],
                practice: "Optimize a laggy scroll or search feature"
            },
            {
                day: "Day 31",
                title: "JavaScript Security",
                topics: [
                    "XSS (Cross-Site Scripting) prevention",
                    "CSRF protection",
                    "Secure coding practices"
                ],
                practice: "Audit a form for security vulnerabilities"
            },
            {
                day: "Day 32",
                title: "Accessibility (A11y)",
                topics: [
                    "ARIA roles and attributes",
                    "Keyboard navigation",
                    "Screen reader compatibility"
                ],
                practice: "Make a custom dropdown accessible"
            },
            {
                day: "Day 33",
                title: "Build Tools & Workflow",
                topics: [
                    "NPM/Yarn basics",
                    "Webpack, Vite, Parcel overview",
                    "Transpiling with Babel"
                ],
                practice: "Set up a basic project with Vite"
            },
            {
                day: "Day 34",
                title: "TypeScript Essentials",
                topics: [
                    "Why TypeScript?",
                    "Basic types, interfaces, and enums",
                    "Compiling TS to JS"
                ],
                practice: "Convert a small JS file to TypeScript"
            },
            {
                day: "Day 35",
                title: "Final Project & Beyond",
                topics: [
                    "Project planning and architecture",
                    "Code quality and linting (ESLint, Prettier)",
                    "Continuous learning path"
                ],
                practice: "Start your capstone project!"
            }
        ]
    }
};
