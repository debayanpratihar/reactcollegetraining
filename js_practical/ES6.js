//SPEREAD OPERATOR
var obj1={
    id:101,
    nm:"AMAL",
    phno:'3345',
    email:'amal@gmail.com'
}
console.log(obj1)
//COPY OF ONE OBJECT TO ANOTHER OBJECT
var obj2={
    obj1,
    phno:'4444'
}
console.log(obj2)

//REST PARAMETER
function fn1(x,y){
    console.log(x)
    console.log(y)
}
fn1(10,20)
fn1(10,20,30,40)

function fn2(x,y,...data){
    console.log(x)
    console.log(y)
    console.log(data)
}
fn2(10,20)
fn2(10,20,30,40)

//DISTRUCTING OF OBJECT
var obj3={
    rollno:1,
    sname:'ANUP',
    sdept:'CSE',
    sem:'VITH'
}
console.log(obj3)
var{sname,sdept}=obj3
console.log(sname,sdept)

//LET VS VAR VS CONST
/*function test(){
    if(true){
        var x=25
        console.log(x)
    }
    console.log(x)
}*/

/*function test(){
    if(true){
        let x=25
        console.log(x)
    }
    console.log(x)
}*/

/*function test(){
    if(true){
        const x=25
        console.log(x)
        x=40
    }
    console.log(x)
}
test()*/

//AROW FUNCTION
function fn5(){
    console.log("NORMAL FUNCTION")
}
fn5()
const fn6=()=>{
    console.log("ARROW FUNCTION")
}
fn6()
//ARROW FUNCTION USING MAP() FILTER() FOREACH()
var arr=[100 ,200, 300, 400, 500, 600]
arr.forEach((element,index)=>{
    console.log(index,element)
})
var newArray1=arr.map(function(element,index){
    return element*10
})
var newArray1=arr.map(function(element,index){

})
var newArray1=arr.map((element,index)=>{
    return element*10
})
console.log(newArray1)
var newArray2=arr.filter(n=>n>200)
console.log(newArray2)
//PROMISE OBJECT
var promise=new Promise((resolve,reject)=>{
    var s1="AIEM"
    var s2="AIEM"
    if(s1==s2)
    {
        resolve()
    }
    else{
        reject()
    }
})
promise.then((res)=>{
    res="BOTH ARE EQUAL"
    console.log(res)
})
.catch((error)=>{
    error="NOT EQUAL"
    console.log(error)
})
