$(document).ready(function(){
   var text_max = 199;
    $('#feedback').html(text_max + 'Characters remaining');
    
    $('#textarea').keyup(function(){
        var text_length = $('#textarea').val().length;
        var text_remaining = text_max - text_length;
        
        $('#feedback').html(text_remaining + 'Characters remaining');
    });
});