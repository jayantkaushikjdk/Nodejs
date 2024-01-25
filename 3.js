var a="I am global";
function ex(){
    var a="I am local";
    console.log(a);
}
console.log(a);
ex();