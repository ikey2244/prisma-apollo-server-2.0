<h1 align="center">Welcome to prisma-apollo-server2.0 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/ikey2244/prisma-apollo2#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/ikey2244/prisma-apollo2/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/ikey2244/prisma-apollo2/blob/master/LICENSE">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" target="_blank" />
  </a>
</p>

> Prisma and Apollo Server boilerplate

### 🏠 [Homepage](https://github.com/ikey2244/prisma-apollo2#readme)

## Install

```sh
npm install
```

## Usage

1. cd into prisma folder
```sh
cd prisma
```
2. start docker
```sh
docker-compose up -d 
```
3. create an .env file in the root of your directory and paste what is below
```
PRISMA_ENDPOINT=http://localhost:4466/
PORT=4000
```
(For Windows)
```
PRISMA_ENDPOINT=http://192.168.99.100:4466/
PORT=4000
```
4. deploy datamodel to prisma server
```sh
cd ..
```
```sh
prisma deploy
```

5. start node server
```sh
npm start
```
Prisma endpoint @ http://localhost:4466/

Node endpoint @ http://localhost:4000/

## Example Mutations
create a user
```graphql
mutation {
  createUser(
    data: {
      name: "Isaac"
    }
  ) {
    id
    name
  }
}
```
create a post and attach a user
```graphql
mutation {
  createPost(
    data: {
      title: "Isaacs posts"
      body: "cool freaking post"
    }
    id: "ck06qsygg007t0798q8dmy757" <-- user id
  ) {
    title
    body
    author {
      id
      name
    }
  }
}
```

## Example Queries

all users and all posts
```graphql
{
  users {
    name
    id
    posts {
      title
      body
    }
  }
}
```
all posts and all authors
```graphql
{
  posts {
    body
    title
    author {
      id
      name
    }
  }
}
```
specific users posts
```graphql
{
  user(
    id: "ck06qsygg007t0798q8dmy757"
  ) {
    name
    posts {
      title
      body
    }
  }
}
```
specific post and user associated
```graphql
{
  post(
    id: "ck06qxivv00ae07987baof3xk"
  ) {
    title
    body
    author {
      name
    }
  }
}
```

## Author

👤 **Isaac Weber**

* Github: [@ikey2244](https://github.com/ikey2244)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ikey2244/prisma-apollo2/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Isaac Weber](https://github.com/ikey2244).<br />
This project is [ISC](https://github.com/ikey2244/prisma-apollo2/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
