import 'reset-css';
import '../style.scss';

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

    // Close call
    this.modal.addEventListener('click', e => {
      if (e.target !== this.modal) {
        if (e.target.getAttribute('data-close')) {
          this.close();
        }
      } else {
        this.close();
      }
    });
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
    this.modal.firstElementChild.classList.add('fadeOut');

    setTimeout(() => {
      this.modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
      this.modal.firstElementChild.classList.remove('fadeOut');
    }, 500);
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
