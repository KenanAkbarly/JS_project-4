// Question 46
const myArray = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3];
const map = myArray.map(element =>{
    return element
})
//console.log(map)
// Question 47

const myStringArray = ['salam','men','Kenan','adinizi','deyin','zehmet','olmasa'];
const stringJoin = myStringArray.join('')
//console.log(stringJoin)

// Question 48

const differentZeroArray = [1,2,3,0,5,4,2];

const powElementForeach = differentZeroArray.filter(element=>{
    if(element >0)
    return element
})
const powelementReduce = powElementForeach.reduce((a,b)=> a*b,1)
//console.log(powelementReduce)

// Question 49

const negativeArray = [1,2,3,4,-56,-3,23,34,-99,5,22,78,56];

const negativeMap = negativeArray.map(element => element<0 ? element*(-1):element)
//console.log(negativeMap)

// Question 50

const sortElement = negativeArray.sort((a,b)=> a-b)
//console.log(sortElement)

// Question 51 

function findArrayElement(array,element){
   const sortElement = array.sort((a,b)=>{
    if(element >0){
        return a-b;
    }else if( element < 0){
        return b-a;
    }
   })
   return sortElement
}

//console.log(findArrayElement(negativeArray,1))
//console.log(findArrayElement(negativeArray,-1))

// Question 52
// const deleteNegativeElement = negativeArray.filter(element => element >0)
//console.log(deleteNegativeElement)

// Question 53
const array = [1,2,3,5,3,6,7,2,5,6,8,4,4,34,5,67,7,32,5,57]
const uniqueElement = array.filter((element,index)=>{
    return array.indexOf(element) === index
});
//console.log(uniqueElement)

// Question 54

const users = [
    {
        fullName:'Marta Argerich',
        age:81,
        gender:'Female'
    },
    {
        fullName:'Claudio Arrau',
        age:88,
        gender:'Male'
    },
    {
        fullName:'Clara Schumann',
        age:76,
        gender:'Female'
    },
    {
        fullName:'Ludwig van Beethoven',
        age:56,
        gender:'Male'
    }
]
// const values1 = users.map(element=>{
//     return element.fullName
// })
//console.log(values1)
// Question 55

const femaleValue = users.filter(element=>{
if(element.gender === 'Female'){
    return element.fullName
}

})
console.log(femaleValue)
const maleValue = users.filter(element=>{
if(element.gender === 'Male'){
    return element
}

})
console.log(maleValue)

// Question 56
const values1 = users.filter(element=>{
    if(element.age >20){

        return element.fullName
    }
})
console.log(values1)

// Question 57
const sortAgeUsers = users.sort((a,b)=> a.age-b.age)
console.log(sortAgeUsers)