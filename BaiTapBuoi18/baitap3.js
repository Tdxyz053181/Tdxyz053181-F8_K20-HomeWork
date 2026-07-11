const module = {
 x: 81,
 getX() {
 return this.x;
 }
};
const retrieveX = module.getX;
console.log(retrieveX());
