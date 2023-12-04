//localStorage.setItem('itemarr',null);
//const oldarr=localStorage.getItem('itemarr')
// localStorage.setItem('itemarry',JSON.stringify(oldarr))
const arr=JSON.parse(localStorage.getItem('itemarr'));
console.log(arr);
// if(arr!==null){
//     // for (let color of colors) {
//     //     console.log(color);
//     //   }

//const numbers = [65, 44, 12, 4];
arr.forEach(myFunction);

function myFunction(data) {
    console.log((data[0]));
    const dynamicDiv = document.getElementById('itemlist')
    //console.log(itemboxcontent)
    const headitem = document.createElement('li');
    headitem.textContent = data[0];
    const uitem = document.createElement('ul');
    const crossitem=document.createElement('div');
    const cross=document.createElement('div');
    cross.setAttribute('class', 'cross');
    cross.innerHTML='X'
    crossitem.setAttribute('class', 'crossitem');
    crossitem.appendChild(cross);
    crossitem.appendChild(headitem);
    const item = document.createElement('li');
    item.textContent=data[1];
    uitem.appendChild(item)
    headitem.appendChild(uitem)
    dynamicDiv.appendChild(crossitem)



}
    // for(let data in arr){
    //     //for(let d in data){
    //     console.log((data[0]));
    //     //}
    // }
//}

function additem(){
    const poldarr=JSON.parse(localStorage.getItem('itemarr'));
    //console.log(localStorage.getItem('username'))
    const itemheadcontent = document.getElementById('itemhead').value;
    const itemboxcontent = document.getElementById('itembox').value;

    const dynamicDiv = document.getElementById('itemlist')
    //console.log(itemboxcontent)
    const headitem = document.createElement('li');
    headitem.textContent = itemheadcontent;
    const uitem = document.createElement('ul');
    
    


    const crossitem=document.createElement('div');
    const cross=document.createElement('div');
    cross.setAttribute('class', 'cross');
    cross.innerHTML='X'
    crossitem.setAttribute('class', 'crossitem');
    crossitem.appendChild(cross);
    crossitem.appendChild(headitem);

    const item = document.createElement('li');
    item.textContent=itemboxcontent;
    uitem.appendChild(item)
    headitem.appendChild(uitem)
    dynamicDiv.appendChild(crossitem)
    document.getElementById('itembox').value=''
    document.getElementById('itemhead').value=''
    cross.addEventListener('click', function() {
        crossitem.remove()
    });
    if(poldarr===null){
        const newarr=[[itemheadcontent,itemboxcontent]]
        const strarr=JSON.stringify(newarr)
        console.log(strarr)
        localStorage.setItem('itemarr',strarr);
        console.log(1);
    }else{
        
        console.log(2);
        poldarr.push([itemheadcontent,itemboxcontent]);
        //console.log(oldarr)
        localStorage.setItem('itemarr',JSON.stringify(poldarr));
    }
    console.log(localStorage.getItem('itemarr'))

}
// const crosses=document.getElementsByClassName('cross');
// for(var i=0;i<crosses.length;i++){
//     crosses[i].addEventListener("click", function(){ alert("Hello World!"); });
// }
// document.querySelectorAll('.cross').forEach(function(closeButton) {
//     closeButton.addEventListener('click', function() {
//         alert('Close button clicked!');
//     });
// });

$(document).ready(function(){
    $("#itemlist").on('click', '.cross', function(){
        $(this).parent().remove();
        var oarr=JSON.parse(localStorage.getItem('itemarr'));
        var content=$(this).parent().find('li li').last().text();
        oarr = oarr.filter(function(item) {
            return item[1] !== content
        });
        localStorage.setItem('itemarr',JSON.stringify(oarr));
        console.log(localStorage.getItem('itemarr'))
    });
});





    // let listContainer = document.getElementById("itemlist");
    // let listItem = document.createElement("li");
    // listItem.textContent = 'head';
    // let sublist = document.createElement("ul");
    // let subListItem = document.createElement("li");
    // subListItem.textContent = 'item'
    // sublist.appendChild(subListItem);
    // listItem.appendChild(sublist);
    // listContainer.appendChild(listItem);

// function additem() {
//     const itemheadcontent = document.getElementById('itemhead').value;
//     const itemboxcontent = document.getElementById('itembox').value;
//     console.log(itemboxcontent);
//     const newitem = document.createElement('li');
//     newitem.textContent = itemheadcontent;
//     const dynamicDiv = document.getElementById('itemlist');
//     dynamicDiv.appendChild(newitem);
//     document.getElementById('itembox').value = '';
//     document.getElementById('itemhead').value = '';
// }
