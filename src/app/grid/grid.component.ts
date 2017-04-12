///import template from './grid.component.html';

class GridComponent {
  myData: Array<Object>;

  constructor() {
  }

  $onInit() {
    this.myData = [
      {
        'firstName': 'Cox',
        'lastName': 'Carney',
        'company': 'Enormo',
        'employed': true
      },
      {
        'firstName': 'Lorraine',
        'lastName': 'Wise',
        'company': 'Comveyer',
        'employed': false
      },
      {
        'firstName': 'Nancy',
        'lastName': 'Waters',
        'company': 'Fuelton',
        'employed': false
      }
    ];
  }
}

const options = {
  template: '<div ui-grid="{ data: $ctrl.myData }" class="myGrid"></div>',
  controller: GridComponent
};

export default {selector: 'grid', options};
