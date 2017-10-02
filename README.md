# chaiIssue
Reproduction of an issue with chai.should when running in a new context

### Installation
Clone this repository and execute the command :

```
npm install
```

### Run test
To run test execute the command :

```
node main.js
```

### Issue
The code fail with "Cannot read property 'be' of undefined"
Should has not been added to the prototype
