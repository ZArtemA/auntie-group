var tag = document.createElement('script');
const page = document.querySelector('.page');
const frame = page.querySelector('.about__frame');
const dateInput = document.getElementById("date");
const selectors = page.querySelectorAll('.form__selector');
const videoOverlay = page.querySelector('.about__video-overlay');
const video = page.querySelector('.about__frame');
const arrSelectors = Array.from(selectors);

arrSelectors.forEach((item)=>{
    let selectorTitles = item.querySelectorAll('.form__option-start');
    let selectorLabels = item.querySelectorAll('.form__option');


    for (let i = 0; i < selectorTitles.length; i++) {
        selectorTitles[i].addEventListener('click', () => {
        if ('active' === item.getAttribute('data-state')) {
            item.setAttribute('data-state', '');
        } else {
            item.setAttribute('data-state', 'active');
        }
      });
    }
      
      
      for (let i = 0; i < selectorLabels.length; i++) {
          selectorLabels[i].addEventListener('click', (evt) => {
            selectorTitles.textContent = evt.target.textContent;
          item.setAttribute('data-state', '');
        });
      }

})

dateInput.onchange=()=>{
  if (dateInput.value.length !== 0){
    dateInput.classList.remove('form__input_date-inactive');
  }
}

videoOverlay.addEventListener('click', (event)=>{
  videoOverlay.parentElement.removeChild(videoOverlay);
  event.preventDefault();

  video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
})