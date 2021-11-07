import AbstractComponent from './abstract-component';

const createShowMoreBtnComponent = () => {
  return `<button class="content__button show-more-btn">Показать еще 5 билетов!</button>`
}

export default class ShowMoreButton extends AbstractComponent {
  _getTemplate() {
    return createShowMoreBtnComponent();
  }
}
