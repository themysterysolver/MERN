## NOTES
---
## MONGO DB
- `NoSQL` lang
- This is flexible.
    - No need for all the field to exist.
    - No need for ` NULL`
- Saved as **json**.
- community and atlas
    - community - local
    - atlas - used a s cloud by everyone
> mongodb+srv://arjunprabhakar1910:<db_password>@mydb.tdb6lye.mongodb.net/
- **collection** is like a folder
- **document** is a collection of field and value,it is a subpart of collection
- *onecompiler monogodb*
- use cheatSheet
---
### CRUD
###### Create
- insertOne
- insertMany the input is given as `[]`
###### Update
- monong DB methods is used with `$` and it is returned as *key-value* pair so it is enclosed in `[]`
---
### HISTORY
- v8 engine is used to run js.
- `nodejs` is a ***run time environment***,used in `backend`.
- `exports` 
---
### EXPRESS
- fs
- os
- http
```
npm i express
```
---
### NOTES
- createing a `package.json`
```
npm init
```
- `express()` returns an object.
- `require()` is used to import modules,files,json.
- express helps in routing,handle request and resposne
- http method 
- The function you use is *callback*
```
npm i express
```
- end point 
- types of request(get,post,post,put)
- odm - object data mapping
- or - 
- The below is used to connect mongo db
```
npm i mongoose
```
- node doesn't know how to handle json at `res.body` so we make it as object
- middleware
```
app.use(express.json())
```
- The above converts json to obj
- creating `model` folder
- This helps assigning the collection
---
### CACHE-ERROR
- Happens when node module is created for the first time.Node modules doesn't know where to go.
cache error
- app data => roaming => create a folder npm
---