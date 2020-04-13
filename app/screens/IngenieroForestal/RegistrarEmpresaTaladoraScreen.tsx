import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { FlatList } from 'react-native-gesture-handler';
import Container from '../../components/Container';
import { getEmpresasTaladoras } from '../../services/UsuarioService';
import Option from '../../components/Option';
import { destoryAlerta, loading, error } from '../../actions/alerta.actions';
import MyTextInput from '../../components/MyTextInput';

const RegistrarEmpresaTaladoraScreen = (props: any) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [empresas, setEmpresas] = useState([]);
  const [visibleEmpresas, setVisibleEmpresas] = useState([]);
  const errorAlerta = useCallback(
    (message: string) => dispatch(error(message)),
    [dispatch],
  );
  const loadingAlerta = useCallback(
    (message: string) => dispatch(loading(message)),
    [dispatch],
  );
  const closeAlerta = useCallback(
    () => dispatch(destoryAlerta()),
    [dispatch],
  );
  useEffect(() => {
    loadingAlerta("Evaluando transacción en la red.");
    getEmpresasTaladoras().then((result: any) => {
      if (result.status) {
        closeAlerta();
        setEmpresas(result.data);
        setVisibleEmpresas(result.data);
      } else {
        errorAlerta(result.message);
      }
    });
  }, []);
  const onPressRegistrarEmpresaTaladora = (empresa: any) => {
    // TODO: Se debe eliminar toda la data previa
    props.passEmpresa(empresa.id);
    Navigation.popToRoot(props.componentId);
  };
  const onSearch = (id: string, text: string) => {
    setSearch(text);
    const searchResults = empresas.filter( ( empresa: any ) => empresa.id.includes(text) );
    setVisibleEmpresas(searchResults);
  };
  return (
    <Container>
      <View style={styles.searchView}>
        <MyTextInput 
          placeholder={'Código de la empresa...'} 
          value={search} 
          onChange={onSearch} />
      </View>
      <View style={styles.contentView}>
        <FlatList
          data={visibleEmpresas}
          renderItem={({ item }) => (
            <Option
              title={`${item.id}: ${item.nombre} ${item.apellidos}`}
              subtitle={`Documento de identidad: ${item.dni} - Dirección: ${item.direccion}`}
              onPress={() => onPressRegistrarEmpresaTaladora(item)}
              actionName={'Anexar'}
            />
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(field: any) => field.id}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentView: {
    paddingHorizontal: 15
  },
  searchView: {
    paddingHorizontal: 15
  }
});

export default RegistrarEmpresaTaladoraScreen;