function parentFuntion(name, callback){
    callback();
    console.log("Hey "+name);
}
function random(){
    console.log("Hey I am callback");
}
parentFuntion("Random String", random);