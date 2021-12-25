import Modal from './modal';

export default class ModalCreateConfig extends Modal {
  constructor(triggerSelectorsOpen, modalSelector, selectorsClose, layout, text) {
    super(triggerSelectorsOpen, modalSelector, selectorsClose);
    this.triggerSelectorsOpen = triggerSelectorsOpen;
    this.modalSelector = modalSelector;
    this.selectorsClose = selectorsClose;
    this.layout = layout;
    this.text = text;
  }

  createWithConfig() {
    try {
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.setAttribute('id', this.modalSelector.slice(1));

      console.log(modal);

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
        modal.innerHTML = `
        <div class="modal__dialog">
          <div class="modal__content">
            <button class="close" data-close="true"><span data-close="true">&times;</span></button>
            ${this.layout}
          </div>
        </div>`;
      } else {
        modal.innerHTML = standard;
      }

      document.body.appendChild(modal);

      this.modal = document.querySelector(this.modalSelector);
      this.triggers = document.querySelectorAll(this.triggerSelectorsOpen);

      this.init();
    } catch (error) {
      console.error(error, code);
    }
  }
}
