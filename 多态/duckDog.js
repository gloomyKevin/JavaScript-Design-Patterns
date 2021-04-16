// bad
var  makeSound = function(animal) {
    if(animal instanceof Duck) {
        console.log("嘎嘎嘎")
    } else if(animal instanceof Dog){
        console.log("汪汪汪")
    }
}

function Duck() {}
function Dog() {}
makeSound(new Duck())
makeSound(new Dog())

// good
var makeSound = function(animal) {
    animal.sound()
}
// 注意，第一版的以下代码会出错
// function makeSound(animal) {
//     animal.sound()
// }

function Duck() {}
Duck.prototype.sound = function(){
    console.log("嘎嘎嘎-多态")
}
function Dog() {}
Dog.prototype.sound  = function(){
    console.log("汪汪汪-多态")
}

makeSound(new Duck())
makeSound(new Dog())
