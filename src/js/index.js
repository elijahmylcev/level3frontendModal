import 'reset-css';
import '../style.scss';

function modal(triggerSelectorOpen, modalSelector, triggerSelectorClose) {
  const bntOpen = document.querySelector(triggerSelectorOpen);
  const modal = document.querySelector(modalSelector);
  const btnClose = document.querySelectorAll(triggerSelectorClose);

  bntOpen.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  btnClose.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });
}

modal('.trigger', '#exampleModal', '[data-close]');
