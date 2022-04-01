// import React from 'react';
// import RelatedModal from './RelatedModal.jsx';
// import {Star} from 'react-ionicons';
// import RelatedThumbs from './RelatedThumbs.jsx';
// import {useRecoilState} from 'recoil';
// // import {show} from '../../App.jsx';

// const Card = () => {

//   const [showValue, setShow] = useRecoilState(show);

//   const closeModal = () => {
//     setShow(['none']);
//   }
//   const showThumbs = () => {
//     console.log('hovering');
//     return (
//     <div><RelatedThumbs/></div>
//     )
//   }

//   return (
//     <div>
//       <div onMouseEnter={() => {console.log('mouse over!')}} onMouseLeave={() => {console.log('mouse left')}}
//       style={{ position: 'relative', backgroundColor: 'blue', width: 200, height: 225, zIndex: 1}} onClick={() => {
//       console.log('clicked picture')}}>
//       <Star style={{ position: 'absolute', top: 10, right: 10, zIndex: 2}} onClick={ () => {setShow(['block'])}}/>
//       </div>
//         <div style={{ position: 'relative', bottom: 0, backgroundColor: 'gray', width: 200, height: 100, alignItems: 'bottom'}}>
//           <h1 style={{ position: 'absolute', top: 0, left: 10, fontSize: 14}}>Category</h1>
//           <h1 style={{ position: 'absolute', top: 30, left: 10, fontSize: 14}}>$100.00</h1>
//           <h1 style={{ position: 'absolute', top: 15, left: 10, fontSize: 14}}>product</h1>
//       <div style={{ height: 20, width: 100, bottom: 10, left: 10, background: 'yellow', position: 'absolute'}}>Stars</div>
//       <RelatedModal/>
//       </div>
//     </div>
//   )
// }

// export default Card;

// // will be used to assemble individual product cards

// // should include

//   // Should be clickable
//     // Should pass off to product detail page
//       // Modal?  Jump to top of page?

//   // Image
//     // primary image of the product from overview
//       // upon hover a sub-carousel should load on the bottom of the image
//         // there should be 4 sub-images in the sub-carousel
//           // they should be able to be left/right scrolled with buttons
//           // clicking a thumbnail should change preview image
//             // selected image should persist after hover off
//         // list should disappear on hover-off
//     // Favorite 'Star'

//   // Footer with
//     // Category
//     // Product Name
//     // Price
//       // pricing by style?
//       // if on sale, should strikethrough OG price, list new price after
//     // Star Rating System
//       // total rating out of 5
//       // should be reflected by 5 partially filled stars
//         // rating should be rounded to nearest quarter rating point
//       // if there are no reviews, no stars shoul appear

// // When a carousel item is 'favorited' it should be added to 'outfit'
//   // same design as the carousel
//     // rendered dynamically by click
