const options = {weekday: 'long', month: 'long',day: 'numeric', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

function displayonfriday(){
    var date = new Date();
    var day = date.getDay()
    if (day != 5 ){
        document.getElementById("pancake").style.display = "none";
    }
}

displayonfriday();