import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView
} from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import backgroundimg from '../assets/backgroundimg.jpg';
import bg from '../assets/bg.jpg';
import snapdragon from '../assets/snapdragon.jpg';
import pineapple from '../assets/pineapple.jpg';
import pineberry from '../assets/pineberry.jpg';
import greenhouseplant from '../assets/greenhouseplant.jpg';

class MyPlants extends Component {
  static navigationOptions = {
    header: null,
    headerTransparent: true,
    drawerIcon: ({ tintColor }) => {
      <Icon
        name="burger"
        style={{ fontSize: 24, backgroundColor: 'white' }}
      ></Icon>;
    }
  };
  state = {
    isLoading: true,
    plants: [
      { name: 'Aloe', image: greenhouseplant },
      { name: 'Snapdragon', image: snapdragon },
      { name: 'Pineapple', image: pineapple },
      { name: 'Pineberry', image: pineberry }
    ]
  };
  render() {
    const { navigate, openDrawer } = this.props.navigation;
    const { plants } = this.state;
    return (
      <>
        <ImageBackground source={backgroundimg} style={styles.background}>
          <ScrollView>
            <Header
              style={{
                margin: 'auto',
                backgroundColor: 'transparent',
                opacity: 1,
                marginTop: 40
              }}
            >
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 24,
                    color: 'white'
                  }}
                >
                  Reactor Grow
                </Text>
              </View>
              <Right>
                <Icon
                  name="menu"
                  style={{ color: 'white' }}
                  onPress={() => openDrawer()}
                />
              </Right>
            </Header>
            <View>
              <View style={styles.button}>
                <TouchableOpacity disabled={true}>
                  <Text style={styles.buttonText}>Add New Plant</Text>
                </TouchableOpacity>
              </View>
              <View>
                <View style={styles.currentPlant}>
                  <Text
                    style={{
                      margin: 30,
                      color: 'white',
                      fontSize: 24,
                      fontWeight: 'bold',
                      borderColor: 'transparent',
                      borderBottomColor: 'lightgrey',
                      borderWidth: 1
                    }}
                  >
                    My Plants
                  </Text>

                  <View style={styles.plants}>
                    <View style={styles.plants}>
                      <Text
                        style={styles.text}
                        onPress={() =>
                          navigate('Garden', { image: plants[0].image })
                        }
                      >
                        {plants[0].name}
                      </Text>
                      <Image
                        source={plants[0].image}
                        style={styles.image}
                      ></Image>
                    </View>
                    <View style={styles.plants}>
                      <Text
                        style={styles.text}
                        onPress={() =>
                          navigate('Garden', { image: plants[1].image })
                        }
                      >
                        {plants[1].name}
                      </Text>
                      <Image
                        source={plants[1].image}
                        style={styles.image}
                      ></Image>
                    </View>
                    <View style={styles.plants}>
                      <Text
                        style={styles.text}
                        onPress={() =>
                          navigate('Garden', { image: plants[2].image })
                        }
                      >
                        {plants[2].name}
                      </Text>
                      <Image
                        source={plants[2].image}
                        style={styles.image}
                      ></Image>
                    </View>
                    <View style={styles.plants}>
                      <Text
                        style={styles.text}
                        onPress={() =>
                          navigate('Garden', { image: plants[3].image })
                        }
                      >
                        {plants[3].name}
                      </Text>
                      <Image
                        source={plants[3].image}
                        style={styles.image}
                      ></Image>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  background: { width: '100%', height: '100%' },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'white'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  currentPlant: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  plants: {
    margin: 20
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'black',
    fontSize: 24,
    fontWeight: 'bold'
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: '35%'
  }
});

export default MyPlants;
