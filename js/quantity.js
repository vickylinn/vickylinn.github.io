// /* gain minus */ 
// var jian=document.querySelector('.minus');
   
//    /* gain plus sign */ 
// var jia=document.querySelector('.plus');
    
// /* gain values */ 
// var number=document.querySelector('.operation .calculation span');
// console.log(number);


// jia.addEventListener('click',function(){
//     var add=number.innerHTML-0+1;
//     number.innerHTML=add; 
// })
// jian.addEventListener('click',function(){
//     if(number.innerHTML==0)return alert('You need to\nselect at least one item')
//     var down=number.innerHTML-0-1;
//     number.innerHTML=down; 
// })

// checkout
/* gain minus symbol */ 
var jian=document.querySelector('.minus');
   
   /* gain plus symbol */ 
var jia=document.querySelector('.plus');
    
/* gain values */ 
var number=document.querySelector('.main-main .main-main-footer span');
console.log(number);


jia.addEventListener('click',function(){
    var add=number.innerHTML-0+1;
    number.innerHTML=add; 
})
jian.addEventListener('click',function(){
    if(number.innerHTML==0)return alert('You need to\nselect at least one item')
    var down=number.innerHTML-0-1;
    number.innerHTML=down; 
})

// // individual display
//     /* gain plus symbol*/ 
// var jia=document.querySelector('.plus');

//     /* gain value */ 
// var number=document.querySelector('.main-body-box .main-body-left-box1 span');
// console.log(number);

//     /* gain minus symbol */ 
// var jian=document.querySelector('.minus');


// jia.addEventListener('click',function(){
//     var jiazhi=number.innerHTML-0+1;
//     number.innerHTML=jiazhi; 
// })
// jian.addEventListener('click',function(){
//     if(number.innerHTML==0)return alert('You need to\nselect at least one item')
//     var jianzhi=number.innerHTML-0-1;
//     number.innerHTML=jianzhi; 
// })