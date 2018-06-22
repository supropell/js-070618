'use strict';

import PhonesService from './services/phones-service.js';
import PhonesFilter from './services/phones-filter.js';
import PhonesCatalogue from './components/phones-catalog.js';
import Sort from './components/sort.js';
import Search from './components/search.js';
import ShoppingCart from './components/shopping-cart.js';

export default class PhonesPage {
  constructor({ element }) {
    this._element = element;
    this._catalogue = new PhonesCatalogue({
      element: this._element.querySelector('[data-component="phones-catalog"]'),
      phones: PhonesService.getPhones(),
    });

    this._search = new Search({
      element: this._element.querySelector('[data-component="search"]'),
    });

    this._sort = new Sort({
      element: this._element.querySelector('[data-component="sort"]'),
    });

    this.shoppingCart = new ShoppingCart({
      element: this._element.querySelector('[data-component="shopping-cart"]'),
    });

    this._sort.on('phoneSort', (event) => {
      this._sortName = event.detail.phoneSort;
      this._filter = PhonesFilter.filter(
        {paramSort: this._sortName},
        PhonesService.getPhones()
      );
      this._catalogue.refreshPhones(this._filter);
      console.log(this._sortName);
    });

    this._search.on('phoneSearch', (event) => {
      this._searchName = event.detail.phoneFilter;
      this._filter = PhonesFilter.filter(
        {paramSearch: this._searchName},
        PhonesService.getPhones()
      );
      this._catalogue.refreshPhones(this._filter);
      console.log(this._searchName);
    });

    this._catalogue.refreshPhones(this._filter);

    this._catalogue.on('phoneSelected', (event) => {
      console.log(event.detail.phoneId);
    });




  }
}
