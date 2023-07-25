// Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ title, lefticon, righticon1, righticon2}) => {
  return (
    <View style={styles.header}>

        <TouchableOpacity style={{flexDirection:'row'}}>
          <Icon name={lefticon} size={25} color="white" style={styles.icon} />
               
             <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      


        <View style={{flexDirection:'row'}}>
            <Icon name={righticon1} size={25} color="white" style={styles.icon} />
          <Icon name={righticon2} size={25} color="white" style={styles.icon} />
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,

    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default Header;
