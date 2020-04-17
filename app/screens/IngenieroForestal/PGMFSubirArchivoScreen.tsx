import React from 'react';
import { View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import MyButton from '../../components/MyButton';

const PGMFSubirArchivoScreen = () => {
  const onPressSubirDocumento = async() => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.warn(
        res
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  return (
    <View>
      <MyButton name="Subir" onPress={onPressSubirDocumento} />
    </View>
  )
}

export default PGMFSubirArchivoScreen;
