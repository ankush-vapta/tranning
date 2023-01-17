

let oldObject = { name: "Dhanush", age: 24, sex: "Male", education: "Btech" };
let newObject = { name: "Dhanush kumar S", age: 23, sex: "Male" };

function update(){

    let data = Object.keys(oldObject);
    console.log({...oldObject , ...newObject,age:77})
}
// update();


function getMobile(manufacturer , model) {
    return {manufacturer:manufacturer , model} 
    
 }
 console.log(getMobile("Samsung", "Galaxy", "2020"))