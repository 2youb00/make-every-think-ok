let makebtn=document.querySelector('.button');
let yesbtn=document.querySelector('.yes');
let nobtn=document.querySelector('.no');
let loaderBar=document.querySelector('.loaderBar');
let body=document.querySelector('body');
let discriptoin=document.querySelector('.discriptoin');
let popup=document.querySelector('.modal');
makebtn.addEventListener('click',()=>{
loaderBar.classList.remove('display-none');
makebtn.classList.add('display-none');
body.classList.add('filter');
setTimeout(()=>{
discriptoin.innerHTML= 'Sending waves of goodness to the person is in progress....'; },1500);
setTimeout(()=>{
discriptoin.innerHTML= 'Initiating a stream of good vibes is in progress....'; },3000);
setTimeout(()=>{
discriptoin.innerHTML= 'Reset all old settings is in progress....'; },4500);
setTimeout(()=>{
popup.classList.remove('display-none');
loaderBar.classList.add('display-none');
},6100);

})
