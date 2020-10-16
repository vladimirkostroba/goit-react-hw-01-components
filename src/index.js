import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';





// function Product({ imgUrl, name, price }) {
//     return (
//         <div>
//             <img src={imgUrl} width="640" alt={name} />
//             <h2>{name}</h2>
//             <p>{price}</p>
//             <button type="button">Add to cart</button>
//         </div>
//     );
// }

// function App() {
//     return (
//         <>
//             <h1>Best saling products</h1>
//             <Product
//                 imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//                 name="Tacos With Lime"
//                 price={10.99}
//             />

//             <Product
//                 imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//                 name="Fries and Burger"
//                 price={14.29}
//             />
//         </>
//     );
// }

ReactDom.render(<App />, document.querySelector('#root'));
