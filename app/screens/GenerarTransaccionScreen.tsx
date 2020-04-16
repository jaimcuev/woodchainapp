import React, { useCallback, useEffect } from 'react';
import Container from '../components/Container';
import { useSelector, useDispatch } from 'react-redux';
import { loading, error } from '../actions/alerta.actions';
import { LocalToBlockchain, mergeData } from '../services/HelpfulFunctions';
import { Navigation } from 'react-native-navigation';

const GenerarTransaccionScreen = (props: any) => {
  const dispatch = useDispatch();
  const dataActividad = useSelector((state: any) => state.actividad.data);
  const formToValidate = useSelector((state: any) => state.actividad.formToValidate);
  const anexo = useSelector((state: any) => state.anexo.data.id);
  const errorAlerta = useCallback(
    (message: string, haveClose: boolean, options: any = []) => dispatch(error(message, haveClose, options)),
    [dispatch],
  );
  const loadingAlerta = useCallback(
    (message: string) => dispatch(loading(message)),
    [dispatch],
  );
  const estructurarData = (exclude: any = []) => {
    const keys = Object.keys(dataActividad);
    const result = {} as any;
    keys.forEach(mydata => {
      const metadata = dataActividad[mydata];
      const subkeys = Object.keys(metadata);
      result[mydata] = {};
      if( exclude.includes(mydata) ) {
        result[mydata] = metadata;
      } else {
        subkeys.forEach( subkey => {
          const submetadata = metadata[subkey];
          const localData = LocalToBlockchain(submetadata, subkey);
          result[mydata] = mergeData(result[mydata], localData);
        } );
      }
    });
    return result;
  };
  useEffect(() => {
    if( props.onPressEnviar ) {
      let _isDone = true;
      loadingAlerta('Enviando la transacción a la red.');
      const data = estructurarData(props.excludeEstructurar || []);
      formToValidate.forEach((element: any) => {
        _isDone = element.done;
      });
      if( _isDone ) {
        props.onPressEnviar(anexo, data);
      } else {
        errorAlerta('Deber terminar todas las actividades para poder generar la transacción.', false, [
          {
            name: 'Volver atras',
            onPress: () => Navigation.pop(props.componentId)
          }
        ]);
      }
    } else {
      errorAlerta('Se ha producido un error en la aplicación.', false, [
        {
          name: 'Volver atras',
          onPress: () => Navigation.pop(props.componentId)
        }
      ]);
    }
    return () => {
    }
  }, []);
  return (
    <Container>

    </Container>
  )
}

export default GenerarTransaccionScreen;
