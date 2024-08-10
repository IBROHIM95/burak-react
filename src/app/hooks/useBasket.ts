import { useState } from "react";
import { CartItem } from "../../lip/types/search";



const useBasket = () => {
    const cartJson: string | null = localStorage.getItem("cartData");
  const currentCart = cartJson ? JSON.parse(cartJson): [];
  const [cartItems, setCartItems] = useState<CartItem[]>(currentCart);

  // HANDLERS

  const onAdd = (input:CartItem) => {
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === input._id
    );
    if(exist) {
      const cartUpdate = cartItems.map((item: CartItem) => 
       item._id === input._id
       ? {...exist, quantity: exist.quantity + 1}
       : item
      );
      setCartItems(cartUpdate);
      localStorage.setItem('cartData', JSON.stringify(cartUpdate));
    }else{
      const cartUpdate = [...cartItems, {...input}];
      setCartItems(cartUpdate);
      localStorage.setItem('cartData', JSON.stringify(cartUpdate))
    }
  }
  const onRemove = (input: CartItem) => {
    const exist: any = cartItems.find(
        (item: CartItem) => item._id === input._id
    );
    if(exist.quantity === 1) {
        const cartUpdate = cartItems.filter(
            (item: CartItem) => item._id !== input._id
        );
        setCartItems(cartUpdate);
        localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    } else {
     const cartUpdate = cartItems.map((item: CartItem) => 
        item._id === input._id  
          ? {...exist, quantity: exist.quantity - 1}
          : item
     );
     setCartItems(cartUpdate);
     localStorage.setItem('cartData', JSON.stringify(cartUpdate))
    }
  }

  const onDelete = (input: CartItem) => {
    const cartUpdate = cartItems.filter(
        (item:CartItem) => item._id !== input._id
    );
    setCartItems(cartUpdate);
    localStorage.setItem('cardData', JSON.stringify(cartUpdate))
  };

  const DeleteAll = () => {
     setCartItems([]);
     localStorage.removeItem('cardData')
  }

  return {
    cartItems,
    onAdd,
    onRemove,
    DeleteAll,
    onDelete,
  }

  
}

export default useBasket