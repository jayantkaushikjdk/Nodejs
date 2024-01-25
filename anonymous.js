function parentFuntion(name, callback){
    setTimeout(callback,1000);
    console.log("Hey "+name);
}

parentFuntion("Random String", function(){
    console.log("Hey I am callback");
});