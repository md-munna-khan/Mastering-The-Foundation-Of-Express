# Mastering The Foundation Of Express
##### express
- fast very fast
- 2 unopinionated  so what is opinionated?
ans opinion as like redux,nextjs there who is system he declired i mean rules and regulation you must be follow there rules and system
and unopinionated you just follow our function and you can do your own pattern and structure it as your wish no problem
- 3
![alt text](image.png)
![alt text](image-1.png)

## 14-2 Creating Basic Web server with Express
###### What is devDependencies?
when we are install package there are 2 types====>
- 1 dependency when our project live not need those package only need in development as like typescript
 when we are are run project in node js in of the typescript converted in javascript

 ans =devDependencies are the packages that you only need during development, not when the application is running in production.
- 2 main dependency as like express ,react etc
![alt text](image-2.png)

![alt text](image-3.png)
![alt text](image-4.png)

## 14-3 What is parsers, request and response object
- watching change
![alt text](image-5.png)
- not need for every time write folder name code
![alt text](image-6.png)
- not need write npm run dev just write npm start 
because start are the by default keyword
![alt text](image-7.png)

Sure!

✅ What does app.use(express.json()); do in Express?
It is a middleware that tells Express:

“If a request comes in with JSON data (like from a frontend or Postman), parse that JSON and put it into req.body.”

🔍 Without it:
```ts
app.post("/user", (req, res) => {
  console.log(req.body); // ❌ undefined
});
```
Because Express doesn’t know how to read the body by default.

✅ With express.json():
```ts
app.use(express.json()); // middleware to parse JSON
```
```ts
app.post("/user", (req, res) => {
  console.log(req.body); // ✅ { name: "Munna", email: "example@gmail.com" }
  res.send("User received");
});

📌 Why is it needed?
It parses incoming requests with Content-Type: application/json.

It's required when you send data using POST, PUT, or PATCH from tools like Postman or a frontend app.