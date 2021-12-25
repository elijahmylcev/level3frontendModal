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

console.log();
