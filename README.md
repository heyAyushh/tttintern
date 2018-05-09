# tttinternweb

## Working

this repo contains files of ```Vue``` of frontend to take input n and serve a table of top n words.  
  
also repo/Azure-function consists a serverless nodejs functions that downloads  
the txt file. calculates a word frequency and returns a json with sorted top n words.  

repo/app consists minified vue build files with a nodejs express server to host the website.  

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
