import AbstractComponent from './abstract-component';

const createFormTemplate = () => {
  return `
          <form class="form main-page__form">
            <h3 class="form__title">Количество пересадок</h3>
            <p class="form__row">
              <input class="form__input" type="checkbox" name="all" id="all">
              <label class="form__label" for="all">Все</label>
            </p>
            <p class="form__row">
              <input class="form__input" type="checkbox" name="without" id="without">
              <label class="form__label" for="without">Без пересадок</label>
            </p>
            <p class="form__row">
              <input class="form__input" type="checkbox" name="1" id="1">
              <label class="form__label" for="1">1 пересадка</label>
            </p>
            <p class="form__row">
              <input class="form__input" type="checkbox" name="2" id="2">
              <label class="form__label" for="2">2 пересадки</label>
            </p>
            <p class="form__row">
              <input class="form__input" type="checkbox" name="3" id="3">
              <label class="form__label" for="3">3 пересадки</label>
            </p>
          </form>
        `
}

export default class Form extends AbstractComponent {
  _getTemplate() {
    return createFormTemplate();
  }
}
