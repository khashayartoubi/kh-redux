import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import {getAll, remove} from './../stateManagment/actions/productActions';

class ProductsList extends Component {
    render() {
        return (
            <div>
                <h1>product result</h1>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>PRICE</th>
                            <th>other</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(item => {
                                return (
                                    <tr>
                                        <th>{item.id}</th>
                                        <th>{item.ProductName}</th>
                                        <th>{item.price}</th>
                                        <th>
                                            <button className='btn btn-danger btn-sm' 
                                            onClick={() => this.props.removeProduct(item.id)}>
                                                Delete
                                            </button>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                
            </div>
        );
    }
}
// export default ProductsList
function mapStateToProps(state){
    return {
      products: state.productState.items
    }
  }
const mapDispatchToProps = dispatch => {
    return {
      removeProduct: (id) => dispatch(remove(id))
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
  
  