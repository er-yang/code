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

