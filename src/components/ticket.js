import AbstractComponent from './abstract-component';
import {formatMinToHours, formatPrice, formatTime} from '../utils';

const createTicketComponent = (ticket) => {
  const {price, carrier, segments} = ticket;

  console.log(formatTime(segments[0].date, segments[1].date))

  return `
          <li class="tickets-list__item ticket">
            <header class="ticket__header">
              <span class="ticket__price">${formatPrice(price)}</span>
              <img src="http://pics.avs.io/99/36/${carrier}.png" alt="лого авиакомпании" width="99" height="36">
            </header>

            <div class="ticket__there">
              <div class="ticket__route">
                <p class="ticket__cities">${segments[0].origin} - ${segments[0].destination}</p>
                <p class="ticket__time"></p>
              </div>
              <div class="ticket__length">
                <p class="ticket__text">в пути</p>
                <p class="ticket__duration">${formatMinToHours(segments[0].duration)}</p>
              </div>
              <div class="ticket__stops">
                <p class="ticket__stops-count">${segments[1].stops.length} пересадок</p>
                <p class="ticket__iata">${segments[1].stops}</p>
              </div>
            </div>

            <div class="ticket__back">
              <div class="ticket__route">
                <p class="ticket__cities">${segments[1].origin} - ${segments[1].destination}</p>
                <p class="ticket__time"></p>
              </div>
              <div class="ticket__length">
                <p class="ticket__text">в пути</p>
                <p class="ticket__duration">${formatMinToHours(segments[1].duration)}</p>
              </div>
              <div class="ticket__stops">
                <p class="ticket__stops-count">${segments[1].stops.length} пересадок</p>
                <p class="ticket__iata">${segments[1].stops}</p>
              </div>
            </div>
          </li>
        `
}

export default class Ticket extends AbstractComponent {
  constructor(ticket) {
    super();
    this.ticket = ticket
  }

  _getTemplate() {
    return createTicketComponent(this.ticket);
  }
}
