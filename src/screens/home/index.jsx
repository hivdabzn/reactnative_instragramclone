import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import Header from '../../components/home/Header';
import Stories from '../../components/home/Stories';
import Post from '../../components/uı/Post';
import posts from '../../utils/data/posts';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Stories />
        {posts?.map(post => (
          <Post key={post.id} post={post} />
        ))}
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
