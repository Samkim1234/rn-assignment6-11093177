import React, { useContext } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import { CartContext } from './CartContext';

const CartScreen = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalCost = cart.reduce((total, product) => {
    const price = parseFloat(product.price.replace('$', ''));
    return total + price;
  }, 0);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <View style={{ flex: 1 }} />

          <Image
            source={require('./assets/Logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={{ flex: 1 }} />

          <TouchableOpacity style={styles.searchButton}>
            <Image
              source={require('./assets/Search.png')}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.checkoutContainer}>
          <Text style={styles.checkoutText}>CHECKOUT</Text>
          <View style={styles.lineContainer}>
            <View style={styles.line} />
            <View style={styles.diamond} />
            <View style={styles.line} />
          </View>
        </View>

        {cart.map((product, index) => (
          <View style={styles.cartItem} key={index}>
            <Image
              source={product.image}
              style={styles.cartItemImage}
              resizeMode="contain"
            />
            <View style={styles.cartItemDetails}>
              <Text style={styles.cartItemTitle}>{product.title}</Text>
              <Text style={styles.cartItemDescription}>{product.description}</Text>
              <Text style={styles.cartItemPrice}>{product.price}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(product)} style={styles.removeButton}>
              <Image
                source={require('./assets/remove.png')}
                style={styles.removeButtonImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.estTotalText}>EST . TOTAL</Text>
          <Text style={styles.totalPriceText}>${totalCost.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Image
            source={require('./assets/shoppingBag.png')}
            style={styles.checkoutIcon}
            resizeMode="contain"
          />
          <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  scrollContainer: {
    paddingBottom: 120, 
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 40,
  },
  searchButton: {
    padding: 10,
    position: 'absolute', 
    right: 10, 
  },
  icon: {
    width: 25,
    height: 30,
  },
  checkoutContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  checkoutText: {
    fontSize: 24,
    fontFamily: 'serif',
    marginBottom: 10,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  diamond: {
    width: 10,
    height: 10,
    backgroundColor: 'gray',
    transform: [{ rotate: '45deg' }],
    marginHorizontal: 5,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  cartItemImage: {
    width: 100,
    height: 100,
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  cartItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemDescription: {
    fontSize: 14,
    color: 'gray',
  },
  cartItemPrice: {
    fontSize: 14,
    color: 'orange',
  },
  removeButton: {
    padding: 10,
  },
  removeButtonImage: {
    width: 30,
    height: 30,
    tintColor: 'red',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  estTotalText: {
    fontSize: 16,
    color: 'gray',
  },
  totalPriceText: {
    fontSize: 16,
    color: 'orange',
  },
  checkoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 15,
  },
  checkoutIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
    marginRight: 10,
  },
  checkoutButtonText: {
    fontSize: 16,
    fontFamily: 'serif',
    color: 'white',
  },
});

export default CartScreen;
