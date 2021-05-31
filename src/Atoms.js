import { atom } from 'recoil';

export const AgState = atom({
  key: 'agAtom',
  default: {
    columnDefs: [
      {
        headerName: 'Make',
        field: 'make',
        sortable: true,
        filter: true,
        rowGroup: true,
      },
      { headerName: 'Model', field: 'model', sortable: true, filter: true },
      { headerName: 'Price', field: 'price', sortable: true, filter: true },
    ],
    rowData: null,
    // rowData: [
    //   { make: 'Toyota', model: 'Celica', price: 30000 },
    //   { make: 'Ford', model: 'Mondeo', price: 31000 },
    //   { make: 'Porsche', model: 'Boxter', price: 35000 },
    // ],
  },
});
