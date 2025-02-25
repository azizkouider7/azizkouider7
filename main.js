let tital = document.getElementById('title');
let prise= document.getElementById('prise');
let texses = document.getElementById('texses');
let discount = document.getElementById('discount');
let ads = document.getElementById('ads');
let total = document.getElementById('total');
let count =document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let temp;
let mode = true;
let mod = "title";

//functin sarch
function getsearchmod(id){
    let serch = document.getElementById('serch');
   
    if (id == 'serchbytitle'){
mod = 'serchbytitle';
console.log(serch.Placeholder = 'serch by title');
serch.placeholder = 'serch by title';
}else{
mod = 'serchbycategory';
serch.placeholder = 'serch by category';

    } 
    serch.focus();
    serch.value = '';
showTable();

}
//sarchcore 
function sarchcore(value){
    
    let table = '';
    

    if (mod == 'serchbytitle') {
    for (let i = 0; i < newElement.length;i++){    
        if(newElement[i].title.toLowerCase().includes(value)){
            table += `<tr>
            <th>${i}</th>
            <td>${newElement[i].title}</td>
            <td> ${newElement[i].prise}</td>
            <td> ${newElement[i].texses}</td> 
            <td>${newElement[i].discount}</td> 
            <td>${newElement[i].ads}</td>
            <td> ${newElement[i].total}</td> 
            <td>${newElement[i].category}</td>
            <td><button onclick="updat(${i})"id="updat">updat</button></td>
            <td><button onclick="delet_data(${i})" id="delete">delete</button></td>
            </tr>`; 
        }
    } 
    }else 
    {
        console.log('serch by category');

        for (let i = 0; i < newElement.length;i++){    
            if(newElement[i].category.toLowerCase().includes(value)){
                table += `<tr>
                <th>${i}</th>
                <td>${newElement[i].title}</td>
                <td> ${newElement[i].prise}</td>
                <td> ${newElement[i].texses}</td> 
                <td>${newElement[i].discount}</td> 
                <td>${newElement[i].ads}</td>
                <td> ${newElement[i].total}</td> 
                <td>${newElement[i].category}</td>
                <td><button onclick="updat(${i})"id="updat">updat</button></td>
                <td><button onclick="delet_data(${i})" id="delete">delete</button></td>
                </tr>`; 
            }
        }
    
}
document.getElementById('tbody').innerHTML = table;
showTable();

}


//getfunctin 
function getotal(){
    if(prise!=''){
    let result=(+prise.value + +count.value + +ads.value + +discount.value ) - +texses.value;
    total.innerHTML = result;
    total.style.background='green';
    
    }
else{

    total.style.background = 'red';
}

}


let newElement ;
//create element
if(localStorage.product != null){
newElement = JSON.parse(localStorage.product);
}else{
 newElement = [];
}
show();
submit.onclick =function()
{
    
    
 
    
    let newpro = {
        title: title.value.toLowerCase(),
        prise: prise.value.toLowerCase(),
        texses: texses.value.toLowerCase(),
        discount: discount,
        ads: ads.value.toLowerCase(),
        total: total.innerHTML,
        count: count.value.toLowerCase(),
        category: category.value.toLowerCase(),
     }
     if(mode == true){
        if(tital.value.length!=0&prise.value.length!=0&tital.value.length!=0&texses.value.length!=0&discount.value.length!=0&ads.value.length!=0&count.value.length!=0&category.value.length!=0){

        
        if (newpro.count > 0) {
            for (var i = 0; i < newpro.count; i++){
              newElement.push(newpro);
            }

        }else{
            alert('gev me  un coun  >0');
    
    }    

         //save in local storag
    
       
       
       
        }else{
            alert('please fill all field');
     }
    }else{
        console.log(temp);
newElement[ temp ] = newpro;
mode = false;
submit.innerHTML = 'create';
     }

     localStorage.setItem('product',  JSON.stringify(newElement));
     show();
     
     
    
    }
    

  
 
   

//clear data in may input
function clear(){
    title.value = '';
    prise.value = '';
    texses.value = '';
    discount.value = '';
    ads.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';

}

//red
function show(){
    
    let table = '';
    for (let i = 0; i < newElement.length; i++) {
       

    
    table += `<tr>
    <th>${i}</th>
    <td>${newElement[i].title}</td>
    <td> ${newElement[i].prise}</td>
    <td> ${newElement[i].texses}</td> 
    <td>${newElement[i].discount}</td> 
    <td>${newElement[i].ads}</td>
    <td> ${newElement[i].total}</td> 
    <td>${newElement[i].category}</td>
    <td><button onclick="updat(${i})"id="updat">updat</button></td>
    <td><button onclick="delet_data(${i})" id="delete">delete</button></td>
    </tr>`;
   
    }
    document.getElementById('tbody').innerHTML = table;
    //condistion for  see boutoun  delet all
    let dlet_all = document.getElementById('delete all');
if (newElement.length > 1) {
    dlet_all.innerHTML = '<button onclick="delet_all()">delete</button>';
}else {
    dlet_all.innerHTML = '';

}
}
//delrt data
function delet_data(i){
    newElement.splice(i,1);
    localStorage.setItem('product',  JSON.stringify(newElement));
    
    show();
   
}
//delet all


function delet_all(){
    localStorage.clear();
    newElement.splice(0);
    show();
}
//updat data
function updat(i){
    tital.value=newElement[i].title;
    prise.value=newElement[i].prise;
    texses.value=newElement[i].texses;  
    discount.value=newElement[i].discount;
    ads.value=newElement[i].ads;
    category.value=newElement[i].category;
    getotal();
    count.style.display="none";
    mode = false;
submit.innerHTML = 'updat';
scrollTo({
    top: 0,
    behavior: 'smooth'
})


    temp = i;
 

  
}

