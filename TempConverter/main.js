var one = document.querySelector('.field');
var button = document.querySelector('.getButton');

button.addEventListener('click', function(){
    var first = parseInt(one.value);
    var result = (first - 32) / 1.8;
    if (first !== NaN){
//        alert(result);
        document.getElementById('result').innerHTML = 'Celcius - ' + result;
    }
    else{
        alert("You need to enter a value");
    }
});

