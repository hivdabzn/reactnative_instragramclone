import {View, StyleSheet, ScrollView} from 'react-native';
import Story from './Story';
import stories from '../../utils/data/stories';

export default function Stories() {
  return (
    <View style={styles.stories}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {stories.map(story => (
          <Story story={story} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  stories: {
    paddingVertical: 10,
  },
});
