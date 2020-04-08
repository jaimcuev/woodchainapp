import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import { destoryAlerta } from '../actions/alerta.actions';
import MyButton from './MyButton';

const Alerta = (props: any) => {
  const renderIcon = (status: string) => {
    switch (status) {
      case "Error":
        return <FeatherIcon name="x-circle" size={60} color="#E83E3E" />
      case "Correcto":
        return <FeatherIcon name="check-circle" size={60} color="#34bfa3" />
      case "Cargando...":
        return <ActivityIndicator size="large" color="#02111B" />
      default:
        return <FeatherIcon name="alert-circle" size={60} color="black" />
    }
  };
  return (
    <Modal isVisible={props.isVisible}>
      { props.isVisible && <View style={styles.modalView}>
        <View style={styles.containerView}>
          <View style={styles.iconView}>
            { renderIcon(props.status) }
          </View>
          <Text style={styles.statusText}>{props.status}</Text>
          <Text style={styles.messageText}>{props.message}</Text>
          <View style={styles.optionsView}>
            { props.options.map( (option: any, index: number) => {
              return (
                <MyButton 
                  key={index}
                  onPress={option.onPress} 
                  name={option.name} 
                />
              )
            } ) }
            { props.haveClose && (
              <MyButton
                name="Entendido"
                onPress={props.onPressClose}
              />
            ) }
          </View>
        </View>
      </View>  }
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalView: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  containerView: {
    backgroundColor: "#ffffff",
    width: "50%",
    padding: 30
  },
  statusText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  messageText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
    color: '#999999'
  },
  optionsView: {
    marginTop: 30
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  }
});

const mapStateToProps = (state: any) => {
  const alerta = state.alerta;
  return {
    message: alerta.message,
    options: alerta.options,
    isVisible: alerta.isVisible,
    status: alerta.status,
    haveClose: alerta.haveClose
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onPressClose: () => {
      dispatch(destoryAlerta());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Alerta);