//1 Assigned cats values
const cats=["Milo", "Otis", "Garfield"];
console.log(cats);

//used splice to destructively add a cat at the end of the array
cats.splice(3,0,"King")
console.log(cats)

//used splice to destructively add a cat at the beginning of the array
cats.splice(0,0,"Princess")
console.log(cats)

//used splice to destructively remove a cat at the end of the array
const removeLastCat= cats.splice(4)
console.log(cats)

//used splice to destructively remove a cat at the beginning of the array
const removeFirstCat=cats.splice(0,1)
console.log(cats)

//used slice to non-destructively add a cat at the end of the array
cats.push("Tom");
console.log(cats);

//used slice to non-destructively add a cat at the beginning of the array
cats.unshift("Whiskers")
console.log(cats);

//used splice to non-destructively remove a cat at the end of the array
const deletedcat1=cats.pop()
console.log(deletedcat1)
console.log(cats);

//used splice to destructively remove a cat at the beginning of the array
const deletedcat2=cats.shift()
console.log(deletedcat2)
console.log(cats);