'use strict';

Horn.all=[];
function Horn(image_url,title,description,keyword,horns){

    this.image_url=image_url,
    this.title=title,
    this.description=description,
    this.keyword=keyword,
    this.horns=horns,
    Horn.all.push(this)
}

$.get('/data/page-1.json').then(data=>{
    data.forEach(value => {
     new Horn(value.image_url,value.title,value.description,value.keyword,value.horns)        
    });
})
console.log('Horn.all : ', Horn.all);



let container = $('#photo-template');
$('#photo-template').append("<h1>hi</h1>");
    $('#photo-template').append(`<img src="" alt="">`);

$( document ).ready( function(){
Horn.all.forEach((value)=>{console.log('value : ', value);})
})

for (let i = 0; i < Horn.all.length; i++) {
    console.log(' Horn.all: ',Horn.all[i].title );
    
}
let arr=[1,2,3,4,5];
arr.forEach((value)=>{console.log('value : ', value);})