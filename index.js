function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction () {
    return(function a() { console.log("spam")});
}

function returnsAnAnonymousFunction () {
    return function() {console.log("sushi")}
}