'use strict';

export default class Search {
  constructor({ element }) {
    this._element = element;
    this._render();
    this._element.addEventListener('input', this._onPhoneSearch.bind(this));
    }

  _render() {
    this._element.innerHTML = `
    Search:
    <input>
    `
  }

  on(eventName, callback) {
     this._element.addEventListener(eventName, callback);
   }

   _onPhoneSearch(event) {
     let value = event.target.value.toLowerCase();

     let customEvent = new CustomEvent('phoneSearch', {
       detail: {phoneFilter: value}
     });

     this._element.dispatchEvent(customEvent);
   }

}
