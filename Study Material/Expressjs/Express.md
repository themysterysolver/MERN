## Express.js

### INTRO

- minimal,fast,flexible,scalable
- simplifies process of building API allows us to handle `routing,middleware,req handling,server-side logic`
- built on top of *node.js* and uses `js` for backend dev.
- follows **middleware pattern**
- full stack compatiblity.

---

## 🔹 Breakdown of your code

```js
const express = require('express') // import express library
const app = express()              // create an express application
const PORT = 3000                  // define the port number

// define a route for GET request on path '/'
app.get('/',(req,res)=>{
    res.send('Hello World');       // send "Hello World" to browser
}) 

// start server on PORT (3000)
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})
```

**Flow:**

1. Load **Express** module.
2. Create an app object.
3. Set up a route (`GET /`) → responds with "Hello World".
4. Start server on `http://localhost:3000`.

---

## 🔹 What is **Express**?

* **Express.js** is a **framework** built on top of Node.js.
* It simplifies server creation, routing, handling requests/responses.
* Example: Without Express, you’d write raw HTTP server code (longer).

✅ Express = Node.js + shortcuts + tools to build web apps faster.

---

## 🔹 What is **Node.js**?

* **Node.js** is a **runtime environment** that lets you run **JavaScript outside a browser** (on your system/server).
* Built on Chrome’s **V8 engine**.
* Useful for backend servers, APIs, and real-time apps.

👉 In short:

* **Node.js** = base platform.
* **Express.js** = framework on top of Node to make life easier.

---

## 🔹 What is **npm**?

* **npm** = Node Package Manager.
* It installs and manages libraries (packages) for Node.js.
* Example: `npm install express` downloads Express for your project.

---

## 🔹 What is **package.json**?

* A file that stores **project metadata and dependencies**.
* Includes:

  * Project name, version, author.
  * Dependencies (like `"express": "^4.19.2"`).
  * Scripts (like `start`, `test`).

---

## 🔹 What is `npm init -y`?

* Initializes a new **Node.js project**.
* Creates a `package.json` file with default values (the `-y` auto-skips the questions).

---

## 🔹 What is `npm start`?

* Runs the command defined under `"start"` in `package.json`.
* Example inside `package.json`:

  ```json
  "scripts": {
    "start": "node index.js"
  }
  ```
* Then typing `npm start` → runs `node index.js`.

---

## 🔹 What is `node index.js`?

* Directly runs your Node.js file (`index.js`).
* If your server code is in `index.js`, this starts the server.
* Equivalent to `npm start` (if `"start": "node index.js"` is in scripts).

---

👉 Summary:

* **Node.js** = runtime.
* **Express** = web framework for Node.
* **npm** = package manager.
* **package.json** = project + dependency info.
* **npm init -y** = auto-create package.json.
* **npm start** = run project via package.json script.
* **node index.js** = directly run the file.

---

## 🔹 What is **nodemon**?

* **nodemon** is a **developer tool** that automatically restarts your Node.js application whenever you make changes to your code.
* Normally, when you run `node index.js`, if you change the file you must stop and restart the server manually.
* With **nodemon**, you just run:

  ```bash
  nodemon index.js
  ```

  and it will watch your files → restart automatically whenever you save changes.

---

## 🔹 Installation

```bash
npm install -g nodemon   # global install
# OR
npm install --save-dev nodemon  # local dev dependency
```

---

## 🔹 Usage

1. Start server with:

   ```bash
   nodemon index.js
   ```
2. Now edit your code, save → server restarts automatically.

---

## 🔹 Why use it?

✅ Saves time (no manual restarts).
✅ Faster development workflow.
✅ Common in backend projects.

---

👉 Quick example in `package.json`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Now you can run:

```bash
npm run dev
```

to start server with auto-reload.

---

Perfect 👌 let’s do it step by step.

---

## 🔹 1. Install **nodemon** locally

```bash
npm install nodemon --save-dev
```

* `--save-dev` → adds it as a **development dependency** (because you don’t need nodemon in production).
* This updates your `package.json` under `"devDependencies"` like:

```json
"devDependencies": {
  "nodemon": "^3.0.2"
}
```

---

## 🔹 2. Update `package.json` to use nodemon

Open `package.json` and find the `"scripts"` section.
Change the `"start"` script to run with **nodemon**:

```json
"scripts": {
  "start": "nodemon index.js"
}
```

Now your `package.json` might look like:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

---

## 🔹 3. Run with nodemon

Now just type:

```bash
npm start
```

✅ It will run `nodemon index.js` (from scripts).
✅ Every time you save changes in your code → nodemon restarts automatically.

