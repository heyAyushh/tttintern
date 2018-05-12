# tttinternweb

## Structure

this repo contains files of ```Vue``` of frontend to take input n and serve a table of top n words.  
  
also repo/Azure-function consists a serverless nodejs functions that downloads  
the txt file. calculates a word frequency and returns a json with sorted top n words.  

repo/app consists minified vue build files with a nodejs express server to host the website.  

## Frontend 

Front end components consits of ```Element ui``` buttons and inputs.  
```AXIOS``` modules to send a get request to api.  
```vue-data-table``` renders table according to json data.  
```flat-surface-shader``` renders a reactive background.  
  


## Azure functions API

This is the serverless Http triggered code.  
```Axios``` module to send get request.  
```lodash``` module to sort Json, reverse Json and take top n Json data.  

## Backend

Backend of the website of was made using ```Express``` module that serves a static website.

## Testcases

### n=1
![Input](https://github.com/heyAyushh/tttintern/blob/master/screenshots/testcase1.png "n=1")

res
![response](https://github.com/heyAyushh/tttintern/blob/master/screenshots/testcase1res.png "n=1")
api res
![API](https://github.com/heyAyushh/tttintern/blob/master/screenshots/testcaseapi1.png "n=1")

## n=2 
api res
![API](https://github.com/heyAyushh/tttintern/blob/master/screenshots/testcase2api.png "n=2")
2 res
![input = 2 response](https://github.com/heyAyushh/tttintern/blob/master/screenshots/testcase2res.png "n=2")

## n=12
12 api
![API](https://github.com/heyAyushh/tttintern/blob/master/screenshots/testcase12api.png "n=12")
12 res
![response n = 12](https://github.com/heyAyushh/tttintern/blob/master/screenshots/testcase12res.png "n=12")

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
