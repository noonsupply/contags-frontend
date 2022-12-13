import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = console.log(value);

const HomeScreen = () => {


  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;