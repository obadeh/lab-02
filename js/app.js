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

let container = $('<section></section>');
container.addClass('container')



Horn.prototype.render=function(){
 // Create a new empty div tag
 let hornOutput = $('<div></div>');
 hornOutput.addClass(this.keyword);

// clone (copy) the html from inside the photo-template
let template = $('#photo-template').html();

// Add the template to the output div
hornOutput.html( template );

// Put the data in
hornOutput.find('h2').text( this.title );
hornOutput.find('img').attr('src', this.image_url);
hornOutput.find('p').text(this.description);

$('main').append(container);
$('.container').append(hornOutput);



};

function renderOption(){
    let options=[];
    let option2=[];
    Horn.all.forEach((val)=>{
        options.push(val.keyword)
        option2.push(val.title)
    })
    let unique = [...new Set(options)];
    console.log(unique);
    unique.forEach((val)=>{$('#Keyword').append(`<option>${val}</option>`)})
    option2.forEach((val)=>{$('#Title').append(`<option>${val}</option>`)})

}

$('#Keyword').on('change',function(){
    $('div').hide();
    let selected= $(this).val();
    $(`.${selected}`).show();
    console.log('selected : ', selected);
    
})

$('#Title').on('change',function(){
    $('div').hide()
    let filterd= $(this).val()

    let fil= Horn.all.filter((value)=>{
        return value.title===filterd;
    })
    $(`.${fil[0].keyword}`).show()
console.log('fil : ', fil[0].keyword);
    console.log(filterd)
    // $(`.${selected2}`).show()
    // console.log('selected : ', selected2);
    
})

renderPg1();
$('#pg1').on('click',renderPg1)
function renderPg1(){
    console.log('pg1 clicked');
    $('div').remove();
    $('option').remove();
    Horn.all=[];

$.get('/data/page-1.json').then(data=>{
    data.forEach(value => {
    let hornss= new Horn(value.image_url,value.title,value.description,value.keyword,value.horns) 
    hornss.render()       
    });
}).then( () => renderOption() ).then(()=>renderTitle())
}

$('#pg2').on('click',renderPg2)
function renderPg2(){
    console.log('pg2 clicked')
    $('div').remove()
    $('option').remove();

    Horn.all=[];

$.get('/data/page-2.json').then(data=>{
    data.forEach(value => {
    let hornss= new Horn(value.image_url,value.title,value.description,value.keyword,value.horns) 
    hornss.render()       
    });
}).then( () => renderOption() )
}