import AbstractComponent from './abstract-component'

const TabsName = {
  CHEAP: 'cheap',
  FAST: 'fast',
  OPTIMAL: 'optimal'
}

const createTabsListTemplate = () => {
  return `
          <ul class="tabs-list">
            <li>
              <button class="tabs-list__btn tabs-list__btn--active tabs-list__btn--${TabsName.CHEAP}"
                      data-tab-name="${TabsName.CHEAP}">
                Самый дешевый
              </button>
            </li>
            <li>
              <button class="tabs-list__btn tabs-list__btn--${TabsName.FAST}"
                      data-tab-name="${TabsName.FAST}">
                Самый быстрый
              </button>
            </li>
            <li>
              <button class="tabs-list__btn tabs-list__btn--${TabsName.OPTIMAL}"
                      data-tab-name="${TabsName.OPTIMAL}">
                Оптимальный
              </button>
            </li>
          </ul>
        `
}

export default class TabsList extends AbstractComponent {
  constructor() {
    super();
    // this._tabChangeHandler = this._tabChangeHandler.bind(this);
  }

  _getTemplate() {
    return createTabsListTemplate();
  }

  /* _tabChangeHandler(evt) {
    evt.preventDefault();
    this._callback.tabChange(evt.target.dataset.tabName);
    this.getElement().querySelectorAll('.tabs-list__btn').forEach(btn => btn.classList.remove('tabs-list__btn--active'));
    evt.target.classList.add(`tabs-list__btn--active`);
  }

  setTabChangeHandler(callback) {
    this._callback.tabChange = callback;
    this.getElement().addEventListener('click', this._tabChangeHandler)
  } */
}
