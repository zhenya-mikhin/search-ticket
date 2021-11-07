const URLs = {
  id: 'https://front-test.beta.aviasales.ru/search',
  flights: 'https://front-test.beta.aviasales.ru/tickets'
};

const SuccessHTTPStatusRange = {
  MIN: 200,
  MAX: 299
};

export default class Api {
  constructor() {
    this.id = null
  }

  async getTickets() {
    return await fetch(URLs.flights + this.id.searchId)
                  .then(Api.checkStatus)
                  .then(Api.toJSON)
                  .then(res => console.log(res))
                  .catch(Api.catchError)
  }

  async getSearchId() {
    return await fetch(URLs.id)
                  .then(Api.checkStatus)
                  .then(Api.toJSON)
                  .then(res => {
                    this.id = res;
                    console.log(res);
                    console.log(this.id)
                  })
                  .catch(Api.catchError)
  }

  static checkStatus(response) {
    if (
      response.status < SuccessHTTPStatusRange.MIN &&
      response.status > SuccessHTTPStatusRange.MAX
    ) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response;
  }

  static toJSON(response) {
    return response.json();
  }

  static catchError(err) {
    throw err;
  }
}
