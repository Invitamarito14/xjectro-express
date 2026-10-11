# xjectro-express 🚀✨

![GitHub Release](https://img.shields.io/github/v/release/Invitamarito14/xjectro-express?style=flat-square) ![Node.js](https://img.shields.io/badge/Node.js-16.x-green?style=flat-square) ![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

Welcome to **xjectro-express**, a versatile Node.js package designed to streamline the development of Express.js applications. This package provides a robust server core along with essential helper tools, making it easy to build scalable and efficient web applications. Whether you prefer ECMAScript Modules (ESM) or CommonJS, xjectro-express has you covered.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Topics](#topics)
- [Contributing](#contributing)
- [License](#license)
- [Releases](#releases)

## Features

- **Express.js Core**: Built on the widely-used Express framework, xjectro-express provides a solid foundation for your server.
- **Compatibility**: Works seamlessly with both ESM and CommonJS, allowing you to choose your preferred module system.
- **Middleware Support**: Easily integrate middleware for added functionality and improved performance.
- **ID Generator**: Generate unique identifiers for your resources effortlessly.
- **JWT Authentication**: Implement secure user authentication using JSON Web Tokens.
- **Validation Tools**: Simplify data validation with built-in tools.
- **TypeScript Support**: Fully compatible with TypeScript for type safety and better development experience.

## Installation

To install xjectro-express, run the following command in your terminal:

```bash
npm install xjectro-express
```

Ensure you have Node.js installed on your machine. You can download it from the [official website](https://nodejs.org/).

## Getting Started

After installation, you can set up a basic Express server with just a few lines of code. Below is a simple example to get you started:

```javascript
import express from 'express';
import { createServer } from 'xjectro-express';

const app = createServer();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

This code snippet creates a basic Express server that responds with "Hello, World!" when you access the root URL.

## Usage

### Middleware

You can easily add middleware to your xjectro-express server. For example, to use a logging middleware:

```javascript
import express from 'express';
import { createServer } from 'xjectro-express';
import morgan from 'morgan';

const app = createServer();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

### ID Generator

To generate unique IDs, you can use the built-in ID generator. Here's how:

```javascript
import { generateId } from 'xjectro-express';

const uniqueId = generateId();
console.log(uniqueId); // Outputs a unique identifier
```

### JWT Authentication

Implementing JWT authentication is straightforward. You can use the provided methods to sign and verify tokens:

```javascript
import { signToken, verifyToken } from 'xjectro-express';

const token = signToken({ userId: 123 });
console.log(token); // Outputs a signed JWT

const decoded = verifyToken(token);
console.log(decoded); // Outputs the decoded payload
```

### Validation

The package also includes validation tools to help you ensure that your data meets certain criteria:

```javascript
import { validate } from 'xjectro-express';

const data = { name: 'John', age: 25 };
const rules = { name: 'string', age: 'number' };

const isValid = validate(data, rules);
console.log(isValid); // Outputs true or false based on validation
```

## Topics

This repository covers various topics that are essential for modern web development. Here are some key areas:

- **Express**: The foundation of your server.
- **Express.js**: A popular web framework for Node.js.
- **Hash**: Securely store passwords and sensitive data.
- **ID Generator**: Create unique identifiers.
- **JWT**: Secure user authentication.
- **Middleware**: Enhance your server's functionality.
- **Node.js**: The runtime environment for executing JavaScript.
- **Server**: Build scalable and efficient web applications.
- **TypeScript**: A typed superset of JavaScript.
- **Validation**: Ensure data integrity and correctness.

## Contributing

We welcome contributions from the community. If you want to help improve xjectro-express, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Open a pull request.

Please ensure that your code adheres to our coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Releases

For the latest releases and updates, visit the [Releases](https://github.com/Invitamarito14/xjectro-express/releases) section. You can download the latest version and execute it in your projects.

Additionally, you can check the [Releases](https://github.com/Invitamarito14/xjectro-express/releases) section for any important updates and changes.

---

Feel free to explore, modify, and build upon xjectro-express for your own projects. We hope you find it useful in your development journey!