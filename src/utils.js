export const RenderPosition =  {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend'
};

export const render = (container, element, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const formatMinToHours = (mins) => {
  return `${Math.trunc(mins / 60)}ч ${mins % 60}м`;
};

export const formatPrice = (cost) => {
  return `${((cost - (cost % 1000)) / 1000)} ${(cost % 1000)} P`
};

export const formatTime = (time, duration) => {
  let date = new Date(time);

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let hours2 = date2.getHours();
  let minutes2 = date2.getMinutes();


  minutes = (minutes < 10) ? '0' + minutes : minutes;
  hours = (hours < 10) ? '0' + hours : hours;
  minutes2 = (minutes2 < 10) ? '0' + minutes2 : minutes2;
  hours2 = (hours2 < 10) ? '0' + hours2 : hours2;

  console.log(hours, minutes, hours2, minutes2)

  let str1 = ``;
  let str2 = ``;



  return str1 + ` - ` + str2
}
