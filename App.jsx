import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './src/router/bottomTabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}
