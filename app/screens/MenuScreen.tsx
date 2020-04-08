import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MenuOption from '../components/MenuOption';
import InternetStatus from '../components/InternetStatus';
import { navigateGuest } from '../screens';
import { connect } from 'react-redux';
import { destroyUsuario } from '../actions/usuario.actions';

const MenuScreen = (props: any) => {
  const onPressLogOut = () => {
    props.logoutUsuario();
    navigateGuest();
  };
  return (
    <View style={styles.menuView}>
      <View style={styles.headerView}>
        <View style={styles.iconView}>
          <View style={styles.iconContainerView}>
            <FeatherIcon name="user" size={20} />
          </View>
          <InternetStatus />
        </View>
        <View>
          <Text style={styles.usernameText}>
            {`${props.usuario.nombre} ${props.usuario.apellidos}`}
          </Text>
          <Text style={styles.smallText}>{props.usuario.rol}</Text>
        </View>
      </View>
      <View style={styles.optionsView}>
        <MenuOption text="Cerrar Sesión" icon="log-out" onPress={onPressLogOut} />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.smallText}>Versión 0.1.5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   menuView: {
    backgroundColor: "#ffffff",
    width: 350,
    height: "100%",
    flexDirection: "column"
   },
   bottomView: {
    borderTopColor: "#ededed",
    borderTopWidth: 1,
    padding: 20,
   },
   headerView: {
     borderBottomColor: "#ededed",
     borderBottomWidth: 1,
     padding: 20,
     flexDirection: "row",
     alignItems: "center"
   },
   iconView: {
    marginRight: 15
   },
   iconContainerView: {
    backgroundColor: "#ededed",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
   },
   usernameText: {
    fontWeight: "bold",
    fontSize: 16
   },
   smallText: {
     color: "#999999",
     fontSize: 12
   },
   optionsView: {
     flex: 1,
     padding: 20
   }
});

const mapStateToProps = (state: any) => {
  return {
    usuario: state.usuario.data
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    logoutUsuario: () => {
      dispatch(destroyUsuario())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);
