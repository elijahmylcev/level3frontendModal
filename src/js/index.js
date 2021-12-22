import 'reset-css';
import '../style.scss';
import 'animate.css';

class Modal {
  constructor(triggerSelectorsOpen, modalSelector, selectorsClose) {
    this.triggers = document.querySelectorAll(triggerSelectorsOpen);
    this.modal = document.querySelector(modalSelector);
    this.closeButtons = document.querySelectorAll(selectorsClose);
    // Ширина полосы прокрутки
    this.scroll = this.calcScroll();
  }

  init() {
    this.open();
    this.close();
  }

  open() {
    this.triggers.forEach(btn => {
      btn.addEventListener('click', () => {
        this.modal.querySelector('.modal__dialog').classList.add('fadeIn');

        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${this.scroll}px`;

        setTimeout(() => {
          this.modal.querySelector('.modal__dialog').classList.remove('fadeIn');
        }, 550);
      });
    });
  }

  close() {
    this.closeButtons.forEach(btnClose => {
      btnClose.addEventListener('click', () => {
        this.modal.querySelector('.modal__dialog').classList.add('fadeOut');

        // this.modal.style.display = 'none';
        // document.body.style.overflow = '';
        // document.body.style.marginRight = `0px`;
      });

      setTimeout(() => {
        this.modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
        this.modal.querySelector('.modal__dialog').classList.remove('fadeOut');
      }, 500);
    });

    this.modal.addEventListener('click', e => {
      if (e.target === this.modal) {
        this.modal.querySelector('.modal__dialog').classList.add('fadeOut');

        // this.modal.style.display = 'none';
        // document.body.style.overflow = '';
        // document.body.style.marginRight = `0px`;
      }

      setTimeout(() => {
        this.modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
        this.modal.querySelector('.modal__dialog').classList.remove('fadeOut');
      }, 500);
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
