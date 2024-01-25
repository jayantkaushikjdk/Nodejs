const parentFuntion=(name, callback)=>{
    setTimeout(callback,1000);
    console.log("Hey "+name);
}

parentFuntion("Random String", ()=>
    console.log("Hey I am callback")
);