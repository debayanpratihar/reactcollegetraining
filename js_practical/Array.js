var arr=[100,200,300,400,500]
console.log(arr)
console.log(arr[0])
//ADD A ELEMENT IN LAST INDEX

arr.push(600)
console.log(arr)

//ADD FIRST ELEMENT IN ARRAY

arr.unshift(50)
console.log(arr)

//REMOVE THE LAST ELEMENT

arr.pop()
console.log(arr)

//REMOVE THE FURST ELEMENT

arr.shift()
console.log(arr)

//REMOVE ANY POSTITON

arr.splice(2,1)
console.log(arr)

//ADD A ELEMENT IN PARTICULAR POSITION

arr.splice(2,0,700)
console.log(arr)

//FIND OUT RANGE OF VALUE FOM AN ARRAY

var newArray=arr.slice(2,4)
console.log(newArray)

//foreach()

console.log(arr)
arr.forEach(function(element,index){
    console.log(index,element)
})

//map() ruturn a value { reutrn a new array}

var newArray1=arr.map(function(element,index){
    return element*10
})
console.log(newArray1)

//filter() also return a new value where store the values

var newArray2=arr.filter(function(element,index){
    return element>200
})
console.log(newArray2)