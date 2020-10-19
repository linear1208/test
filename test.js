

/*
const a = 2
const b = 3
const c = a*b
console.log(c);
*/
/*
const obj ={
    test(){
        return 'hello';
    },
}

console.log(obj.test());
*/
/*
for (let i=0;i<5;i++){
setTimeout(
    function(){
        console.log(i);
    },
    i*1000
)    
}
*/
/*
const nums = [1,2,3];
nums.shift();
nums.push(5);
console.log(nums);

nums.forEach(element => {
    console.log(element)
});

nums.splice(2,0,4);
console.log(nums);
*/
/*
const nums = [
    {name : 'a',age : 18},
    {name : 'b',age : 15},
    {name : 'c',age : 17},
]

nums.sort(function(a,b){
return a.age - b.age ;

})

nums.sort();
console.log(nums);
*/
const nums1 = [1,2,3];
const doubled = nums1.filter(
    function(elm){
        return elm % 2 === 1;
    }
)
console.log(doubled);


const sq = x => x*x;
console.log(sq(2));
console.log(sq(3));