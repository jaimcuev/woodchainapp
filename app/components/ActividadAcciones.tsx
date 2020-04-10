import React from 'react';
import Option from './Option';
import { View, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { NavigateTo } from '../services/HelpfulFunctions';

const ActividadAcciones = (props: any) => {
  const onPressEnviar = () => {
    NavigateTo(props.componentId, 'GenerarTransaccionScreen', 'Enviando Transacción', {
      onPressEnviar: props.onPressEnviar,
      excludeEstructurar: props.excludeEstructurar || []
    });
  };
  const onPressEliminar = () => {
    props.deleteActividad();
    Navigation.popToRoot(props.componentId);
  };
  return (
    <View style={styles.optionContainerView}>        
      <Option
        title={`Enviar ${props.name}`}
        subtitle={`Envia todos los datos del ${props.name}. Una ves realizado, \nno se podra realizar ningun cambio.`}
        optionItemView={{flexDirection: 'column', alignItems: 'flex-start'}}
        buttonStyle={{ marginLeft: 15, marginTop: 15, backgroundColor: "#999999" }}
        onPress={onPressEnviar}
        actionName={'Generar transacción'}
      />
      <Option
        title={`Eliminar ${props.name}`}
        subtitle={`Elimina los datos registrados del ${props.name} hasta el momento. \nAsimismo, se eliminaran todos los datos de los arboles u trozas \nregistrados hasta el momento.`}
        optionItemView={{flexDirection: 'column', alignItems: 'flex-start'}}
        buttonStyle={{ marginLeft: 15, marginTop: 15, backgroundColor: "red" }}
        onPress={onPressEliminar}
        actionName={'Eliminar'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  optionContainerView: {
    width: '100%',
    paddingHorizontal: 20,
  }
});

export default ActividadAcciones;
