// import { CartProps } from "../types/types";
// import deleteCommandInCart from "./deleteCommandInCart";

// export const PostItemToApi = async (cartProducts: CartProps[]) => {
//   try {
//     const response = await fetch('http://localhost:3000/items', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(cartProducts)
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log('Se ha enviado el array de objetos:', data);

//       const deletePromises = cartProducts.map((product) => deleteCommandInCart(product.commandId));
//       await Promise.all(deletePromises);
//     } else {
//       throw new Error('Error en la solicitud POST');
//     }
//   } catch (error) {
//     console.error('Error al enviar el array de objetos:', error);
//   }
// };

import { CartProps } from "../types/types";
import deleteCommandInCart from "./deleteCommandInCart";

export const PostItemToApi = async (cartProducts: CartProps[]) => {
  try {
    for (const product of cartProducts) {
      const response = await fetch('http://localhost:3000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Se ha enviado el objeto:', data);

        await deleteCommandInCart(product.commandId);
      } else {
        throw new Error('Error en la solicitud POST');
      }
    }
  } catch (error) {
    console.error('Error al enviar los objetos:', error);
  }
};







// import { CartProps } from "../types/types";
// import deleteCommandInCart from "./deleteCommandInCart";


// export const PostItemToApi = async ( cartProducts: CartProps[] ) => {

//     console.log (cartProducts.length)

//     cartProducts.map ( (product) => {
//         fetch('http://localhost:3000/items', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(product)
//         })
//         .then( response => response.json() )
//         .then( data => {
//           console.log('Si ha llegado el array de objetos:', data);
        
//         deleteCommandInCart (product.commandId);
        
//         })
//         .catch(error => {
//           console.error('No ha llegado el array de objetos:', error);
//         });
//     });
// };






// import { CartProps } from "../types/types";
// import deleteCommandInCart from "./deleteCommandInCart";


// export const PostItemToApi = async ( cartProducts: CartProps[] ) => {

//     try {
//         const requests = cartProducts.map ( (product) => {
//             return fetch('http://localhost:3000/items', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(product)
//             });
//         });

//         const responses = await Promise.all(requests);

//         if (responses.every( (response) => response.ok)) {
            
//             const data = await Promise.all(responses.map((response) => response.json()));
    
//             console.log ('Ha sido enviado el array de objetos:', data);
        
//             const deletePromises = cartProducts.map( (product) => deleteCommandInCart(product.commandId));
//             await Promise.all(deletePromises);
//         }else {
//             throw new Error("Parte enviando las solicitudes");
//         }
    
//     }
    
//     catch (error) {
//         console.error("Error while sending object array:", error);
//     }
// };