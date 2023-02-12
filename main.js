(
    function () {
        
      const optionSectionMapping = {
        "data-option": "data-section",
        "profile-option": "profile-section",
        "education-option": "education-section",
        "experience-option": "experience-section",
        "languages-option": "languages-section",
     }
        
      const ocultarTodos = function () {
        Object.values(optionSectionMapping).forEach(sectionId => {
          const element = document.querySelector('#' + sectionId);
          element.style.display = 'none';
          element.classList.remove('selected');
       })
     } 
  
      document.querySelectorAll('#nav-buttons li button').forEach( button => {
            button.addEventListener('click', (e) => {
                ocultarTodos();
                const sectionId = optionSectionMapping[e.target.id];
                const element = document.querySelector('#' + sectionId);
                element.style.display = 'block';
                element.classList.add('selected')
            })
     })
        
  
      $(documento).ready(function (){
        $('.main-nav').scroller();
      })
       
      $(document).ready(function (){
        $('.main-nav').scroller({
          scrollspeed: 750,
          menuClassName: 'scroller',
          activeClass: 'active'
        })
      })
    
    
  
    }
  )()