import logo from './logo.svg';
import './App.css';
import React from 'react';

const PRODUCTS=[
	{category: 'Sporting Goods', price:'$49.99', stocked:true, name:'Football'}, 
	{category: 'Sporting Goods', price:'$9.99', stocked:true, name:'Baseball'}, 
	{category: 'Sporting Goods', price:'$29.99', stocked:false, name:'Basketball'}, 
	{category: 'Electronics', price:'$99.99', stocked:true, name:'iPod Touch'}, 
	{category: 'Electronics', price:'$399.99', stocked:true, name:'iPod Touch'}, 
	{category: 'Electronics', price:'$199.99', stocked:true, name:'iPod Touch'}, 
];

class FilterableProductTable extends React.Component{
  constructor(props){
    super(props);

    this.state={
      filterText:'',
      inStockOnly: false,
    };

    this.handleFilterTextChange=this.handleFilterTextChange.bind(this);
    this.handleInStockChange=this.handleInStockChange.bind(this);
    
  }

  handleFilterTextChange(filterText){
    this.setState({
      filterText:filterText
    });
  }

  handleInStockChange(inStockOnly){
    this.setState({
      inStockOnly:inStockOnly
    });
  }

  render(){
    return(
      <div>
         <SearchBar filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onFilterTextChange={this.handleInStockChange}></SearchBar>
      </div>
    );    
  }

}
export default App;

