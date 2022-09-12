
 var seletedproject ="";
 
function myFunction() {
  var selectedvalue = document.getElementById("selected");
 
   seletedproject =  selectedvalue.options[selectedvalue.selectedIndex].value;
const car = {
      "data": [
        { 
          "projectlanguage": "C#",
          "imagelink": 'https://techworm.net/programming/wp-content/uploads/2018/07/ap550x55012x121transparentt-150x150.png',
          "title": "Contact Tracing App",
          "description":"An application that allows users to submit their necessary information and saves it to a text file is made using C#.net.",
          "projectlink":"https://github.com/jvcataquiz/Contact_Tracing"
        }, 
        { 
          "projectlanguage": "C#",
          "imagelink": 'https://techworm.net/programming/wp-content/uploads/2018/07/ap550x55012x121transparentt-150x150.png',
          "title": "Contact Tracing Viewer",
          "description":"An application that allows users to browse and display the existing information that their submitted in the Contact tracing App.",
          "projectlink":"https://github.com/jvcataquiz/ContactTracinUserViewer"
        },
        { 
          "projectlanguage": "C#",
          "imagelink": 'https://techworm.net/programming/wp-content/uploads/2018/07/ap550x55012x121transparentt-150x150.png',
          "title": "TicTacToe",
          "description":"An application that allows users to play Tictactoe against other user or  a computer.",
          "projectlink":"https://github.com/jvcataquiz/TICTACTOE"
        },
        { 
          "projectlanguage": "C#",
          "imagelink": 'https://techworm.net/programming/wp-content/uploads/2018/07/ap550x55012x121transparentt-150x150.png',
          "title": "Seven Segment",
          "description":"A application look likes seven segment created in C#.net and displaying real time.",
          "projectlink":"https://github.com/jvcataquiz/SevenSegment"
        },
        { 
          "projectlanguage": "C#",
          "imagelink": 'https://techworm.net/programming/wp-content/uploads/2018/07/ap550x55012x121transparentt-150x150.png',
          "title": "PDF Resume Creator",
          "description":"An application that allows users to submit their necessary information and generates resume from json file to pdf.",
          "projectlink":"https://github.com/jvcataquiz/PDF-RESUME-CREATOR"
        },
        { 
          "projectlanguage": "C#",
          "imagelink": 'https://techworm.net/programming/wp-content/uploads/2018/07/ap550x55012x121transparentt-150x150.png',
          "title": "Contact Tracing App QR Code",
          "description":"An application will automatically input the data when the camera scans a QR code and save it to a text file.",
          "projectlink":"https://github.com/jvcataquiz/CONTACT_TRACING_APP-QR_CODE-"
        },
        { 
          "projectlanguage": "C#",
          "imagelink": 'https://techworm.net/programming/wp-content/uploads/2018/07/ap550x55012x121transparentt-150x150.png',
          "title": "Scientific Calculator",
          "description":"An application created in C#.net with the functionality of standard scientific calculator.",
          "projectlink":" "
        },
        { 
          "projectlanguage": "C#",
          "imagelink": 'https://techworm.net/programming/wp-content/uploads/2018/07/ap550x55012x121transparentt-150x150.png',
          "title": "Bike Rental System",
          "description":"An application that rents out bicycles for short periods of time. This application allow user to add, create, delete, or update bikes, customers and users to the database.",
          "projectlink":" "
        },
        { 
          "projectlanguage": "C#",
          "imagelink": 'https://techworm.net/programming/wp-content/uploads/2018/07/ap550x55012x121transparentt-150x150.png',
          "title": "Weather App",
          "description":"This application allow users to input a city or country and display the weather forecast of the user's input.",
          "projectlink":"https://github.com/jvcataquiz/Weather-app-with-Api"
        },
        { 
          "projectlanguage": "java",
          "imagelink": 'https://www.techworm.net/programming/wp-content/uploads/2018/07/java-logo-150x150.jpg',
          "title": "Java Calculator",
          "description":"It is a simple java program that allow users to add, subract, multiply and divide. ",
          "projectlink":"https://github.com/jvcataquiz/Java-Fundamentals-with-java-output-/blob/master/Project1/src/calculator.java"
        },
        { 
          "projectlanguage": "java",
          "imagelink": 'https://www.techworm.net/programming/wp-content/uploads/2018/07/java-logo-150x150.jpg',
          "title": "Java Grade Converter",
          "description":"it is a program that dynamically averages all user's inputs before determining whether a user passed or failed.",
          "projectlink":"https://github.com/jvcataquiz/Java-Fundamentals-with-java-output-/blob/master/Project1/src/GradeConverter.java"
        },
         { 
          "projectlanguage": "javascript",
          "imagelink": 'https://techworm.net/programming/wp-content/uploads/2018/07/image_preview-150x150.png',
          "title": "FreecodeCamp Javascript",
          "description":"My collection of javascript exercises.",
          "projectlink":"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
        },
        { 
         "projectlanguage": "javascript",
         "imagelink": 'https://techworm.net/programming/wp-content/uploads/2018/07/image_preview-150x150.png',
         "title": "Javascript Exercises",
         "description":"My collection of javascript exercises part 2.",
         "projectlink":"https://github.com/jvcataquiz/Javascript-Exercises"
       }
      
      ]};

      document.getElementById("project-card").innerHTML ="";
  if(seletedproject === "all"){
  
    for (let i = 0 ; i < car.data.length ; i++) {
   
       document.getElementById("project-card").innerHTML += "<div class='column'> <div class='card'><img src='"+ car.data[i].imagelink+"' alt='greeny-earth'class='project-pic'/><h3 class='project-title'>"+ car.data[i].title+"</h3><p class='project-details'>"+ car.data[i].description+"</p><a  href='"+ car.data[i].projectlink+"' target='_blank' class='project-link'> VIEW </a></div></div>";
    }
  }
  else{
    for (let j = 0 ; j < car.data.length  ; j++) {
    
      if(seletedproject  == car.data[j].projectlanguage){
      
       document.getElementById("project-card").innerHTML += "<div class='column'> <div class='card'><img src='"+ car.data[j].imagelink+"' alt='greeny-earth'class='project-pic'/><h3 class='project-title'>"+ car.data[j].title+"</h3><p class='project-details'>"+ car.data[j].description+"</p><a href='"+ car.data[j].projectlink+"' target='_blank' class='project-link'> VIEW </a></div></div>";
      }
     }
    
  }}