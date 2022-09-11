
 var seletedproject ="";
 
function myFunction() {
  var selectedvalue = document.getElementById("selected");
 
   seletedproject =  selectedvalue.options[selectedvalue.selectedIndex].value;
const car = {
      "data": [
        { 
          "projectlanguage": "C#",
          "imagelink": 'https://www.pngfind.com/pngs/m/683-6834213_transparent-html-logo-png-png-download.png',
          "title": "1",
          "description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasratione vel inventore labore commodi modi quos culpa aut saepe!Alias!",
          "projectlink":"#"
        },
        { 
          "projectlanguage": "java",
          "imagelink": 'https://www.pngfind.com/pngs/m/683-6834213_transparent-html-logo-png-png-download.png',
          "title": "java",
          "description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasratione vel inventore labore commodi modi quos culpa aut saepe!Alias!",
          "projectlink":"#"
        },
        { 
          "projectlanguage": "C#",
          "imagelink": 'https://www.pngfind.com/pngs/m/683-6834213_transparent-html-logo-png-png-download.png',
          "title": "2",
          "description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasratione vel inventore labore commodi modi quos culpa aut saepe!Alias!",
          "projectlink":"#"
        },
        { 
          "projectlanguage": "java",
          "imagelink": 'https://www.pngfind.com/pngs/m/683-6834213_transparent-html-logo-png-png-download.png',
          "title": "java",
          "description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasratione vel inventore labore commodi modi quos culpa aut saepe!Alias!",
          "projectlink":"#"
        }
      ]};

      document.getElementById("project-card").innerHTML ="";
  if(seletedproject === "all"){
  
    for (let i = 0 ; i < car.data.length ; i++) {
   
       document.getElementById("project-card").innerHTML += "<div class='column'> <div class='card'><img src='"+ car.data[i].imagelink+"' alt='greeny-earth'class='project-pic'/><h3 class='project-title'>"+ car.data[i].title+"</h3><p class='project-details'>"+ car.data[i].description+"</p><a href='"+ car.data[i].projectlink+"' target='_blank' class='project-link'> Visit Link </a></div></div>";
    }
  }
  else{
    for (let j = 0 ; j < car.data.length  ; j++) {
    
      if(seletedproject  == car.data[j].projectlanguage){
      
       document.getElementById("project-card").innerHTML += "<div class='column'> <div class='card'><img src='"+ car.data[j].imagelink+"' alt='greeny-earth'class='project-pic'/><h3 class='project-title'>"+ car.data[j].title+"</h3><p class='project-details'>"+ car.data[j].description+"</p><a href='"+ car.data[j].projectlink+"' target='_blank' class='project-link'> Visit Link </a></div></div>";
      }
     }
    
  }}