import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../Components/Header';
import RoundImageWithBackground from '../Components/RoundImageWithBackground';
import ActionMenu from 'react-native-circular-action-menu';

const data = [
  { id: '1', logo: require('../assets/location_icon.png'), text1: 'Tags', text2: 'Fun, Minimal, Attractive' },
  { id: '2', logo: require('../assets/location_icon.png'), text1: 'Location', text2: 'Any' },
  { id: '3', logo: require('../assets/location_icon.png'), text1: 'Category', text2: 'Logo design, Food and Beverage' },
  { id: '4', logo: require('../assets/location_icon.png'), text1: 'Posted on', text2: '08 Aug 2021' },
  { id: '5', logo: require('../assets/location_icon.png'), text1: 'Due on', text2: '08 Sep 2021' },
  { id: '6', logo: require('../assets/location_icon.png'), text1: 'Budget', text2: '$ 15,000' },
];
const ListItem = ({ item, index }) => {
  return (
    <View>
      <View style={styles.itemContainer}>
        {/* Left-side logo */}
        <Image source={item.logo} style={styles.logo} resizeMode="contain" />

        {/* Vertical texts */}
        <View style={styles.textContainer}>
          <Text style={styles.text1}>{item.text1}</Text>
          <Text style={styles.text2}>{item.text2}</Text>
        </View>

      </View>
      {/* for not showing line after last item */}
      {index !== data.length - 1 && <View style={styles.line} />}
    </View>
  );
};
const HustleScreen = ({ }) => {
  const handleActionClick = (action) => {
    console.log('Action Clicked:', action);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header
        title="Banglore"
        lefticon="location"
        righticon1="add-circle-outline"
        righticon2="notifications-outline"
      />
      {/* Your content goes here */}
      <View style={styles.logoView}>
        {/* Text */}
        <Text style={styles.logoText}>Logo Design Brief</Text>
        {/* Image */}
        <Image
          source={require('../assets/sound_image.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.mainText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.{'\n'}It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => <ListItem item={item} index={index} />}
        />
      </View>


      {/* <ActionButtonMultiple/> */}
      <View style={styles.Bcontainer}>
        {/* First Image */}
        <View style={styles.BimageContainer}>

          <ActionMenu
            active={false}
            buttonColor="#1c1d1f"
            bgColor="#1c1d1f"
            btnOutRange="rgba(158,158,158,1)"
            radius={80}
            position='right'
            icon={<Image source={require('../assets/users.png')} style={styles.actionimage} resizeMode="cover" />
            }
            onPress={handleActionClick}
          >
            <ActionMenu.Item
              text="Action 1"
              onPress={() => handleActionClick('Action 1')}
              buttonColor="#9b59b6"
              textContainerStyle={styles.actionTextContainer}
            >
              {/* <Icon name="glass" type="material" color="#FFFFFF" size={20} /> */}
              <Image source={require('../assets/home.png')} style={styles.actionimage} resizeMode="cover" />
            </ActionMenu.Item>
            <ActionMenu.Item
              text="Action 2"
              onPress={() => handleActionClick('Action 2')}
              buttonColor="#3498db"
              textContainerStyle={styles.actionTextContainer}
            >
              <Image source={require('../assets/notification.png')} style={styles.actionimage} resizeMode="cover" />

            </ActionMenu.Item>
            <ActionMenu.Item
              text="Action 3"
              onPress={() => handleActionClick('Action 3')}
              buttonColor="#1abc9c"
              textContainerStyle={styles.actionTextContainer}
            >
              <Image source={require('../assets/location_icon.png')} style={styles.actionimage} resizeMode="cover" />

            </ActionMenu.Item>

            <ActionMenu.Item
              text="Action 4"
              onPress={() => handleActionClick('Action 4')}
              buttonColor="#1abc9c"
              textContainerStyle={styles.actionTextContainer}
            >
              <Image source={require('../assets/feedback.png')} style={styles.actionimage} resizeMode="cover" />

            </ActionMenu.Item>

          </ActionMenu>
          <View style={{ marginTop: 45, justifyContent: 'center' }}>
            <Text style={styles.referText}>Refer</Text>
          </View>

        </View>

        {/* Second Image */}
        <View style={styles.BimageContainer}>
          <RoundImageWithBackground
            imageSource={require('../assets/plus.png')}
            size={60}
            backgroundColor="#1c1d1f"
          />
          <Text style={styles.Btext}>Hustl</Text>
        </View>
      </View>

      <View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c',
    paddingHorizontal: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    fontSize: 18,
    backgroundColor: '#FFF',
    color: 'black'
  },
  saveButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  logoView: {
    flexDirection: 'row', 
    alignItems: 'center',
    padding: 10,
    width: '100%',
    justifyContent: 'space-between'
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    tintColor: 'white'
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  mainText: {
    fontSize: 14,
    paddingHorizontal: 10,
    color: 'white'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 10,
    paddingHorizontal: 20,
    tintColor: 'white'
  },
  textContainer: {
    flexDirection: 'column',
  },
  text1: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D3D3D3'
  },
  text2: {
    fontSize: 16,
    color: 'white'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    marginHorizontal: 20
  },
  iconContainer: {
    flexDirection: 'row',

  },
  insideIconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 16,
    marginTop: 5,
  },
  referText: {
    marginBottom: -30,
    alignItems: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 16
  },
  Bcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 50
  },
  BimageContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  Bimage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  Btext: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  actionTextContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 20,
  },
  actionimage: {
    width: '60%',
    height: '60%',
    tintColor: 'white'
  },

});

export default HustleScreen;
