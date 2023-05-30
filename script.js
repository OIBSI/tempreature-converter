document.getElementById('convert').onclick =convTemp;

function convTemp() {

    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;
    var kelvin=document.getElementById("kelvin").value
    if (fahrenheit != '') {
         celsius = (parseFloat(fahrenheit) -32) /1.8;
    } else if(celsius='') {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }else{
        celsius=(parseFloat(kelvin)-273.15);
    }
     

    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
    document.getElementById('kelvin').value = parseFloat(kelvin).toFixed(1);
}

