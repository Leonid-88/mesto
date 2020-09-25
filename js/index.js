
const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close-icon');
const formElement = document.querySelector('.popup__form');
const inputOne = formElement.querySelector('.popup__input-1');
const inputTwo = formElement.querySelector('.popup__input-2');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');


const popupToggle = function() {
    popup.classList.toggle('popup_opened');
}
popupToggle();

