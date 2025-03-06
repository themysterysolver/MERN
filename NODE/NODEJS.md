
# Node.js NOTES
---
### INTRO
- nodejs is a `server environment!`
- uses js on server
- uses **asynchronus prohramming**.
    - That is it allows *task to run in bg while responding to other*.
    - Multithreaded model.
> Node.js runs single-threaded, non-blocking, asynchronous programming.

## WHat it can do?

- Create dynamic web page
- create,del,open,read,write and close files in the server.
- DB handling,ADD,DEL,MOD data.

```
What is a Node.js File?
- Node.js files contain tasks that will be executed on certain events
- A typical event is someone trying to access a port on the server
- Node.js files must be initiated on the server before having any effect
- Node.js files have extension ".js"
```
### PORT
- a **port number** is used to specify where a server listens for incoming requests.
- A port on a server is a number that identifies a connection endpoint and directs data to a specific service or process.

### MODULES,REQUIRE,EXPORTS
- Modules are ike built in libraries
- `require` is used to *include a module*.