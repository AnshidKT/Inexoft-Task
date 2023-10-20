import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {datas, secnddatas} from './Data';
import {useCart} from './ShopContext';

const Home = ({navigation}) => {
  const {addToCart, cartItems, user} = useCart();
  console.log(cartItems);

  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: 'white',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 29,
            letterSpacing: 5,
            fontWeight: 'bold',
            marginLeft: 25,
            color: 'black',
          }}>
          INE<Text style={{color: 'orange'}}>X</Text>OFT
        </Text>
        <TouchableOpacity >
          <View
            style={{
              width: 100,
              height: 60,
              flexDirection: 'column',
              // backgroundColor: 'red',
              alignItems: 'center',
            }}>
            <Image source={require('../imgs/person.png')} />
            <Text style={{fontWeight: 'bold', color: 'black'}}>{user}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: 100,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              width: '90%',
              height: '70%',
              backgroundColor: '#e6e6e6',
              borderRadius: 12,
            }}>
            <Image
              style={{width: 48, height: 48}}
              source={require('../imgs/discount-badge.png')}
            />
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'column',
                width: '68%',
                height: '100%',
                // backgroundColor: 'white',
              }}>
              <Text
                style={{
                  marginLeft: 15,
                  color: 'black',
                  fontSize: 16,
                  fontWeight: 500,
                }}>
                Offers upto 60% off
              </Text>
              <Text style={{marginLeft: 15, color: 'gray', fontSize: 12}}>
                Hot Deals, Flat Offers & more
              </Text>
            </View>
            <Image
              style={{width: 17, height: 17}}
              source={require('../imgs/rightarrow.png')}
            />
          </View>
        </View>

        <ScrollView horizontal>
          <View
            style={{
              width: 350,
              alignItems: 'center',
              justifyContent: 'center',
              height: 180,
              backgroundColor: 'white',
            }}>
            <Image
              style={{width: '90%', height: '100%', borderRadius: 10}}
              source={require('../imgs/banner-three.jpg')}
            />
          </View>
          <View
            style={{
              width: 350,
              alignItems: 'center',
              justifyContent: 'center',
              height: 180,
              backgroundColor: 'white',
            }}>
            <Image
              style={{width: '90%', height: '100%', borderRadius: 10}}
              source={require('../imgs/banner-two.jpg')}
            />
          </View>
          <View
            style={{
              width: 350,
              alignItems: 'center',
              justifyContent: 'center',
              height: 180,
              backgroundColor: 'white',
            }}>
            <Image
              style={{width: '89%', height: '100%', borderRadius: 10}}
              source={require('../imgs/banner-one.jpg')}
            />
          </View>
        </ScrollView>

        <View
          style={{
            width: '100%',
            height: 100,
            backgroundColor: 'white',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginBottom: 10,
              fontWeight: 500,
              marginLeft: 20,
              color: 'black',
              fontSize: 18,
            }}>
            Qick picks for you
          </Text>
          <View
            style={{
              marginLeft: 20,
              alignItems: 'center',
              justifyContent: 'center',
              width: '33%',
              height: '30%',
              backgroundColor: 'black',
              borderRadius: 30,
            }}>
            <Text style={{color: 'white', fontSize: 12}}>
              Lowest delivery fee
            </Text>
          </View>
        </View>

        <FlatList
          numColumns={3}
          data={datas}
          style={{backgroundColor: 'white'}}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => addToCart(item.id)}
              style={{
                marginTop: 0,
                width: 110,
                marginLeft: 3,
                marginRight: 3,
                height: 150,
                borderRadius: 10,
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  width: '100%',
                  height: '75%',
                  backgroundColor: 'black',
                  borderRadius: 10,
                  opacity: 1.1,
                }}>
                <Image
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: 20,
                    opacity: 0.7,
                    // backgroundColor: 'black',
                  }}
                  source={item.img}
                />
                <View
                  style={{
                    justifyContent: 'space-between',
                    width: '100%',
                    height: '100%',

                    borderRadius: 20,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: '30%',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}>
                    <Image style={{marginRight: 7}} source={item.love} />
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '50%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{color: 'white', fontSize: 18, fontWeight: 800}}>
                      {item.offer}
                    </Text>
                    <Text
                      style={{color: 'white', fontWeight: 400, fontSize: 10}}>
                      {item.upto}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: '100%',
                  height: '20%',
                  // backgroundColor: 'yellow',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 600,
                    color: 'black',
                    fontSize: 14,
                  }}>
                  {item.name}
                </Text>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: '50%',
                      justifyContent: 'space-evenly',
                      flexDirection: 'row',
                    }}>
                    <Image style={{width: 11, height: 11}} source={item.star} />
                    <Image style={{width: 11, height: 11}} source={item.star} />
                    <Image style={{width: 11, height: 11}} source={item.star} />
                    <Image style={{width: 11, height: 11}} source={item.star} />
                  </View>

                  <Text style={{color: 'black', fontSize: 11, fontWeight: 500}}>
                    {item.rating}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 50,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              width: '90%',
              height: '100%',
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#cccccc',
              // backgroundColor: 'yellow',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '80%',
                height: '100%',
                flexDirection: 'row',
                // backgroundColor: 'red',
              }}>
              <Text style={{color: '#ff751a', fontWeight: 700}}>
                see more restaurants
              </Text>
            </TouchableOpacity>
            <Image
              style={{width: 13, height: 13, marginLeft: -30}}
              source={require('../imgs/orange-arrow.png')}
            />
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: 'white',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 19,
              marginLeft: 20,
              fontWeight: 800,
            }}>
            Restaurants to explore
          </Text>
        </View>

        <View style={{width: '100%', height: 650, backgroundColor: 'white'}}>
          <FlatList
            data={secnddatas}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => addToCart(item.id)}
                style={{
                  width: '100%',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  height: 140,
                  // backgroundColor: 'yellow',
                  marginTop: 20,
                }}>
                <View
                  style={{
                    width: '35%',
                    height: '100%',
                    backgroundColor: 'white',
                    justifyContent: 'space-between',
                    backgroundColor: 'black',
                    borderRadius: 10,
                    opacity: 1.1,
                  }}>
                  <Image
                    source={item.img}
                    style={{
                      width: '100%',
                      opacity: 0.7,
                      height: '100%',
                      borderRadius: 10,
                      position: 'absolute',
                    }}
                  />
                  <View
                    style={{
                      width: '100%',
                      height: '30%',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}>
                    <Image style={{marginRight: 7}} source={item.love} />
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: '50%',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-end',
                      // backgroundColor:'red'
                    }}>
                    <Text
                      style={{
                        marginLeft: 10,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      {item.offer}
                    </Text>
                    <Text
                      style={{
                        color: 'white',
                        marginLeft: 10,
                        marginBottom: 10,
                        fontWeight: 900,
                        fontSize: 10,
                      }}>
                      {item.upto}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    width: '40%',
                    height: '80%',
                    // backgroundColor: 'white',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                  }}>
                  <Text style={{fontSize: 17, color: 'black'}}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      width: '80%',
                      height: '20%',
                      // backgroundColor: 'gray',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        width: '55%',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{width: 15, height: 15}}
                        source={item.star}
                      />
                      <Image
                        style={{width: 15, height: 15}}
                        source={item.star}
                      />
                      <Image
                        style={{width: 15, height: 15}}
                        source={item.star}
                      />
                      <Image
                        style={{width: 15, height: 15}}
                        source={item.star}
                      />
                    </View>
                    <Text
                      style={{fontSize: 14, color: 'black', fontWeight: 900}}>
                      {item.rating}
                    </Text>
                  </View>
                  <Text style={{color: '#a6a6a6'}}>{item.brand}</Text>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      width: '80%',
                      justifyContent: 'space-evenly',
                      height: 25,
                      backgroundColor: '#f0e6ff',
                      borderRadius: 13,
                    }}>
                    <Image
                      source={require('../imgs/delivery-man.png')}
                      style={{width: 17, height: 17}}
                    />
                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: '900',
                        color: '#751aff',
                      }}>
                      FREE DELEVERY
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View
          style={{
            backgroundColor: '#e6e6e6',
            height: 350,
            width: '100%',
            // justifyContent: 'center',
          }}>
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#75787d', fontSize: 75, fontWeight: '700'}}>
              Live
            </Text>
            <Text style={{color: '#75787d', fontSize: 75, fontWeight: '700'}}>
              it up!
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 15}}>
            <Text style={{color: 'grey'}}>Crafted with</Text>
            <Image
              style={{width: 17, height: 17}}
              source={require('../imgs/heart.png')}
            />
            <Text style={{color: 'grey'}}>in Anshid KT</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
