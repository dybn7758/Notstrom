import React, {useEffect} from 'react';
import { atom, useSetRecoilState, useRecoilState, selector, useRecoilValue } from 'recoil';
import { productQ, selectedProductId, showSeachModal } from '../lib/Atoms.jsx';
import './Styling/searchModal.scss';

var ProductSearchModal = () => {
  let [allProducts, setAllProducts] = useRecoilState(productQ);
  let [searchedProduct, setSearchedProduct] = useRecoilState(selectedProductId);
  let [useSearchModal, setUseSearchModal] = useRecoilState(showSeachModal);
  useEffect(() => {
    console.log(allProducts);
  })

  //define onProductSelection to disable modal and set state to the current product to render
  const translateToEng = (phrase) => {
    
  }

  if (useSearchModal) {
    return (
      <div className="searchModal">
        <div className="search-content">
          {allProducts.map((item) => {
            return (
              <div className="listed-content">
                <div className="listed-category">{item.category}</div>|<div className="listed-name">{item.name}</div>:<div className="listed-slogan" translate="yes" lang="en">{item.slogan}</div>
              </div>);
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