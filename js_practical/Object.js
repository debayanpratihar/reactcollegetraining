var product={
    pid:'p1',
    pname:'TV',
    pqty:5,
    price:2500
}
console.log(product)
console.log(product.pid,product.pname,product.pqty)
//ADD ANOTHER ELEMENTS IN THE EXISTING OBJECT

product.company='SAMSUNG'
console.log(product)

//DELETE THE ELEMENTS IN OBJECT

delete product.company
console.log(product)

//UPDATE THE CONTENT OF ELEMENT IN OBJECT

product.pname='TAB'
console.log(product)

//NESTED OBJECT
var employee={
    emid:101,
    ename:'RUPSHA',
    desig:'MANAGER',
    address:{
        plotno:'AD10',
        streetnm:'UTTARPARA',
        pincode:'712232',
        area:{
            ps:'BIDHANNAGAR',
            dist:'HOOGHLY'
        }
    }
}
console.log(employee)
console.log(employee.ename, employee.desig, employee.address.plotno, employee.address.area.dist, employee.address.area.ps)
var products={
    pid:'p1',
    pname:'TV',
    pqty:5,
    price:2500,
    totalprice:function(){
        console.log(this.pqty*this.price)
    }
}
products.totalprice()