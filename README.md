# Server Side Rendered React

This repo has a small application to demonstrate the use of SSR with React. The main challenges are Routing and State, I used:
- [react-router-config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config)
- [redux](https://github.com/reduxjs/redux)
- [react-helmet](https://github.com/nfl/react-helmet)

## Setup

```
  $ yarn dev # inside the `server` folder -> http://localhost:3000
```

## Paths
 - `http://localhost:3000/users`
 - `http://localhost:3000/admins`
 - See [Routes](https://github.com/MBing/SSR-React/blob/master/server/src/client/Routes.js).

## Improvements
 - Add spinner on Loading iso text
 - Add some actual content iso loading from 3rd party api
 - ...
 
## Note
 - This is a server only for rendering, it is not a good idea to have your api on the same server!
 - You could add another `api` server here and use that for ease of use or host your api elsewhere
 - Update [headers](https://github.com/MBing/SSR-React/blob/master/server/src/index.js#L15) when you want to use another domain than the one you host your api on.
