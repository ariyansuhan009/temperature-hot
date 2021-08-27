var button = document.getElementById('button');
var inputValue = document.getElementById('inputValue');
var Name = document.getElementById('name');
var desc = document.getElementById('desc');
var temp = document.getElementById('temp');

button.addEventListener('click', function(){
    //myKey = "aa25e594a9a8031320189b8b9b67f619";
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=aa25e594a9a8031320189b8b9b67f619')

    .then(res => res.json())
    .then(data => {

        /*
        document.getElementById('name').innerText = data.name;
        document.getElementById('temp').innerText = data.temp;
        document.getElementById('desc').innerText = data.desc;
        */
        
        var nameValue = data['name'];
        var temp = data.temp ;//['temp'];
        var descValue = data['desc'];

        Name.innerText = nameValue;
        temp.innerText = tempValue;
        desc.innerText = descValue;
        

    })


    .catch(err => alert('Wrong City name!'))
})