'use strict';

export default class Sort {
  constructor({ element }) {
    this._element = element;
    this._render();
    this._element.addEventListener('click', this._onPhoneSort.bind(this));
    }

  _render() {
    this._element.innerHTML = `
      Sort by:
      <select class="sort-phone">
        <option value="name">name</option>
        <option value="age" selected>age</option>
      </select>
    `
  }

  on(eventName, callback) {
     this._element.addEventListener(eventName, callback);
   }

  _onPhoneSort(event) {
    let value = this._element.querySelector('.sort-phone').value;

    let customEvent = new CustomEvent('phoneSort', {
      detail: {phoneSort: value}
    });

    this._element.dispatchEvent(customEvent);
  }

}
