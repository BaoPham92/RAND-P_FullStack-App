## About

This is going to be an updated repo sandboxing / developing a FullStack application. 

I decided to do a more modern updated version from my last [repo](https://github.com/BaoPham92/GraphQL-ReactJS) of creating a FullStack app, I was attempting to use [GraphQL](https://graphql.org/) for [ReactJS](https://reactjs.org/) for a more concise and steamlined way or querying our API. I plan to use [Docker](https://www.docker.com/) at a later point to package our environment even though this is __MEANT__ to be a sandbox repository.

---

## Why use this stack? Why am I build a new repo apposed to finishing an incomplete repo?

Why then? Documentation as I have come to learn as approaching new methods, technologies, and stacks are ever changing. Having __PROPER__ documentation even if an old version / depreciated project, will eventually help to provide a more clear and concise answer on how to advance to newer methods or setups. __We ALL know__ what is like to have only a few guides and tutorials that are outdated, yet not everyone is always so interested in updating how today's current setup works. To put simply short, __"dependency hell"__. Because of such, it can make learning become misleading for other developers.

We have technologies such as [Docker](https://www.docker.com/) to thank for in assisting / preventing such unwanted learning curves.

---
## Tech Stack Used:
- [ReactJS](https://reactjs.org/)
- [NodeJS](https://nodejs.org/en/)
- [Apollo](https://www.apollographql.com/)
- [GraphQL](https://graphql.org/)
- [Prism](https://www.prisma.io/blog/introducing-prisma-1ff423fd629e)

---

## Instructions:

- Back-End
> 1. cd server folder & yarn install
> 2. yarn prisma deploy (Choose demo server (demo-eu1 or demo-us1))
> 3. yarn start
> 4. navigate to http://localhost:4000/ to see GraphQL Playground for querying & mutations.

- Front-End
> 1. cd view folder & yarn install
> 2. yarn start
> 3. navigate to http://localhost:3000/ to see the Front-End client.

---

## Progress

- Update - 02/14/2019:

> Here we will be implementing the Front-End aspect with [ReactJS](https://reactjs.org/) and [Apollo](https://www.apollographql.com/). In the previous repo I worked on the Back-End first due to prior knowledge of [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/). I eventually ran into problems of setting up due to outdated guides for the initial version of Apollo though.

> For the Back-End to supply temporary data for usage & setup, we will be using a [starter-server-package](https://codeload.github.com/howtographql/react-apollo/tar.gz/starter).

- Update - 02/18/2019:

> Here I have caught up with templating the Front-End part with [ReactJS](https://reactjs.org/) and [Apollo](https://www.apollographql.com/). Next I will attempt to restructure the Back-End so I can write authentications matching the middleware added for the Front-End of our client.

## Credits & Mentions:

- [Prisma Team](https://www.howtographql.com/)
> Thanks for providing a great resource on getting started with Apollo and GraphQL!