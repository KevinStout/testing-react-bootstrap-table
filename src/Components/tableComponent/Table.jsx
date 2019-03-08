import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './Table.css';
import BootstrapTable from 'react-bootstrap-table-next';

////////////////Table 1//////////
const data =[{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
}];
const columns = [{
  dataField: 'id',
  text: 'Product ID',
  headerStyle: {backgroundColor: 'black', color: 'white', padding: '20px'}
},
{
  dataField: 'name',
  text: 'Product Name',
  headerStyle: {backgroundColor: 'black', color: 'white', padding: '20px'}
},
{
  dataField: 'price',
  text: 'Product Price',
  headerStyle: {backgroundColor: 'black', color: 'white', padding: '20px'}
}];

//////////////Table 2////////////
const stuff = [{
  id: 1,
  name: "Hello",
  rule: <button className='btn-green'>Yes</button>
} ];

const moreColums = [{
  dataField: 'id',
  text: 'Feature ID',
  headerAlign: 'center',
  headerStyle: {backgroundColor: 'black', color: 'white', padding: '20px'}
},{
  dataField: 'name',
  text: 'Feature Name',
  headerAlign: 'center',
  headerStyle: {backgroundColor: 'black', color: 'white', padding: '20px'}
},{
  dataField: 'rule',
  text: 'Rules',
  headerAlign: 'center',
  headerStyle: {backgroundColor: 'black', color: 'white', padding: '20px'}
}];

export default class Table extends Component {
    
  render() {
    return (
      <div className='table-space-around'> 
        <BootstrapTable keyField='id' data={ data } columns={ columns }/>
        <BootstrapTable keyField='id' data={ stuff } columns={ moreColums }/>
      </div>

    );
  }
}
