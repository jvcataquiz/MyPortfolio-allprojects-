const car = {
      "data": [
        {
          "imagelink": 'https://www.pngfind.com/pngs/m/683-6834213_transparent-html-logo-png-png-download.png',
          "title": "Greeny Earth",
          "description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasratione vel inventore labore commodi modi quos culpa aut saepe!Alias!",
          "projectlink":"#"
        },
        {
          "imagelink": "https://www.pngfind.com/pngs/m/683-6834213_transparent-html-logo-png-png-download.png",
          "title": "C# prject",
          "description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasratione vel inventore labore commodi modi quos culpa aut saepe!Alias!",
          "projectlink":"#"
        }
        ,
        {
          "imagelink": "https://www.pngfind.com/pngs/m/683-6834213_transparent-html-logo-png-png-download.png",
          "title": "C# prject",
          "description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasratione vel inventore labore commodi modi quos culpa aut saepe!Alias!",
          "projectlink":"#"
        },
        {
          "imagelink": "https://www.pngfind.com/pngs/m/683-6834213_transparent-html-logo-png-png-download.png",
          "title": "C# prject",
          "description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasratione vel inventore labore commodi modi quos culpa aut saepe!Alias!",
          "projectlink":"#"
        },
        {
          "imagelink": "https://www.pngfind.com/pngs/m/683-6834213_transparent-html-logo-png-png-download.png",
          "title": "C# prject",
          "description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasratione vel inventore labore commodi modi quos culpa aut saepe!Alias!",
          "projectlink":"#"
        }

        ,
        {
          "imagelink": "https://www.pngfind.com/pngs/m/683-6834213_transparent-html-logo-png-png-download.png",
          "title": "C# prject",
          "description":" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasratione vel inventore labore commodi modi quos culpa aut saepe!Alias!",
          "projectlink":"#"
        }
      ]};
      
      let text ="";
    for (let i = 0 ; i < car.data.length ; i++) {
    
      document.getElementById("project-card").innerHTML += "<div class='column'> <div class='card'><img src='"+ car.data[i].imagelink+"' alt='greeny-earth'class='project-pic'/><h3 class='project-title'>"+ car.data[i].title+"</h3><p class='project-details'>"+ car.data[i].description+"</p><a href='"+ car.data[i].projectlink+"' target='_blank' class='project-link'> Visit Link </a></div></div>";
     
    }
    
