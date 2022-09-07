 
document.addEventListener('DOMContentLoaded', () => {
 
    const selectDrop = document.querySelector('#allcountries');
    document.getElementById('weathericon').innerHTML = "<img src='https://api.openweathermap.org/img/w/04d.png' width='100px'>";
    // const selectDrop = document.getElementById('countries');
    fetch('https://restcountries.com/v3.1/all').then(res => {
    return res.json();
    }).then(data => {
    let output = "";
    data.forEach(country => {

        const { name } = country

      output += `<option value="${name.common}"> ${name.common}  </option>`;
    })
     
    selectDrop.innerHTML = output;
     
    }).catch(err => {
    console.log(err);
    })
     
    });


    const button = document.getElementById('buttons');
    button.addEventListener('click', () => {
        const selectedvalue = document.getElementById('allcountries');

        var value = selectedvalue.options[selectedvalue.selectedIndex].text;
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ value+'&appid=6b23c082a2ca2bcdc9fff6eed8a38279')
        .then(res => {
            return res.json();
            }).then(datadisplay
            ).catch(err => {
            console.log(err);
            })
             
            });
    

            const datadisplay=(weatherapi)=> {
                document.getElementById('MyFrame').innerHTML  = `${weatherapi.weather[0].description}`;
                // document.getElementById('weathericon').src = "https://api.openweathermap.org/img/w/" +  `${weatherapi.weather[0].icon}`+ ".png";

                document.getElementById('weathericon').innerHTML = "<img src='https://api.openweathermap.org/img/w/" +  weatherapi.weather[0].icon + ".png' width='100px'>";
                document.getElementById('countryname').innerHTML = `${weatherapi.name}`;
            
            }
        
     