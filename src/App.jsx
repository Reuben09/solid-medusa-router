import { Routes, Route } from "@solidjs/router"
import { lazy } from "solid-js";
import Header from './component/Header'
const Products = lazy(() => import("./pages/Products"));
const Home = lazy(() => import("./pages/Home"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products}  />
      <Route path="/products/:productId" component={SingleProduct}  />
      </Routes>
    </div>
  );
}

export default App;
