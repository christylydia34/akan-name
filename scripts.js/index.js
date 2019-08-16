function akanNames(){


      var  DD=parseInt(document.getElementById("dd").value);
      var  MM=parseInt(document.getElementById("mm").value);
      var YY=parseInt(document.getElementById("yy").value);

        var CC=(YY-1)/100+1;
  };
  
      var dayOfWeek =Math.floor( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
      var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
      var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
      
      var theFemaleGender=document.getElementById("female");
      var theMaleGender=document.getElementById("male");
  
      
      if(theFemaleGender.checked){
  
         
          var theFemaleValue = theFemaleGender.value;
  
      }else if(theMaleGender.checked){

          var theMaleValue = theMaleGender.value;
      }
  
      
      if(theFemaleValue==="female"){
  
          document.getElementById("result").innerHTML="Your Akan Name is "+femaleNames[dayOfWeek];
  
      }else{
  
          document.getElementById("result").innerHTML="Your Akan Name is "+maleNames[dayOfWeek];
      }
   
  }
  