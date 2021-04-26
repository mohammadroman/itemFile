const input = document.querySelector("#input");


input.addEventListener("keyup",function() {

document.querySelector("h1").innerHTML = input.value;
    
});




document.querySelector("#btn").addEventListener( function() {

    var x = document.querySelector("#input").value;
    var len = x.length;
    console.log(len);

if (len <= 10) {
    document.querySelector("small").innerHTML = "right password";
}
document.querySelector("small").innerHTML = "wrong password";
    });
    