---

👉 Some people prefer:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

* `npm start` → production (normal `node`)
* `npm run dev` → development (with nodemon)

---

> You mean **package.json** `"type"` field → which decides whether you use **CommonJS (`require`)** or **ES modules (`import`)** in Node.js.

---

## 🔹 CommonJS (default in Node.js)

If you use:

```js
const express = require("express"); // CommonJS
```

👉 Then your `package.json` should **NOT** have `"type": "module"` (or just leave it out).

Example `package.json`:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

---

## 🔹 ES Module (modern import/export)

If you want:

```js
import express from "express"; // ES Module
```

👉 Then you **must add** `"type": "module"` in `package.json`.

Example `package.json`:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

---

✅ **Summary:**

* Using `require` → don’t add `"type": "module"`.
* Using `import` → add `"type": "module"`.

---


### Routing
<img width="1374" height="695" alt="image" src="https://github.com/user-attachments/assets/c8087069-1848-4303-a64a-3e6aa31bce08" />
<img width="1446" height="849" alt="image" src="https://github.com/user-attachments/assets/a9fbfae2-5417-480e-8275-2eafc67fe81b" />

---

## 🔹 `:` in Express routes

In Express, a `:` before a word in the route path means it’s a **route parameter (dynamic part of the URL)**.

👉 Example:

```js
app.get('/user/:username', ...)
```

* `:username` → dynamic value.
* If you visit **`http://localhost:3000/user/Prabha`**
  → `req.params.username = "Prabha"`

So you can capture values from the **path** of the URL.

---

## 🔹 Your first code (Dynamic Routing)

```js
app.get('/user/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Welcome home ${username}`);
});
```

* If user goes to:

  * `http://localhost:3000/user/Alice` → response: `Welcome home Alice`
  * `http://localhost:3000/user/Bob` → response: `Welcome home Bob`

---

## 🔹 Query String (`?`)

The **query string** is the part of a URL after `?`, used for optional parameters.

👉 Example:

```js
app.get('/search', (req, res) => {
    const keyword = req.query.keyword;
    res.send(`searching for ${keyword}`);
});
```

* URL: **`http://localhost:3000/search?keyword=express`**
  → `req.query.keyword = "express"`
  → response: `searching for express`

* URL: **`http://localhost:3000/search?keyword=nodejs`**
  → `req.query.keyword = "nodejs"`
  → response: `searching for nodejs`

---

## 🔹 Difference ( `:` vs `?` )

* **`:param` (Route Parameter)** → part of the **URL path**.

  * Example: `/user/Alice`
  * Accessed by `req.params.username`

* **`?key=value` (Query String)** → optional data in the **URL after ?**.

  * Example: `/search?keyword=nodejs`
  * Accessed by `req.query.keyword`

---

👉 Quick analogy:

* `/user/:id` → "Who are you asking about?" (specific person in path).
* `/search?keyword=xyz` → "What are you searching for?" (filter/search terms).

---

##### These two (`express.Router()` and `app.use()`) are super important for structuring Express apps. Let’s break them down slowly with examples.

---

# 🔹 1. `express.Router()`

* Think of it as a **mini Express app** that you can use to group routes.
* Useful for **modular code** (splitting routes into separate files).

👉 Example:

```js
const express = require('express');
const app = express();
const userRouter = express.Router(); // create a router

// define routes inside router
userRouter.get('/:username', (req, res) => {
    res.send(`User profile of ${req.params.username}`);
});

userRouter.get('/:username/settings', (req, res) => {
    res.send(`Settings for ${req.params.username}`);
});

// mount router on /user
app.use('/user', userRouter);

app.listen(3000, () => console.log("Server running on 3000"));
```

### 🔸 How it works:

* Visit: `http://localhost:3000/user/Prabha` → `"User profile of Prabha"`
* Visit: `http://localhost:3000/user/Prabha/settings` → `"Settings for Prabha"`

👉 `express.Router()` = organize related routes in one place.
👉 You usually put these routers into separate files (e.g., `userRoutes.js`, `productRoutes.js`).

---

# 🔹 2. `app.use()`

* **Middleware function** in Express.
* Tells Express to “use” something (like a router, function, or middleware).

### 👉 Three main uses:

#### ✅ a) Mounting routers

```js
app.use('/user', userRouter);
```

* All routes inside `userRouter` will be prefixed with `/user`.

#### ✅ b) Serving middleware

```js
app.use(express.json()); // parses JSON request body
```

* Now any incoming request with JSON will be automatically parsed.

#### ✅ c) Custom middleware

