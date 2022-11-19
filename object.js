var student = {
    "name" : "Atishay",
    "Roll ME" : 200110022,
    "subject" : "meta",
};

var employee = {
    "name" : "radha",
    "income" : 0,
     12 : "baby",
};

function checkmethod(check){
    if(employee.hasOwnProperty(check)){
        return true;
    }
    return false;
}
employee.age=4
delete employee.age
console.log(checkmethod("name"))
console.log(employee.age)
console.log(student["Roll ME"])
console.log(employee[12])
console.log("A")

