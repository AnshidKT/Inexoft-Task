import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useCart} from './ShopContext';
const MyCart = ({navigation}) => {
  const {cartItems, addToCart, decreaseQuantity, totalAmount} = useCart();

  const renderItemButton = item => {
    const cartItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (cartItem) {
      return (
        <View
          style={{
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 28,
              height: 28,
              backgroundColor: '#800000',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => decreaseQuantity(item.id)}>
            <Text style={{fontSize: 15, color: 'white'}}>-</Text>
          </TouchableOpacity>
          <Text style={{color: 'black', fontSize: 18}}>
            {cartItem.quantity}
          </Text>
          <TouchableOpacity
            style={{
              width: 28,
              height: 28,
              backgroundColor: '#800000',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => addToCart(item.id)}>
            <Text style={{fontSize: 15, color: 'white'}}>+</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity style={styles.Add} onPress={() => addToCart(item.id)}>
          <Text style={{fontWeight: '900', fontSize: 18, color: 'white'}}>
            +
          </Text>
        </TouchableOpacity>
      );
    }
  };
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          height: 60,
          // backgroundColor: 'red',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={{marginLeft: 20, width: 35, height: 20}}
            source={require('../imgs/backarrow.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            marginLeft: 130,
            fontWeight: '900',
            fontSize: 18,
          }}>
          Cart
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '90%',
            height: '75%',
            backgroundColor: '#e6ffff',
            borderWidth: 1,
            borderColor: '#00994d',
            borderRadius: 10,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../imgs/discount.png')}
            style={{width: 20, height: 20, marginLeft: 10}}
          />
          <Text
            style={{
              fontSize: 12,
              color: '#008040',
              fontWeight: '700',
              marginLeft: 6,
            }}>
            100 Inexoft Coin{' '}
          </Text>
          <Text style={{fontSize: 12, color: '#00994d'}}>
            With Get Free Delivery
          </Text>
        </View>
      </View>
      {cartItems.length === 0 ? (
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: 310,
          }}>
          <Image
            source={require('../imgs/empty-cart.png')}
            style={{width: 160, height: 160}}
          />
        </View>
      ) : (
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            height: 300,
            // backgroundColor: 'yellow',
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              width: '90%',
              height: '100%',
              backgroundColor: 'white',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            {/* <Image
              style={{
                width: '90%',
                height: '90%',
                position: 'absolute',
                opacity: 0.2,
              }}
              source={require('../../imgs/cartoon.png')}
            /> */}
            <View>
              <ScrollView
                style={{
                  width: '100%',
                  height: '100%',
                }}>
                {cartItems.map(item => (
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      borderTopEndRadius: 10,
                      borderTopLeftRadius: 10,
                      height: 80,
                      backgroundColor: 'white',
                      alignItems: 'center',
                      borderBottomWidth: 0.3,
                      borderBottomColor: 'gray',
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        width: '20%',
                        height: '90%',
                        // backgroundColor: 'black',
                        alignItems: 'center',

                        justifyContent: 'center',
                      }}>
                      <Image
                        source={item.img}
                        style={{
                          width: '90%',
                          height: '90%',
                          borderRadius: 10,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        width: '39%',
                        height: '80%',
                        // backgroundColor: 'red',
                        // alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                      }}>
                      <Text
                        style={{
                          fontSize: 13,
                          marginLeft: 9,
                          fontWeight: '500',
                          color: 'black',
                        }}>
                        {item.name}
                      </Text>
                      <View
                        style={{
                          width: '30%',
                          height: '30%',
                          // backgroundColor: '#e6e6e6',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-around',
                          marginLeft: 10,
                        }}>
                        <Image
                          source={item.star}
                          style={{width: 12, height: 12}}
                        />
                        <Text style={{fontSize: 11, color: 'black'}}>
                          {item.rating}
                        </Text>
                      </View>
                      <Text style={{fontSize: 12, marginLeft: 10}}>
                        {item.brand}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '23%',
                        height: '90%',
                        // backgroundColor: 'blue',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      {renderItemButton(item)}
                    </View>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '15%',
                        height: '90%',
                        // backgroundColor: 'red',
                      }}>
                      <Text style={{fontSize: 16, color: 'green'}}>
                        ₹{item.price * item.quantity}
                      </Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      )}

      <View
        style={{
          alignItems: 'center',
          width: '100%',
          height: 70,
          // backgroundColor: 'red',

          justifyContent: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            width: '90%',
            height: '90%',
            backgroundColor: 'white',
            // borderWidth:0.2,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              // marginTop:20,
              color: 'black',
              marginLeft: 80,
            }}>
            Total Amount Your Cart
          </Text>

          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',

              fontWeight: '900',
              // marginRight:40,
              color: 'green',
              // marginTop:20,
              marginLeft: 10,
            }}>
            ₹ {totalAmount()}
          </Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          height: 70,
          // backgroundColor: 'blue',
        }}>
        <TouchableOpacity
          style={{
            width: 180,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ff6600',
            borderRadius: 20,
          }}>
          <Text style={{fontSize: 15, color: 'white', fontWeight: '600'}}>
            Order Now
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 150,
          // backgroundColor: 'red',
          width: '100%',
          justifyContent: 'center',
        }}>
        <View style={{marginLeft: 20}}>
          <Text style={{color: '#75787d', fontSize: 35, fontWeight: '700'}}>
            Live
          </Text>
          <Text style={{color: '#75787d', fontSize: 35, fontWeight: '700'}}>
            it up!
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 15}}>
          <Text style={{color: 'grey'}}>Crafted with</Text>
          <Image
            style={{width: 15, height: 15}}
            source={require('../imgs/heart.png')}
          />
          <Text style={{color: 'grey'}}>in Bengaluru,India</Text>
        </View>
      </View>
    </View>
  );
};
export default MyCart;

const styles = StyleSheet.create({});