```js
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // pass control to next middleware/route
});
```

---

# 🔹 `express.Router()` vs `app.use()`

| Feature    | `express.Router()`                       | `app.use()`                                   |
| ---------- | ---------------------------------------- | --------------------------------------------- |
| What it is | A **mini Express app** (sub-application) | A **function** to mount middleware or routers |
| Purpose    | Group related routes                     | Apply middleware / mount routers              |
| Example    | `const router = express.Router()`        | `app.use('/api', router)`                     |
| Benefits   | Keeps code modular & organized           | Controls how/where middleware/routers apply   |

---

✅ **Analogy:**

* `express.Router()` = a small bus with its own seats (routes).
* `app.use()` = tells which road (path) the bus should run on.

---

## HTTP Request Methods

<img width="1541" height="727" alt="image" src="https://github.com/user-attachments/assets/7cb28cce-bfe6-40af-a662-5256ed053eff" />
<img width="1744" height="366" alt="image" src="https://github.com/user-attachments/assets/1a2da261-2295-4a4c-81f9-030c78c10c69" />
<img width="1331" height="296" alt="image" src="https://github.com/user-attachments/assets/77f90dca-694d-42d3-a1e9-3c7b9e6b15e6" />


---

## 🔹 1. What is **POST**?

* **HTTP POST method** is used to **send data from client → server**.
* Unlike **GET** (which sends data in the URL), **POST** sends data in the request body.
* Typical use cases: submitting forms, sending JSON data, uploading files, etc.

👉 Example:

```http
POST /user HTTP/1.1
Content-Type: application/json

{
  "name": "Prabha",
  "email": "prabha@example.com"
}
```

---

## 🔹 2. What can `req.body` contain?

* `req.body` is the **data sent by the client in the body of the request**.
* It depends on **Content-Type** header. Examples:

| Content-Type                        | `req.body` contains                          |
| ----------------------------------- | -------------------------------------------- |
| `application/json`                  | JSON object (`{name:"Prabha", email:"..."}`) |
| `application/x-www-form-urlencoded` | Form data (like HTML form submissions)       |
| `multipart/form-data`               | File uploads + form fields (needs `multer`)  |

👉 In your code (with `express.json()`), `req.body` is a **JavaScript object parsed from JSON**.

---

## 🔹 3. Why `express.json()`?

* By default, Express doesn’t know how to read the request body.
* `express.json()` is **middleware** that parses incoming requests with `Content-Type: application/json`.
* It converts raw JSON string → usable JavaScript object in `req.body`.

Without it:

```js
console.log(req.body); // undefined
```

With it:

```js
console.log(req.body); // { name: "Prabha", email: "..." }
```

---

## 🔹 4. Why `res.json()`?

* `res.json()` sends a JSON response to the client.
* It automatically sets the header:

  ```http
  Content-Type: application/json
  ```
* It also stringifies the object so the client gets proper JSON.

Example:

```js
res.json({
   message: `User is ${name} with email ${email}`
})
```

Response sent back:

```json
{
  "message": "User is Prabha with email prabha@example.com"
}
```

---

✅ **Summary:**

* **POST** = send data in request body.
* **req.body** = the data client sends (JSON, form, etc.).
* **express.json()** = middleware to parse JSON body.
* **res.json()** = send JSON back to client (with correct headers).

---

## 🔹 Do we **have** to send a response in a POST route?

Technically: **Yes, you should always send a response** (for *any* HTTP request, not just POST).

---

### Why?

1. **Every HTTP request expects a response.**

   * If you don’t send one, the client will just keep waiting until it times out.
   * That looks like the server “hanged.”

2. **Good practice.**

   * Even if you don’t return data, you should at least confirm with a status code.
   * Example:

     ```js
     res.sendStatus(200); // OK
     res.sendStatus(201); // Created
     res.sendStatus(204); // No Content
     ```

3. **POST usually modifies data.**

   * Since POST is often used to **create** or **update**, the server should confirm success/failure.

---

### ✅ Examples

#### Minimal (only status):

```js
app.post('/user', express.json(), (req, res) => {
    res.sendStatus(201); // "Created" response, no body
});
```

#### With message:

```js
app.post('/user', express.json(), (req, res) => {
    const { name } = req.body;
    res.status(201).json({ message: `${name} created successfully` });
});
```

#### No content (still valid response):

```js
app.post('/user', express.json(), (req, res) => {
    res.sendStatus(204); // No Content
});
```

---

✅ **Summary:**

* A POST route **must respond** (even if just a status code).
* Otherwise the client waits forever (bad UX, wasted resources).

