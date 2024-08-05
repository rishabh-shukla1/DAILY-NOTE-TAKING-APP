
// input
let title=document.getElementById('title')

// ul

let list=document.getElementById('list')


//button 

let button=document.getElementById('btn')


button.addEventListener('click',function()
{

    //  take text 

    let value=title.value;

    // create a list

    let li=document.createElement('li')

    li.innerText=value

    //add to the unordered list

    list.appendChild(li);


    //input clear

    title.value=''

    // remove the li  that has been clicked on 

    li.addEventListener('click',function()
{
    li.remove();

})





    

})









