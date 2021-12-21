import 'reset-css';
import '../style.scss';
import 'animate.css';

function modal(triggerSelectorOpen, modalSelector, triggerSelectorsClose) {
  const bntOpen = document.querySelector(triggerSelectorOpen);
  const modal = document.querySelector(modalSelector);
  const btnClose = document.querySelectorAll(triggerSelectorsClose);

  bntOpen.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  btnClose.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });
}

// modal('.trigger', '#exampleModal', '[data-close]');

class Modal {
  constructor(triggerSelectorsOpen, modalSelector, selectorsClose) {
    this.triggers = document.querySelectorAll(triggerSelectorsOpen);
    this.modal = document.querySelector(modalSelector);
    this.closeButtons = document.querySelectorAll(selectorsClose);
  }

  init() {
    console.log(this.modal);
    this.open();
    this.close();
  }

  open() {
    this.triggers.forEach(btn => {
      btn.addEventListener('click', () => {
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    });
  }

  close() {
    this.closeButtons.forEach(btnClose => {
      btnClose.addEventListener('click', () => {
        this.modal.style.display = 'none';
        document.body.style.overflow = '';
      });
    });
  }
}

const modalDialog = new Modal('.trigger', '#exampleModal', '[data-close]');

modalDialog.init();
