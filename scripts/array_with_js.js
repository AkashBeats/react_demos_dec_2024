var obj = {};

obj.iterateWithArray = function (args) {
  args.forEach((element) => {
    console.log(element);
  });

  for(var i =0;i<args.length;i++){
    console.log(args[i])
  }
  console.log(i)

  for(let j =0;i<args.length;j++){
    console.log(args[j])
  }
 //  console.log(j) // it becomes undefined

};

/* Rest param */
obj.takeArrayArg =function(...args){
    console.log(args[0])
}


obj.takeValue = function(argOne,argTwo,argThree){
    console.log(argThree)
}

var nameList = ["anand", "baskar", "suresh"];

obj.iterateWithArray(nameList);

let nameOne ='Giri'
let nameTwo ='Shiv'
let nameThree='Nirmal'

obj.takeArrayArg(nameOne,nameTwo,nameThree)
// spread
obj.takeValue(...nameList)  // when you are calling function 

let firstList =['Chennai','Pune','Hyd']
let secondList =['Rome','Paris','NewYork']
//make one array with 6 elements

let combined =[...firstList,...secondList]

console.log(combined)

// Destructuring

let firstElement = nameList[0]
let secondElement =nameList[1]
let thirdElement =nameList[2]

const [first,...second]=nameList


console.log(first)
console.log(second)
//console.log(third)


var employee = {
    id:101,firstName:'Ramesh',bloodGroup:'bpos',toString:()=>firstName+','+bloodGroup
}
console.log(employee.id)

let {id,firstName,bloodGroup:bgrop,toString}=employee

console.log(bgrop)
// destructure employee
