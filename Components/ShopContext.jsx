const {datas, secnddatas} = require('../Components/Data');
import {useState, createContext, useEffect} from 'react';
import {useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

const allProdects = [...datas, ...secnddatas];

export const CartProvider = ({children}) => {
    const [user, setUser] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = productId => {
    const productToAdd = allProdects.find(product => product.id === productId);

    if (productToAdd) {
      const existingItems = cartItems.find(item => item.id === productId);
      if (existingItems) {
        setCartItems(prevCartItems =>
          prevCartItems.map(item =>
            item.id === productId
              ? {...item, quantity: item.quantity + 1}
              : item,
          ),
        );
      } else {
        setCartItems(prevCartItems => [
          ...prevCartItems,
          {...productToAdd, quantity: 1},
        ]);
      }
    }
  };

  const decreaseQuantity = productId => {
    setCartItems(prevCartItems =>
      prevCartItems
        .map(item =>
          item.id === productId
            ? {...item, quantity: Math.max(item.quantity - 1, 0)}
            : item,
        )
        .filter(item => item.quantity > 0),
    );
  };
  const totalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  // localstoragestarting..............................................................

  const saveCartToAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem('@MyCart:key', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart data: ', error);
    }
  };

  // Function to retrieve cart data from AsyncStorage
  const retrieveCartFromAsyncStorage = async () => {
    try {
      const storedCart = await AsyncStorage.getItem('@MyCart:key');
      if (storedCart !== null) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error('Error retrieving cart data: ', error);
    }
  };

  // localstorage
  // Load cart data from AsyncStorage when the component mounts
  useEffect(() => {
    retrieveCartFromAsyncStorage();
  }, []);

  // Save cart data to AsyncStorage whenever the cartItems state changes
  useEffect(() => {
    saveCartToAsyncStorage();
  }, [cartItems]);

  // locastorage.............................................................................

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        totalAmount,
        user,
        setUser,
      }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};
