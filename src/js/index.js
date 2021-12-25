import 'reset-css';
import '../style.scss';
import Modal from './modules/modal';
import ModalCreateConfig from './modules/modalCreate';

const modalDialog = new Modal('.trigger', '#exampleModal', '[data-close]');
modalDialog.init();

const testModal = new ModalCreateConfig('.triggerTest', '#exampleModalSecond', '[data-close]', '', {
  header: 'Hello',
  body: 'world',
});
testModal.createWithConfig();

const modalWithLayout = new ModalCreateConfig(
  '.triggerCreateModal',
  '#exampleModalThird',
  '[data-close]',
  `
  <div class="title">Hello i'm Modal</div>
  <div class="body">
    <ul>
      <li>Created with</li>
      <li>Config</li>
      <li>Layout</li>
    </ul>
  </div>

  <button class="exit" data-close="true">Close</button>
`,
  {},
);

modalWithLayout.createWithConfig();
