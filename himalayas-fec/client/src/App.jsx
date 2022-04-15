import React, { useEffect } from "react";
import RelatedProducts from "./Components/Related Products/RelatedProducts.jsx";
import Overview from "./Components/Overview/Overview.jsx";
import Reviews from "./Components/Reviews/Reviews.jsx";
import QA from "./Components/Question_Answers/qa.jsx";
import sampleQa from "./Components/Question_Answers/sampleQA.js";
import sampleMain from "../src/Components/Question_Answers/sampleMain.js";
import ModeSelector from "./Components/ModeControl/ModeSelector.jsx";
import "./Components/ModeControl/modeStyles.scss";
import axios from "axios";
import { listQuestions, listProducts, listReviews } from "./lib/searchAPI.js"; //this can be removed
import {
  productSelector,
  selectedProductId,
  productQ,
  catalog,
  showSeachModal,
  relatedSelector,
  relatedIDs,
  searchProductList,
  categoryProductsMain,
  clickListenerSelector,
  theme,
} from "./lib/Atoms.jsx";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import "./App.scss";
import ProductSearchModal from "./Components/productSearchModal.jsx";

var App = (props) => {
  const [themeMode, setThemeMode] = useRecoilState(theme);
  let [prod, setProd] = useRecoilState(productQ);
  let [pageView, setPageView] = useRecoilState(catalog);
  let productData = useRecoilValue(productSelector);
  let [selectedProductID, setCurrentProductId] =
    useRecoilState(selectedProductId);
  let [searchModal, setSearchModal] = useRecoilState(showSeachModal);
  let [searchedProduct, setSearchedProduct] = useRecoilState(searchProductList);
  let categoryByProduct = useRecoilValue(categoryProductsMain);
  let clickListener = useRecoilValue(clickListenerSelector);
  const apiCalls = require("./lib/searchAPI.js");
  //Retrieves data from the API and sets the products to state to render
  //pass the second argument so it doesnt create an infinite loop everytime this component renders
  useEffect(() => {
    setProd(productData);
  }, []);

  useEffect(() => {
    const bodyEl = document.querySelector("body");
    console.log("themeMode");
    themeMode ? bodyEl.classList.add("dark") : bodyEl.classList.remove("dark");
  }, [themeMode]);

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
    return { categories, categoryItems };
  };

  var changeView = (page) => {
    setPageView(page);

    setCurrentProductId(page);

    if (pageView === "main") {
      return (
        <div id="product-container">
          {productDisplay().categories.map((category, i) => {
            return (
              <label key={i} className="products">
                <span className="category-name">{category}</span>
                <div id="product-card" className={category}>
                  <img
                    className="product-img"
                    max-width="300px"
                    max-height="325px"
                    src="./img/R.jpg"
                  ></img>
                  {productDisplay().categoryItems[i].map((item, j) => {
                    return (
                      <label
                        key={j}
                        className="dropdown-product"
                        onClick={(e) => {
                          changeView(item.id.toString());
                        }}
                      >
                        <div className={item.name}>{item.name}</div>
                      </label>
                    );
                  })}
                </div>
              </label>
            );
          })}
        </div>
      );
    } else if (pageView !== "main") {
      return (
        <div>
          <Overview />
          <RelatedProducts props1={changeView} />
          <QA />
          <Reviews />
        </div>
      );
    }
  };

  return (
    <div id="App">
      <div className="nav">
        <ModeSelector themeMode={themeMode} />
        <div
          id="logo"
          onClick={() => {
            changeView("main");
          }}
        >
          <img
            className="logo-img"
            src="./img/hima-layers-logo.png"
            alt="Hima-Layers"
          ></img>
        </div>

        <div className="searchbar">
          <input
            className="searchbar"
            type="search"
            placeholder="Product search..."
            onChange={(e) => {
              searchingModal(e);
            }}
            onClick={onSearchClick}
          ></input>

          <ProductSearchModal
            changeView={(page) => {
              changeView(page);
            }}
          />
        </div>
      </div>
      <div className="main">{changeView(pageView)}</div>
    </div>
  );
};

export default App;
