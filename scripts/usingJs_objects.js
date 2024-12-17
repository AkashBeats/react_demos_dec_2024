// Using Constructor function
class Manager{
    constructor(role,location){
        this.role=role
        this.location=location
    }
    toString=function(){
        return this.role + this.location
    }
}

let harish = new Manager(101,'Harish')

console.log(harish.toString())
var Employee = function (empId, empName) {
  this.empId = empId;
  this.empName = empName;

  this.toString = function () {
    return this.empId ;
  };
};

//using Object literal

var Staff = {
  id: 101,
  firstName: "Ramesh",
  bloodGroup: "bpos",
  toString: function(){
    return this.firstName + this.bloodGroup
  },
};

// Using Prototype and extending



let ram = new Employee(101, "Ramesh");

Employee.prototype.salary = 5000
Employee.prototype.getSalary =function(){
    return this.salary
}
let shyam = new Employee(102,"Shyam")

console.log(`Shyam Salary ${shyam.salary}`)
console.log(shyam.getSalary())
console.log(ram.toString());
console.log(ram.empName);
console.log(`ram salary ${ram.salary}`)
console.log(Staff)
console.log(Staff.toString());
