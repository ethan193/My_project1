function repeatHello() {
    for (var i = 10; i >=0; i--) {
        console.log("Hello World");
    }
}

repeatHello();

function consoleLogChange() {
    console.log(document.getElementById("inputChange").value);
}

function doAddition() {
    console.log(
        parseInt(document.getElementById("var1").value) + parseInt(document.getElementById("var2").value)
    );
}  

function changeHeader() {
    document.getElementById("changeMe").innerHTML = "This is changed";
}