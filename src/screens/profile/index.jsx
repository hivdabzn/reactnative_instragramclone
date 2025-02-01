import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProfileBio from '../../components/profile/ProfileBio';
import ProfileStory from '../../components/profile/ProfileStory';
import posts from '../../utils/data/posts';

export default function ProfileScreen() {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 3;
  const imageSize = (screenWidth - (numColumns + 1) * 2) / numColumns;
  console.log(imageSize);

  const renderProps = ({item}) => (
    <TouchableOpacity activeOpacity={0.9}>
      <Image
        source={{uri: item.image}}
        style={{width: imageSize, height: imageSize, margin: 1}}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <ProfileHeader />
        <ProfileInfo />
        <ProfileBio />
        <ProfileStory />
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns}
          data={posts}
          renderItem={renderProps}
          contentContainerStyle={styles.photoGrid}
          style={{marginTop: 15}}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  photoGrid: {
    paddingHorizontal: 5,
  },
});
