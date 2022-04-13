import React, { useEffect } from "react";
import {
  atom,
  useSetRecoilState,
  useRecoilState,
  selector,
  useRecoilValue,
} from "recoil";
import {
  productQ,
  selectedProductId,
  showSeachModal,
  filterSearchProductSelector,
  catalog,
} from "../lib/Atoms.jsx";
import "./Styling/searchModal.scss";
import { changeView } from "../App.jsx";

var ProductSearchModal = (props) => {
  // let [allProducts, setAllProducts] = useRecoilState(productQ);
  let [searchedProduct, setSearchedProduct] = useRecoilState(selectedProductId);
  let [useSearchModal, setUseSearchModal] = useRecoilState(showSeachModal);
  let filteredSearch = useRecoilValue(filterSearchProductSelector);
  let [pageView, setPageView] = useRecoilState(catalog);

  // useEffect(() => {
  //   // console.log(allProducts);
  // });

  const productSearchClick = (e) => {
    props.changeView(e.target.id);
    setUseSearchModal(false);
  };

  if (useSearchModal) {
    return (
      <div className="searchModal">
        <div className="search-content">
          {filteredSearch.map((item, i) => {
            return (
              <div
                key={i}
                id={item.id}
                className="listed-content"
                onClick={(e) => {
                  productSearchClick(e);
                }}
              >
                <div id={item.id} className="listed-category">
                  {item.category}
                </div>
                |
                <div className="listed-name" id={item.id}>
                  {item.name}
                </div>
                |
                <div
                  id={item.id}
                  className="listed-slogan"
                  translate="yes"
                  lang="en"
                >
                  {item.slogan}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ProductSearchModal;

// campus: "hr-rfe"
// category: "Hoodie"
// created_at: "2021-08-13T14:37:33.285Z"
// default_price: "996.00"
// description: "Est deleniti consectetur amet alias accusantium dolorum. Sunt voluptate alias molestiae sunt. Voluptatibus molestiae repellendus est doloremque est dolores iste."
// id: 37388
// name: "Araceli Hoodie"
// slogan: "Est vitae ullam et exercitationem dolores assumenda explicabo ducimus."
// updated_at: "2021-08-13T14:37:33.285Z"
