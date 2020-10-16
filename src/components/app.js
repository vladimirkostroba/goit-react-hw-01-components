import React from 'react';
// import Product from './product.js';
import Section from './section/section';
import Profile from './Profile/profile'

import user from './Profile/user.json';



// export default function App() {
//     return (
//         <>
// <h1>welcome!</h1>
// <Section title = 'Best saling products'>
// <Product
//                 // imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//                 name="Tacos With Lime"
//                 price={10.99}
//             />
// </Section>
     
// <Section title = "Recomended">
//      <Product
//                 imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//                 name="Fries and Burger"
//                 price={14.29}
//             />
// </Section>

//         </>
        
//     );
// }

function App() {
    return(
        <Section>
            <Profile {...user}/>
        </Section>
            
        
    )
}

export default App