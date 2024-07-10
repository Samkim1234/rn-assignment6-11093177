import React, { useContext } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import { CartContext } from './CartContext';

const products = [
  { image: require('./assets/dress1.png'), title: 'Office Wear', description: 'Reversible Angora Cardigan', price: '$120' },
  { image: require('./assets/dress2.png'), title: 'Black', description: 'Reversible Angora Cardigan', price: '$130' },
  { image: require('./assets/dress3.png'), title: 'Elegant Black Dress', description: 'Reversible Angora Cardigan', price: '$140' },
  { image: require('./assets/dress4.png'), title: 'Classic Peach Dress', description: 'Reversible Angora Cardigan', price: '$150' },
  { image: require('./assets/dress5.png'), title: 'Modern Black Dress', description: 'Reversible Angora Cardigan', price: '$160' },
  { image: require('./assets/dress6.png'), title: 'Trendy jade Dress', description: 'Reversible Angora Cardigan', price: '$170' },
  { image: require('./assets/dress7.png'), title: 'Casual Cream Dress', description: 'Reversible Angora Cardigan', price: '$180' },
  { image: require('./assets/dress3.png'), title: 'Elegant Oil Black Dress', description: 'Reversible Angora Cardigan', price: '$190' },
];

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.menuButton}>
          <Image
            source={require('./assets/Menu.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Image
          source={require('./assets/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.searchButton}>
          <Image
            source={require('./assets/Search.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bagButton} onPress={() => navigation.navigate('Cart')}>
          <Image
            source={require('./assets/shoppingBag.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.row, styles.secondRow]}>
        <Text style={styles.ourStoryText}>OUR STORY</Text>

        <View style={[styles.circleContainer, styles.listContainer]}>
          <TouchableOpacity style={styles.smallIconButton}>
            <Image
              source={require('./assets/Listview.png')}
              style={styles.smallIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.circleContainer}>
          <TouchableOpacity style={styles.smallIconButton}>
            <Image
              source={require('./assets/Filter.png')}
              style={styles.smallIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      {Array.from({ length: 4 }).map((_, rowIndex) => (
        <View style={styles.imageRow} key={rowIndex}>
          {[0, 1].map((colIndex) => {
            const productIndex = rowIndex * 2 + colIndex;
            const product = products[productIndex];
            return (
              <View style={styles.imageContainer} key={productIndex}>
                <View style={styles.imageWrapper}>
                  <Image
                    source={product.image}
                    style={styles.largeImage}
                    resizeMode="contain"
                  />
                  <TouchableOpacity style={styles.addButton} onPress={() => addToCart(product)}>
                    <Image
                      source={require('./assets/add_circle.png')}
                      style={styles.addButtonImage}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.productDescription}>{product.description}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
              </View>
            );
          })}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 40,
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  secondRow: {
    marginTop: 10,
    alignItems: 'center',
  },
  menuButton: {
    padding: 10,
    marginRight: 30,
    marginLeft: -5,
  },
  searchButton: {
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  bagButton: {
    padding: 10,
    marginRight: 10,
  },
  icon: {
    width: 25,
    height: 30,
  },
  logo: {
    width: 150,
    height: 40,
  },
  ourStoryText: {
    fontFamily: 'serif',
    fontSize: 30,
    marginLeft: 18,
  },
  circleContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  smallIcon: {
    width: 20,
    height: 20,
  },
  smallIconButton: {
    padding: 10,
  },
  listContainer: {
    marginLeft: 70,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  imageContainer: {
    alignItems: 'center',
    width: '48%', 
    position: 'relative', 
  },
  imageWrapper: {
    width: '100%',
    position: 'relative',
  },
  largeImage: {
    width: '100%', 
    height: 200,
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 30, 
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonImage: {
    width: '100%',
    height: '100%',
    tintColor: 'black',
    marginRight:30,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productDescription: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginTop: 2,
  },
  productPrice: {
    fontSize: 14,
    color: 'orange',
    marginTop: 2,
  },
});

export default HomeScreen;