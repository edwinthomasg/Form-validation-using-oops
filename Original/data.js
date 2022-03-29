var a;
console.log(a)
var b = null;
console.log(typeof b)

let user = {
    name:"Edwin",
    age:21,
    display:function(){
        console.log(`${this.name} and ${this.age}`)
    }
}

class User{
    constructor(name){
        this.name = name
    }
}
let ob1 = new User("Ed")
let ob2 = new User("AK")
console.log(ob1.name,ob2.name)
ob1.age = 21
console.log(ob2.age)
User.prototype.age = 21

function show(){
    let title = "js"
     function dis(){
         console.log(title)
     }
     return dis
}
let result = show()
result()


let arr = [1,2,3,4,5,6,7,8,9,10]
const res = arr.filter((values)=> values > 5
)
console.log(res)

function def(a,b=1){
    console
}
def(10,2)

class Bank{
    display(){
        console.log("Welcome Customer")
    }
}
class Hdfc extends Bank{

}
const hdfc = new Bank()
hdfc.display()