---

Got it 👍 here’s a quick cheat sheet of **common HTTP status codes** (especially for `POST`):

---

## 🔹 Success codes

* **200 OK** → Request succeeded (generic).
* **201 Created** → Resource was successfully created (✅ best for POST when new data is added).
* **204 No Content** → Request succeeded but no response body (useful when you don’t need to send data back).

---

## 🔹 Client error codes

* **400 Bad Request** → Client sent invalid data (e.g., missing fields).
* **401 Unauthorized** → Authentication required (user not logged in).
* **403 Forbidden** → User is authenticated but not allowed to access.
* **404 Not Found** → Route or resource doesn’t exist.

---

## 🔹 Server error codes

* **500 Internal Server Error** → Something went wrong on the server.
* **503 Service Unavailable** → Server is down or overloaded.

---

### ✅ Example in Express:

```js
app.post('/user', express.json(), (req, res) => {
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }

    // pretend saving user to database here...
    res.status(201).json({ message: "User created successfully", name, email });
});
```

----

## PUT AND DELETE

<img width="1400" height="330" alt="image" src="https://github.com/user-attachments/assets/080d5cad-1bca-4fe8-bdb1-740f608f70ec" />

<img width="976" height="216" alt="image" src="https://github.com/user-attachments/assets/408eedac-99a2-42e1-88cf-4bd76d732c80" />

- Let’s unpack why **PUT** and **DELETE** often use dynamic parameters.
---

## 🔹 1. What is **PUT**?

* `PUT` = update an existing resource.
* To update, the server must know **which resource** to update.
* That’s why you often see:

```js
app.put('/user/:id', express.json(), (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    res.send(`Updating user ${id} with name ${name} and email ${email}`);
});
```

👉 Client calls:

* `PUT /user/101` with `{ "name": "Alice" }`
* Means → update user with `id=101`.

---

## 🔹 2. What is **DELETE**?

* `DELETE` = remove a resource.
* The server must know **which resource** to delete.
* Example:

```js
app.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Deleting user with id ${id}`);
});
```

👉 Client calls:

* `DELETE /user/101` → delete user with id `101`.

---

## 🔹 Why dynamic parameter (`:id`)?

* Because you’re targeting a **specific resource**.
* Dynamic parameters (`:id`, `:username`, etc.) make the API clear:

  * `PUT /user/123` → update user #123.
  * `DELETE /user/123` → delete user #123.

If we didn’t use parameters, the server wouldn’t know *which one*.

---

## 🔹 REST API design convention

* **GET /users** → list all users.
* **GET /users/\:id** → get one user.
* **POST /users** → create new user.
* **PUT /users/\:id** → update user.
* **DELETE /users/\:id** → delete user.

👉 Notice: Only **create (POST)** doesn’t need an id (because you don’t have one yet).
👉 But **update/delete** must specify which resource → that’s why dynamic parameter.

---

✅ **Summary:**

* PUT & DELETE usually require **dynamic parameters** because they act on a specific existing resource.
* Without it, the server wouldn’t know which item to modify or remove.

---

### Middleware

<img width="1509" height="832" alt="image" src="https://github.com/user-attachments/assets/12e427ea-8ae8-4230-b572-209bdbcabaf1" />
<img width="1542" height="989" alt="image" src="https://github.com/user-attachments/assets/9f6515dc-b841-4c5a-a711-78e3d90e96ad" />
Perfect question 👌 You’ve just written your **first custom middleware** in Express. Let’s break it down slowly:

---

### 🔹 What your code does:

```js
app.use((req, res, next) => {
    console.log('A new req received at ' + Date.now());
    next();
});
```

* **`app.use(...)`**
  Registers a middleware function that runs for **every incoming request**, regardless of the route or HTTP method.

* **`(req, res, next)`**
  Every middleware in Express takes 3 parameters:

  * `req` → the request object (details about the request: URL, headers, params, body, etc.)
  * `res` → the response object (used to send something back to the client)
  * `next` → a **function you must call** to pass control to the next middleware/route handler

* **`console.log(...)`**
  Prints a timestamp every time a request hits your server.

* **`next()`**
  This is **super important**. Without calling `next()`, the request will get stuck and never reach your actual route handlers like `/about` or `/thing/...`.

---

### 🔹 Why `next()` is needed?

Think of middlewares as a **pipeline** (like a chain of functions).
When a request comes in, Express runs the first middleware. If it calls `next()`, Express passes control to the next middleware in the stack. If it doesn’t, the request ends there.

Example flow:

1. Request → Middleware 1 (`next()`) → Middleware 2 (`next()`) → Route handler (`res.send()`)
2. If any middleware **doesn’t call `next()` and doesn’t send a response**, the request hangs (client waits forever).

---

### 🔹 Types of middleware

* **Application-level middleware** → like your `app.use(...)`, runs for all routes.
* **Route-level middleware** → attached to specific routes.
* **Built-in middleware** → e.g., `express.json()`, `express.static()`.
* **Error-handling middleware** → has 4 args `(err, req, res, next)`.

---

### 🔹 Example with multiple middlewares

```js
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log("Middleware 2");
    next();
});

