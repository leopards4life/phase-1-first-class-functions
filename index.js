function receivesAFunction(callbackFunction) {
    callbackFunction();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("I have a name!")
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am anonymous.")
    }
}