import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import {getAllProducts} from './../stateManagment/actions/productActionThunk';

class ProductsListThunk extends Component {
    componentDidMount() {
        this.props.getAll()
    }
    render() {
        return (
            <div>
                <h1>product result</h1>
                {this.props.isLoading ? <div>isLoading ...</div> : 
                
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
                            this.props.products.data.map(item => {
                                return (
                                    <tr>
                                        <th>{item.productId}</th>
                                        <th>{item.ProductName}</th>
                                        <th>{item.unitPrice}</th>
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
                
                }
                {/* {this.props.message && this.props.message.length > 0 ? <div>message ...</div> : null} */}
                
                
            </div>
        );
    }
}
// export default ProductsListThunk
function mapStateToProps(state){
    return {
      products: state.productStateThunk.items,
      isLoading: state.productStateThunk.isLoading,
      message: state.productStateThunk.message,
    }
  }
const mapDispatchToProps = dispatch => {
    return {
      getAll: () => getAllProducts(dispatch),
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ProductsListThunk)
  
  