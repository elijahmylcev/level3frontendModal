import 'reset-css';
import '../style.scss';
import 'animate.css';

class Modal {
  constructor(triggerSelectorsOpen, modalSelector, selectorsClose) {
    this.triggers = document.querySelectorAll(triggerSelectorsOpen);
    this.modal = document.querySelector(modalSelector);
    this.closeButtons = document.querySelectorAll(selectorsClose);
    this.scroll = this.calcScroll();
  }

  init() {
    this.open();
    this.close();
  }

  open() {
    this.triggers.forEach(btn => {
      btn.addEventListener('click', () => {
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${this.scroll}px`;
      });
    });
  }

  close() {
    this.closeButtons.forEach(btnClose => {
      btnClose.addEventListener('click', () => {
        this.modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
      });
    });
  }

  calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;
  }
}

const modalDialog = new Modal('.trigger', '#exampleModal', '[data-close]');

modalDialog.init();
