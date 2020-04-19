import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import * as RNFS from 'react-native-fs';
import MyButton from '../../components/MyButton';
import Container from '../../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { setDataActividad } from '../../actions/actividad.actions';
import { Navigation } from 'react-native-navigation';

const PGMFSubirArchivoScreen = (props: any) => {
  const dispatch = useDispatch();
  const dataActividad = useSelector((state: any) => state.actividad.data);
  const storeDataActividad = useCallback(
    (data: any) => dispatch(setDataActividad(data)),
    [dispatch],
  );

  const [fileName, setFileName] = useState('');
  const [fileContent, setFileContent] = useState('');
  const [canUpload, setCanUpload] = useState(false);

  useEffect(() => {
    if( !dataActividad['documento'] ) {
      setCanUpload( true );
    } else {
      setFileName( dataActividad['documento']['name'] );
    }
    return () => {
    }
  }, []);

  const onPressBuscarDocumento = async() => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf]
      });
      const filePath = res.uri;
      setFileName(res.name);
      RNFS.readFile(filePath, 'base64').then(_fileContent => {
        setFileContent(_fileContent);
      })
      .catch(err => {
        console.warn(err.message, err.code);
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

  const onPressSubirDocumento = () => {
    if( fileName && fileContent ) {
      const _dataActividad = dataActividad;
      _dataActividad['documento'] = {
        name: fileName,
        content: fileContent
      };
      storeDataActividad(_dataActividad);
      Navigation.pop(props.componentId);
    }
  };

  return (
    <Container style={styles.containerView}>
      <Text style={styles.titleText}>Adjuntar documento</Text>
      <Text style={styles.fileNameText}>Nombre del archivo: { fileName || '-' }</Text>
      <MyButton name="Buscar documento" onPress={onPressBuscarDocumento} />
      { canUpload && <MyButton 
        name="Cargar documento" 
        style={styles.subirButton}
        onPress={onPressSubirDocumento} />}
    </Container>
  )
}

const styles = StyleSheet.create({
  containerView: {
    padding: 30
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  fileNameText: {
    marginBottom: 10
  },
  subirButton: {
    marginTop: 10
  }
});

export default PGMFSubirArchivoScreen;
