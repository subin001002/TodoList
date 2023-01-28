import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';
import TaskModal from '../components/TaskModal';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <TodoItem title="abcdefg" done={true} />
        <TodoItem title="ㄱㄴㄷㄹ" done={false} />
        <TaskModal isVisible={false} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
