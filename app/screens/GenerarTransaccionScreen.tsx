import React, { useCallback, useEffect } from 'react';
import Container from '../components/Container';
import { useSelector, useDispatch } from 'react-redux';
import { loading, error } from '../actions/alerta.actions';
import { LocalToBlockchain } from '../services/HelpfulFunctions';

const GenerarTransaccionScreen = (props: any) => {
  const dispatch = useDispatch();
  const dataActividad = useSelector((state: any) => state.actividad.data);
  const anexo = useSelector((state: any) => state.anexo.data.id);
  const errorAlerta = useCallback(
    (message: string) => dispatch(error(message)),
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
          result[mydata] = localData;
        } );
      }
    });
    return result;
  };
  useEffect(() => {
    if( props.onPressEnviar ) {
      loadingAlerta('Enviando la transacción a la red.');
      const data = estructurarData(props.excludeEstructurar || []);
      props.onPressEnviar(anexo, data);
    } else {
      errorAlerta('Se ha producido un error en la aplicación');
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
