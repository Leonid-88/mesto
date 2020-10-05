   
   const popup = document.querySelector('.popup');
    const popupToggle = document.querySelector('.profile__edit-button');
    const popupClose = document.querySelector('.popup__close-icon');
    const nameInput = document.querySelector('.popup_name');
    const jobInput = document.querySelector('.popup_job');
    const formElement = document.querySelector('.popup__form');
    const profileName = document.querySelector('.profile__name');
    const profileJob = document.querySelector('.profile__job');

    function openPopUp() {
        popup.classList.add('popup_open');
        nameInput.value = profileName.textContent;
        jobInput.value =  profileJob.textContent;
    }

    function closePopUp() {
        popup.classList.remove('popup_open');
    }
        

    function formSubmitHandler (evt) {
        evt.preventDefault(); 

        profileName.textContent = nameInput.value;
        profileJob.textContent = jobInput.value;

    closePopUp();
    }
        formElement.addEventListener('submit',formSubmitHandler); 
        popupToggle.addEventListener('click',openPopUp); 
        popupClose.addEventListener('click',closePopUp); 


