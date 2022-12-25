import logo from './logo.svg';
import './App.css';
import ProductsList from './components/productsList';
import AddProduct from './components/addProduct';
import ProductsListThunk from './components/productListThunk';

function App() {
  return (
    <div className='container-fluid d-flex flex-row justify-content-around align-items-center'>
      <div style={{width:'45%'}}>
      <ProductsList />
      </div>
      <div style={{width:'45%'}}>
      <AddProduct />
      </div>
      <div style={{width:'45%'}}>
      <ProductsListThunk />
      </div>
    </div>
  );
}

export default App;
// const mapStateToProps = state = ({
//   products: state.productState.items
// })

