

import React from 'react';
import { connect } from 'react-redux';
import { add } from '../stateManagment/actions/productActions';

const AddProduct = ({addProduct}) => {

        const save = (e) => {
            e.preventDefault();
            const from = new FormData(e.target);
            const id = from.get('id');
            const name = from.get('name');
            const price = from.get('price');
            addProduct({id,name,price})
        }
    return (
        <>
            <form onSubmit={(e) => save(e)} style={{width:'100%'}}>
                <h1>product result</h1>
                <div className='from-group' style={{width:'100%'}}>
                    <label>ID:</label>
                    <input type="number" className='from-control' name='id' style={{width:'100%'}}/>
                </div>
                <div className='from-group' style={{width:'100%'}}>
                    <label>Name:</label>
                    <input type="text" className='from-control' name='name' style={{width:'100%'}}/>
                </div>
                <div className='from-group' style={{width:'100%'}}>
                    <label>Price:</label>
                    <input type="number" className='from-control' name='price' style={{width:'100%'}}/>
                </div>
                <button type='submit' className='btn btn-primary mt-4' onClick={() => this.props.addProduct()}>
                    Save
                </button>
            </form>   
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addProduct: (item) => dispatch(add(item))
    }
}
export default connect(null, mapDispatchToProps)(AddProduct)
