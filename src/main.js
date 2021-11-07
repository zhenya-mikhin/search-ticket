import {render, RenderPosition} from "./utils.js";

import HeaderLogo from './components/header-logo';
import Form from './components/form';
import TabsList from './components/tabs-list';
import Ticket from './components/ticket';
import ShowMoreButton from './components/show-more-button';
import Api from './api';

const header = document.querySelector('.main-page__header');
const body = document.querySelector('.main-page__body');
const content = body.querySelector('.content');
const ticketsList = body.querySelector('.tickets-list');

render(header, new HeaderLogo().getElement());
render(body, new Form().getElement(), RenderPosition.AFTERBEGIN);
render(content, new TabsList().getElement(), RenderPosition.AFTERBEGIN);
render(content, new ShowMoreButton().getElement());

const tabs = document.querySelectorAll('.tabs-list__btn');

const tabChangeHandler = evt => {
  evt.preventDefault();
  tabs.forEach(btn => btn.classList.remove('tabs-list__btn--active'));
  evt.target.classList.add(`tabs-list__btn--active`);
};

tabs.forEach(btn => btn.addEventListener('click', tabChangeHandler));

let id = null;
let tickets = [];

const getSearchId = async () => {
  await fetch('https://front-test.beta.aviasales.ru/search')
          .then(res => res.json())
          .then(res => id = res.searchId)
}

const getTickets = async () => {
  await fetch('https://front-test.beta.aviasales.ru/tickets?searchId=' + id)
        .then(res => res.json())
        .then(res => tickets = res.tickets)
}

const api = async () => {
  await getSearchId()
  await getTickets()
  await tickets.slice(0, 4).forEach(ticket => render(ticketsList, new Ticket(ticket).getElement()))
}

api()
