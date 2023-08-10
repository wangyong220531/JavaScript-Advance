function myModule() {
    var msg = "My MSG"
    function doSomething() {
        console.log("doSomething() " + msg.toUpperCase())
    }
    function doOtherthing() {
        console.log("doOtherthing() " + msg.toLowerCase())
    }
    return {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }
}


