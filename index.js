

      $(document).ready(function(){

       
        $("#full_article_link").click(function(){
        
          var popup = document.getElementById("myPopup");
          popup.classList.toggle("show");

        });


      });

      
    // function toggleMenu(){
    //   let elem = document.getElementById("menu1");
    //   console.log(elem);
    //   if(elem.style.display == "none")
    //   {
    //     elem.style.display = "block"
    //   }else{
    //     elem.style.display = "none"
    //   }
      
      
    // }

    // function myMove() {
    //   let id = null;
    //   const elem = document.getElementById("menu1");   
    //   let pos = 0;
    //   clearInterval(id);
    //   id = setInterval(frame, 1);
    //   function frame() {
    //     if (pos == 100) {
    //       console.log(pos)

    //       pos--; 
    //       elem.style.height = pos - "%"; 
    //       elem.style.height = pos - "%";
    //       clearInterval(id);
    //     } else {
    //       console.log(pos)
    //       pos++; 
    //       elem.style.height = pos + "%"; 
    //       elem.style.height = pos + "%"; 
    //       clearInterval(id);
    //     }
    //   }
    // }


      function show(){

      let elem=  document.getElementById("menu1").classList.toggle('active');

      const element = document.getElementById("menu1")
     let currentDisplay = element.style.display
        if (currentDisplay == "block") {
          element.style.display = "none"
        } else {
          
          element.style.display = "block"
        }
        
      
      }
      
    


      function myFunction() {


        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");


      }

      window.onload = function() {


          
        }
  
  
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     console.log("phone");
    }

    
            

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const square = entry.target.querySelector('.card_wrapper_1');
        const square2 = entry.target.querySelector('.card_wrapper_2');
        const square3 = entry.target.querySelector('.card_wrapper_3');
    
        
        if (entry.isIntersecting) {
          square.classList.add('square-animation');
          square2.classList.add('square-animation2');
          square3.classList.add('square-animation3');
       

        return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
        square.classList.remove('square-animation');
        square2.classList.remove('square-animation2');
        square3.classList.remove('square-animation3');
      

      });
    });


    const observer2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
    
        const square4 = entry.target.querySelector('.card_wrapper_4');
        const square5 = entry.target.querySelector('.card_wrapper_5');
        const square6 = entry.target.querySelector('.card_wrapper_6');
        
        if (entry.isIntersecting) {
    
          square4.classList.add('square-animation');
          square5.classList.add('square-animation2');
          square6.classList.add('square-animation3');

        return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
    
        square4.classList.remove('square-animation');
        square5.classList.remove('square-animation2');
        square6.classList.remove('square-animation3');

      });
    });


    const observer3 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
    
        const square7 = entry.target.querySelector('.card_wrapper_7');
        const square8 = entry.target.querySelector('.card_wrapper_8');
        const square9 = entry.target.querySelector('.card_wrapper_9');
        
        if (entry.isIntersecting) {
    
          square7.classList.add('square-animation');
          square8.classList.add('square-animation2');
          square9.classList.add('square-animation3');

        return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
    
        square7.classList.remove('square-animation');
        square8.classList.remove('square-animation2');
        square9.classList.remove('square-animation3');

      });
    });
    observer.observe(document.querySelector('.article_line_1'));
    observer2.observe(document.querySelector('.article_line_2'));
    observer3.observe(document.querySelector('.article_line_3'));
 




    let number = document.getElementById('number');
    let counter= 0;
    setInterval(() =>{
    
        if(counter == 8029 ){
            clearInterval
        }else{
    
            counter +=31;
            number.innerHTML = `${counter}`;
    
        }
       
    
    })


    let tag = () => {

      console.log(tag);

    }


      
  
  
  
  
  
  