app.get('/hello', (req, res) => {
    res.send("Hello World!");
});
```

If you call `/hello` → logs:

```
Middleware 1
Middleware 2
```

then response:

```
Hello World!
```

---

👉 So in short:

* **`next()`** = tells Express *“I’m done here, pass the request on to the next handler”*.
* Without `next()`, the request **stops** at your middleware.
* Middlewares are the backbone of Express (used for logging, authentication, error handling, etc.).

---

## Templating engine

<img width="1490" height="723" alt="image" src="https://github.com/user-attachments/assets/dc2810d9-9ae5-49a8-8ded-4449ccb8dabf" />

---

### 🔹 What is EJS?

* **EJS (Embedded JavaScript templates)** is a templating engine for Node.js.
* It lets you write **HTML mixed with JavaScript** (using `<%= %>` syntax).
* Instead of sending just plain text/JSON, your Express app can **render dynamic HTML pages**.

---

### 🔹 Your Code Breakdown

```js
import express from 'express'

const app = express()
const PORT = 3000
```

👉 Standard Express app setup.

---

```js
// set EJS as view engine
app.set('view engine','ejs')
```

* Tells Express:

  > “Whenever I call `res.render()`, use the **EJS template engine** to render `.ejs` files.”
* By default, Express looks for templates inside a folder named **`views/`** (you can change this if you want).

---

```js
app.use(express.json());
```

👉 Middleware so your app can parse JSON request bodies.

---

```js
app.get('/',(req,res)=>{
    const username = 'Arjun'
    res.render('index',{username});
})
```

* `res.render('index', { username })` means:

  1. Look for `views/index.ejs`.
  2. Render it as HTML.
  3. Pass in a variable called `username` with the value `"Arjun"`.

So inside your `views/index.ejs` file, you could write:

```ejs
<!DOCTYPE html>
<html>
<head>
    <title>EJS Example</title>
</head>
<body>
    <h1>Hello, <%= username %>!</h1>
</body>
</html>
```

🔹 When you visit `http://localhost:3000/`, the output will be:

```html
<h1>Hello, Arjun!</h1>
```

---

```js
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})
```

👉 Starts the server.

---

### 🔹 Why Use EJS?

* If you want to build **server-rendered websites** (HTML + dynamic values).
* Great for simple apps like blogs, dashboards, admin panels.
* Alternative to React/Angular for when you don’t need heavy client-side frameworks.

---

✅ In short:
Your code sets up Express with **EJS as the view engine**, renders an `index.ejs` file, and passes a variable (`username`) into it, so you can embed dynamic data inside HTML.

---

### 1️⃣ **EJS** (for templating)

```sh
npm i ejs
```

* Lets Express render `.ejs` files inside the `views/` folder.
* Used for **server-side rendering** of HTML.
* Example:

  ```js
  res.render("profile", { name: "Arjun" });
  ```

---

### 2️⃣ **Multer** (for file uploads)

```sh
npm i multer
```

* Middleware for handling **file uploads** (`multipart/form-data`).
* Typically used when uploading images, PDFs, etc.
* Example:

  ```js
  import multer from "multer";

  const upload = multer({ dest: "uploads/" });

  app.post("/upload", upload.single("myfile"), (req, res) => {
      res.send(`File uploaded: ${req.file.originalname}`);
  });
  ```

---

✅ So your project should have both in **package.json** after installation:

```json
"dependencies": {
  "express": "^4.18.2",
  "ejs": "^3.1.9",
  "multer": "^1.4.5"
}
```

---

## DB and Mongoose

<img width="1115" height="553" alt="image" src="https://github.com/user-attachments/assets/19e0b839-0400-4a46-ab34-f4b21513f627" />
<img width="1156" height="456" alt="image" src="https://github.com/user-attachments/assets/99f8b635-ecfb-482b-9205-f13e0529a22b" />
<img width="561" height="257" alt="image" src="https://github.com/user-attachments/assets/2ef1af67-3a76-4abc-bc24-34a51c7c39b4" />






