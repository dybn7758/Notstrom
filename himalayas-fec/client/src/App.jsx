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
} from "./lib/Atoms.jsx";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import "./App.scss";
import ProductSearchModal from "./Components/productSearchModal.jsx";

var App = () => {
  let [prod, setProd] = useRecoilState(productQ);
  let [pageView, setPageView] = useRecoilState(catalog);
  const productData = productResponse();

  let [selectedProductID, setCurrentProductId] =
    useRecoilState(selectedProductId);
  let [searchModal, setSearchModal] = useRecoilState(showSeachModal);

  //Retrieves data from the API and sets the products to state to render
  //pass the second argument so it doesnt create an infinite loop everytime this component renders
  useEffect(() => {
    setProd(productData);
  }, []);

  const searchingModal = (e) => {
    console.log(e.target.value);
    //set this to state to render all products with category
  };

  const onSearchClick = () => {
    console.log("hi");
    setSearchModal(true);
  };

  var changeView = (page) => {
    setPageView(page);
    setCurrentProductId(page);

    if (pageView === "main") {
      return (
        <table>
          <tbody>
            {prod.map((product, i) => {
              return (
                <tr key={i}>
                  <td
                    value={product.id}
                    onClick={(e) => {
                      changeView(e.target.attributes.value.value);
                    }}
                  >
                    {product.name}
                  </td>
                  <td>{product.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else if (pageView !== "main") {
      return (
        <div>
          {/* <Overview productId={selectedProductID} /> */}
          {/* <RelatedProducts /> */}
          <QA />
          <Reviews />
        </div>
      );
    }
  };

  return (
    <div id="App">
      <div
        id="logo"
        onClick={() => {
          changeView("main");
        }}
      >
        Hima-layers
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
        <ProductSearchModal />
      </div>
      <div className="main">{changeView(pageView)}</div>
    </div>
  );
};

export default App;
