import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Container from '../../components/Container';
import { getEmpresasTaladoras } from '../../services/UsuarioService';
import Option from '../../components/Option';
import { setAnexo } from '../../actions/anexo.actions';
import { destoryAlerta, loading, error } from '../../actions/alerta.actions';

const RegistrarEmpresaTaladoraScreen = (props: any) => {
  const [empresas, setEmpresas] = useState([]);
  useEffect(() => {
    props.loadingAlerta("Evaluando transacción en la red.");
    getEmpresasTaladoras().then((result: any) => {
      if (result.status) {
        props.closeAlerta();
        setEmpresas(result.data);
      } else {
        props.errorAlerta(result.message);
      }
    });
    return () => {
    }
  }, []);
  const onPressRegistrarEmpresaTaladora = (empresa: any) => {
    // TODO: Se debe eliminar toda la data previa
    props.storeAnexo({ id: empresa.id });
    props.passEmpresa(empresa.id);
    Navigation.popToRoot(props.componentId);
  };
  return (
    <Container style={styles.containerView}>
      {empresas && empresas.length > 0 && empresas.map((empresa: any, index: number) => {
        return <Option
          key={empresa.id}
          number={index + 1}
          title={`${empresa.id}: ${empresa.nombre} ${empresa.apellidos}`}
          subtitle={`Documento de identidad: ${empresa.dni} - Dirección: ${empresa.direccion}`}
          onPress={() => onPressRegistrarEmpresaTaladora(empresa)}
          actionName={'Anexar'}
        />
      })}
    </Container>
  );
};

const styles = StyleSheet.create({
  containerView: {
    padding: 30
  }
});

const mapStateToProps = (state: any) => {
  return {}
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    storeAnexo: (data: any) => {
      dispatch(setAnexo(data))
    },
    errorAlerta: (message: string) => {
      dispatch(error(message))
    },
    loadingAlerta: (message: string) => {
      dispatch(loading(message))
    },
    closeAlerta: () => {
      dispatch(destoryAlerta())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrarEmpresaTaladoraScreen);