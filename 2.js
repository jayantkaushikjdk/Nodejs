function ex(){
    if(true){
        var functionScopedVar="I function-scoped";
        let functionScopedVa="I function-block scoped";
        const functionScopedV="I function-block scoped";
    }
    console.log(functionScopedVar);
    console.log(functionScopedVa);
    console.log(functionScopedV);
}
ex();

