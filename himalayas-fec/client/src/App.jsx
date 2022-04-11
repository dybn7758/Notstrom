import React, { useEffect } from "react";
import RelatedProducts from "./Components/Related Products/RelatedProducts.jsx";
import Overview from "./Components/Overview/Overview.jsx";
import Reviews from "./Components/Reviews/Reviews.jsx";
import QA from "./Components/Question_Answers/qa.jsx";
import sampleQa from "./Components/Question_Answers/sampleQA.js";
import sampleMain from "../src/Components/Question_Answers/sampleMain.js";
import axios from "axios";
import { listQuestions, listProducts, listReviews } from "./lib/searchAPI.js";
import {
  productResponse,
  selectedProductId,
  productQ,
  catalog,
  showSeachModal,
  relatedSelector,
  relatedIDs,
  searchProductList,
  categoryProductsMain,
} from "./lib/Atoms.jsx";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import "./App.scss";
import ProductSearchModal from "./Components/productSearchModal.jsx";
// import Image from '../dist/img/hima-layers-logo.png';
// import Image from '../dist/img/R.jpg';

var App = () => {
  let [prod, setProd] = useRecoilState(productQ);
  let [pageView, setPageView] = useRecoilState(catalog);
  const productData = productResponse();

  let [selectedProductID, setCurrentProductId] =
    useRecoilState(selectedProductId);
  let [searchModal, setSearchModal] = useRecoilState(showSeachModal);
  let [searchedProduct, setSearchedProduct] = useRecoilState(searchProductList);
  let categoryByProduct = useRecoilValue(categoryProductsMain);
  //Retrieves data from the API and sets the products to state to render
  //pass the second argument so it doesnt create an infinite loop everytime this component renders
  useEffect(() => {
    setProd(productData);
  }, []);

  const searchingModal = (e) => {
    setSearchedProduct(e.target.value);
    if (e.target.value === "") {
      setSearchModal(false);
    }
  };

  const onSearchClick = () => {
    setSearchModal(true);
  };

  const productDisplay = () => {
    let categories = Object.keys(categoryByProduct);
    let categoryItems = Object.values(categoryByProduct);
    return {categories, categoryItems};
  };

  var changeView = (page) => {
    setPageView(page);
    setCurrentProductId(page);

    // if (pageView === "main") {
    //   return (
    //     <table>
    //       <tbody>
    //         {prod.map((product, i) => {
    //           return (
    //             <tr key={i}>
    //               <td
    //                 value={product.id}
    //                 onClick={(e) => {
    //                   changeView(e.target.attributes.value.value);
    //                 }}
    //               >
    //                 {product.name}
    //               </td>
    //               <td>{product.description}</td>
    //             </tr>
    //           );
    //         })}
    //       </tbody>
    //     </table>
    //   );
    // }
    if (pageView === 'main') {
      return (
        <div id="product-container">
          {productDisplay().categories.map((category, i) => {
            return (
              <label key={i} className="products">
                <span className="category-name">{category}</span>
                <div id="product-card" className={category}>
                <img className="product-img" max-width="300px" max-height="325px" src="../dist/img/R.jpg"></img>
                {productDisplay().categoryItems[i].map((item, j) => {
                    return (
                      <label key={j} className="dropdown-product" onClick={(e) => {changeView(item.id.toString())}}>
                        <div className={item.name}>{item.name}</div>
                      </label>
                    )
                  })}
                </div>
              </label>
            )
          })}
        </div>
      )
    } else if (pageView !== "main") {
      return (
        <div>
          <Overview productId={selectedProductID}/>
          <RelatedProducts />
          <QA />
          <Reviews />
        </div>
      );
    }
  };

  return (
    <div id="App">
      <div className="nav">
      <div
        id="logo"
        onClick={() => {
          changeView("main");
        }}
      ><img className="logo-img" src="../dist/img/hima-layers-logo.png" alt="Hima-Layers"></img>
      </div>
      <div>
        <input
          className="searchbar"
          type="search"
          placeholder="Product search..."
          onChange={(e) => {
            searchingModal(e);
          }}
          onClick={onSearchClick}
        ></input>
        <ProductSearchModal changeView={(page) => {changeView(page)}}/>
      </div>
      </div>
      <div className="main">{changeView(pageView)}</div>
    </div>
  );
};

export default App;
