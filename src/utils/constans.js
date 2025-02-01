import {Image, Dimensions} from 'react-native';

export default function FitImage({src}) {
  //* Pencerenin genişliğini dönderir
  const width = Dimensions.get('window').width;
  console.log(width);
  const ratio = 1080 / width;
  const height = 607 / ratio;
  return (
    <Image
      style={{
        width,
        height,
      }}
      source={{uri: src}}
    />
  );
}
