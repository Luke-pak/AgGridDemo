import {atom} from 'recoil';

export const AgState = atom({
    key : 'agAtom',
    default:{
        columnDefs:[
            {headerName: 'Make', field:'make'},
            {headerName: 'Model', field:'model'},
            {headerName: 'Price', field:'price'},
        ],
        rowDatas:[
            {make: 'Toyota', model:'Celica', price: 30000}
            ,{make: 'Ford', model:'Mondeo', price: 31000}
            ,{make: 'Porsche', model:'Boxter', price: 35000}
        ]
    }
})
