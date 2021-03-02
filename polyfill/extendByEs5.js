function SuperType(name) {
  this.name = name;
}
Super.prototype.sayName = function () {
  console.log(this.name);
}
function SubType(name) {
  Super.call(this, name);
  this.name = name;
}

function inhrite(sup, sub){
  let obj = Object.create(sup.prototype);
  obj.constructor = sub.constructor;
  sub.prototype = obj;
}
inhrite(SuperType, SubType);


// 组合式继承
function SuperType() {
  this.a = 1;

  this.c = function() {
    console.log('c');
  }
}

function SubType() {
  SuperType.call(this);
  this.a = 2;
}
SubType.prototype = new SuperType();

SubType.prototype.constructor = SubType;