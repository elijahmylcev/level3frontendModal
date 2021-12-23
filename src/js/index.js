import 'reset-css';
import '../style.scss';

class Modal {
  constructor(triggerSelectorsOpen, modalSelector, selectorsClose) {
    this.triggers = document.querySelectorAll(triggerSelectorsOpen);
    this.modal = document.querySelector(modalSelector);
    this.closeButtons = document.querySelectorAll(selectorsClose);
    this.scroll = this.calcScroll();
  }

  init() {
    this.open();

    // Close call
    try {
      this.modal.addEventListener('click', e => {
        if (e.target !== this.modal) {
          if (e.target.getAttribute('data-close')) {
            this.close();
          }
        } else {
          this.close();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  open() {
    this.triggers.forEach(btn => {
      btn.addEventListener('click', () => {
        this.modal.firstElementChild.classList.add('fadeIn');

        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${this.scroll}px`;

        setTimeout(() => {
          this.modal.firstElementChild.classList.remove('fadeIn');
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

class ModalCreateConfig extends Modal {
  constructor(triggerSelectorsOpen, modalSelector, selectorsClose, layout, text) {
    super(triggerSelectorsOpen, modalSelector, selectorsClose);
    this.layout = layout;
    this.text = text;
  }

  init() {
    super.init();
    this.createWithConfig();
  }

  createWithConfig() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', 'exampleModalSecond');
    const standard = `
    <div class="modal__dialog">
        <div class="modal__content">
          <button class="close" data-close="true"><span data-close="true">&times;</span></button>

          <div class="modal__content_header">
            <div class="modal__content_header_title">${this.text.header}</div>
          </div>
          <div class="modal__content_body">
            ${this.text.body}
          </div>
          <div class="modal__content_footer">
            <button class="modal__content_footer_btn exit" data-close="true">Exit</button>
            <button class="modal__content_footer_btn success">Ok</button>
          </div>
        </div>
      </div>
    `;

    if (this.layout) {
      return;
    } else {
      modal.innerHTML = standard;
      document.body.appendChild(modal);
    }
  }
}

const modalDialog = new Modal('.trigger', '#exampleModal', '[data-close]');

modalDialog.init();

const testModal = new ModalCreateConfig('.triggerTest', '#exampleModalSecond', '[data-close]', '', {
  header: 'Hello',
  body: 'world',
});
testModal.createWithConfig();
