
let need = new Promise((success, fail)=>{
    let a =45;

    if(a> 40){
        success("Yes this is successfull")
    }
    else if(a<40){
        console.log("I am less than 40");
    }
    else{
        console.log("I am 40");
    }
})

need.then(
    (value)=>{
        console.log(value);
        
    }
)