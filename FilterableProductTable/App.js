import './App.css';
import React from 'react';


class FilterableProductTable extends React.Component{
  constructor(props){
    super(props);

    this.state={
      filterText:'',
      inStockOnly: false,
    };

    this.handleFilterTextChange=this.handleFilterTextChange.bind(this);
    this.handleInStockChange=this.handleInStockChange.bind(this);
    //const products=this.props.products;
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
                    onInStockChange={this.handleInStockChange}></SearchBar>
          <ProductTable products={this.props.products}
                  filterText={this.state.filterText}
                  inStockOnly={this.state.inStockOnly}>

          </ProductTable>
      </div>
    );    
  }

}

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.handleFilterTextChange=this.handleFilterTextChange.bind(this);
    this.handleInStockChange=this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e){
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e){
    this.props.onInStockChange(e.target.checked);
  }

  render(){
    return(
      <form>
        <input type="text" placeholder="Search..."  value={this.props.filterText}
               onChange={this.handleFilterTextChange}></input>
        <p>
          <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInStockChange}></input>
          {'  '}
          Only show products in stock
        </p>
      </form>

    );
  }
}

class ProductTable extends React.Component{
  render(){
    const filterText=this.props.filterText;
    const inStockOnly=this.props.inStockOnly;

    const rows=[];
    let lastcategory=null;

    this.props.products.forEach(product => {
      /*if filtertext is not match with product name, return */
      if(product.name.indexOf(filterText)=== -1){
        return
      }
      /*if stock available from input checkbox and product stock not available, return */
      if(inStockOnly && !product.stocked){
        return
      }

      if(product.category !== lastcategory){
        rows.push(
          <ProductcategoryRow category={product.category}
                              key={product.category}></ProductcategoryRow>
        );
      }

      rows.push(
        <ProductRow product={product}
                    key={product.name}></ProductRow>
      );
      lastcategory=product.category;
    });

    return(
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>

    );
  }
}

class ProductcategoryRow extends React.Component{
  render(){
    const category=this.props.category;

    return(
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
  
}

class ProductRow extends React.Component{
  render(){
    const product=this.props.product;
    const name=product.stocked? product.name : <span style={{color:'red'}}> {product.name} </span>;
  return(
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
  }
}
export default FilterableProductTable;
