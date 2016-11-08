// YOUR SCRIPTS

//GRID VIEW 
$('#grid').click( function(){
    
    //Remove ONLY 'list' class
    $('.cd-gallery').removeClass('list');
    //Add ONLY 'grid' class
    $('.cd-gallery').addClass('grid');
    
    console.log('Go Vote!');
    
});

//LIST VIEW 
$('#list').click( function(){
    
    //Remove ONLY 'grid' class
    $('.cd-gallery').removeClass('grid');
    //Add ONLY 'list' class
    $('.cd-gallery').addClass('list');
    
    console.log('Please!');
    
});