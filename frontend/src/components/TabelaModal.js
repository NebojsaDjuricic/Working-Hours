import React from 'react';
import ReactDOM from 'react-dom';
import {ReactBsTable, BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import InsertModalHeader from 'react-bootstrap-table/lib'

var products = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  },
  {
      id: 2,
      name: "Product2",
      price: 80
  },
  {
      id: 2,
      name: "Product2",
      price: 80
  },
  {
      id: 2,
      name: "Product2",
      price: 80
  },
  {
      id: 2,
      name: "Product2",
      price: 80
  },{
      id: 2,
      name: "Product2",
      price: 80
  },{
      id: 2,
      name: "Product2",
      price: 80
  },{
      id: 2,
      name: "Product2",
      price: 80
  },{
      id: 2,
      name: "Product2",
      price: 80
  },{
      id: 2,
      name: "Product2",
      price: 80
  }
];

export default class TabelaModal extends React.Component {

  beforeClose(e) {
    alert(`[Custom Event]: Before modal close event triggered!`);
  }

  handleModalClose(closeModal) {
    // Custom your onCloseModal event here,
    // it's not necessary to implement this function if you have no any process before modal close
    console.log('This is my custom function for modal close event');
    closeModal();
  }

  createCustomModalHeader = (closeModal, save) => {
    return (
      <InsertModalHeader
        className='my-custom-class'
        title='This is my custom title'
        beforeClose={ this.beforeClose }
        onModalClose={ () => this.handleModalClose(closeModal) }/>
        // hideClose={ true } to hide the close button
    );

    // If you want have more power to custom the child of InsertModalHeader,
    // you can do it like following
    // return (
    //   <InsertModalHeader
    //     beforeClose={ this.beforeClose }
    //     onModalClose={ () => this.handleModalClose(closeModal) }>
    //     { ... }
    //   </InsertModalHeader>
    // );
  }

  render() {
    const options = {
      insertModalHeader: this.createCustomModalHeader
    };
    return (
      <BootstrapTable data={ products } options={ options } insertRow>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
