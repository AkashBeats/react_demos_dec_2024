let list =[10,20,30,40]

 list.map((eachElement,idx)=>{
    console.log(eachElement)
    // console.log(idx)
 })

 let mappedList=list.map((eachElement,idx)=>{

    return eachElement *2
 })

 console.log(mappedList)

 const createMap =(eachElement,idx)=>{
       return eachElement *3
 }

 let anotherMap =list.map(createMap)

 console.log(anotherMap)