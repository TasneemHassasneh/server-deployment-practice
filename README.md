# server-deployment-practice

### Testing the server-deployment

in order deliver app on GitHub out to customers i nedd to run three commands :
1. test
2. build
3. deploy

I can automate this entire process in the cloud by using a CI service like GitHub actions:

* Create workflows
    * node.js.yml
* in package.json
    * create test scripts:
        * "scripts": {
    "test": "jest --coverage"
  }     
* create text direectory folder:
    * __test 
        * server.test.js


### URLs:

1. [Deplyed app](https://server-test-hitu.onrender.com/)

2. [Github actions](https://github.com/TasneemHassasneh/server-deployment-practice/actions)

3. [pull request](https://github.com/TasneemHassasneh/server-deployment-practice/pull/2)
