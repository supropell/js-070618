'use strict';
let paramSort = '';
let paramSearch = '';


const PhonesFilter = {

  filter(param, phones){
    this._param = param;
    this._phones = phones;

    let phoneFiltred = [];

    for (let key in this._param) {

      if (key === 'paramSort') {
        paramSort = this._param.paramSort;
      } else if (key === 'paramSearch') {
        paramSearch = this._param.paramSearch;
      }
    }


    this._phones.forEach(function(i, item, arr) {
      if (paramSearch.length == 0) {
        phoneFiltred = arr.slice(0, arr.length-1);
      }
      if (i.name.toLowerCase().indexOf(paramSearch) >= 0){
         phoneFiltred.push(i);
         }
      });

    function compare(phoneA, phoneB) {
      if (paramSort === 'name') {
         if (phoneA.name > phoneB.name) return 1;
         if (phoneA.name < phoneB.name) return -1;

       } else if (paramSort === 'age' || paramSort === '') {
         return phoneA.age - phoneB.age;
       }
     }

    return phoneFiltred.sort(compare);

  }

};

export default PhonesFilter;
