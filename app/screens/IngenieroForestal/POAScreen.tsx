import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';
import { connect } from 'react-redux';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Option from '../../components/Option';
import { NavigateTo, LocalToBlockchain } from '../../services/HelpfulFunctions';
import { getFormsStorage, deleteFormsStorage } from '../../services/FormService';
import { getArboles, eliminarActividad, eliminarArboles } from '../../services/IFService';
import { Navigation } from 'react-native-navigation';
import { createPOA } from '../../services/POAService';
import { createArbol } from '../../services/ArbolService';

const POAScreen = (props: any) => {
  const options = [
    {
      number: 1,
      title: 'Información general',
      subtitle: 'Subtitulo de la accion',
      actionName: 'Iniciar',
      id: 'POAInformacionGeneral',
      screen: 'POAInformacionGeneralScreen'
    },
    {
      number: 2,
      title: 'Información basica',
      subtitle: 'Subtitulo de la accion',
      actionName: 'Iniciar',
      id: 'POAInformacionBasica',
      screen: 'POAInformacionBasicaScreen'
    },
    {
      number: 3,
      title: 'Plan de aprovechamiento',
      subtitle: 'Subtitulo de la accion',
      actionName: 'Iniciar',
      id: 'POAPlanAprovechamiento',
      screen: 'POAPlanAprovechamientoScreen'
    },
    {
      number: 4,
      title: 'Plan silvicultural',
      subtitle: 'Subtitulo de la accion',
      actionName: 'Iniciar',
      id: 'POAPlanSilvicultural',
      screen: 'POAPlanSilviculturalScreen'
    },
  ];
  const [isFetch, setIsFetch] = useState(false);
  const [procesOptions, setProcesOptions] = useState(options);
  
  useNavigationComponentDidAppear(e => {
    const formsIds = options.map( item => item.id );
    getFormsStorage( formsIds, (result: any) => {
      setIsFetch(true);
      const data = procesOptions.map( (item: any) => {
        item.data = result[item.id] || {};
        item.actionName = result[item.id] ? 'Continuar' : 'Iniciar';
        return item;
      } )
      setProcesOptions(data);
    } );
    return () => {
    }
  }, props.componentId);

  const onPressEliminar = () => {
    const formsIds = options.map( item => item.id );
    deleteFormsStorage(formsIds, () => {
      eliminarActividad('POA').then( () => {
        Navigation.popToRoot(props.componentId);
      } )
    });
  };
  const onPressEnviar = () => {
    if( !props.empresa ) {
      console.error("NO HAY EMPRESA ANEXADA");
    } else {
      let blockchain_result = {} as any;
      procesOptions.forEach( (papi_item: any) => {
        const keys = Object.keys(papi_item.data);
        let papi_result = {};
        blockchain_result[papi_item.id] = {};
        keys.forEach( mydata => {
          const metadata = papi_item.data[mydata];
          const localData = LocalToBlockchain(metadata, mydata);
          papi_result = mergeData(papi_result, localData);
        } );
        papi_item.blockchainData = papi_result;
        blockchain_result[papi_item.id] = papi_result;
        return papi_result;
      } );
      getArboles().then( arboles => {
        if( arboles ) {
          const papi_arboles = [] as any;
          arboles.forEach((element: any) => {
            const keys = Object.keys(element);
            let arbolito = {} as any;
            keys.forEach( mydata => {
              const metadata = element[mydata];
              const localData = LocalToBlockchain(metadata, mydata);
              arbolito = mergeData(arbolito, localData);
            } );
            papi_arboles.push(arbolito);
          });
          const usuarioId = props.usuario.id;
          if( usuarioId ) {
            blockchain_result['POAInformacionGeneral']['ingenieroForestal']['usuarioId'] = usuarioId;
            blockchain_result['parentUsuario'] = props.empresa;
            console.warn(blockchain_result);
            createPOA(blockchain_result).then( resultado => {
              if( resultado.status ) {
                const poaId = resultado.data;
                const god_arboles = papi_arboles.map( (item: any) => {
                  item.poaId = poaId;
                  return item;
                } );
                //let contador_arbolitos = 0;
                const registrarArboles = (data: any, callback: Function, index = 0) => {
                  const baby_arbol = data[index];
                  console.log(baby_arbol);
                  createArbol(baby_arbol).then( (respuestica) => {
                    if( data.length - 1 === index ) {
                      callback();
                    } else {
                      registrarArboles( data, callback, index + 1 );
                    }
                  } );
                }
                registrarArboles(god_arboles, () => {
                  const formsIds = options.map( item => item.id );
                  deleteFormsStorage(formsIds, () => {
                    eliminarActividad('POA').then( () => {
                      eliminarArboles().then( () => {
                        Navigation.popToRoot(props.componentId);
                      } )
                    } )
                  });
                });
              }
            } );
          }
        } else {
          console.error("NO HAY ARBOLES");
        }
      } );
    }
  };
  const mergeData = (og: any, so: any) => {
    for (let key in so) {
      if (typeof og[key] === 'object') {
        mergeData(og[key], so[key]);
      } else {
        og[key] = so[key];
      }
    }
    return og;
  }
  return (
    <Container style={styles.containerView}>
      <View style={styles.contentView}>
        <Title title="Información requerida" />
        { isFetch && <View style={styles.optionItemsView}>
          {procesOptions.map((option: any, index) => {
            return (
              <View key={option.number} style={[styles.optionContainerView]}>
                <Option
                  number={option.number}
                  title={option.title}
                  onPress={() =>
                    NavigateTo(props.componentId, option.screen, option.title, { data: option.data })
                  }
                  subtitle={option.subtitle}
                  actionName={option.actionName}
                />
              </View>
            );
          })}
        </View> }
      </View>
      <View style={styles.sidebarView}>
        <Title title="Acciones" />
        <Option
          title={'Enviar POA'}
          subtitle={'Envia todos los datos del POA. Una ves realizado, \nno se podra realizar ningun cambio.'}
          optionItemView={{flexDirection: 'column', alignItems: 'flex-start'}}
          buttonStyle={{ marginLeft: 15, marginTop: 15, backgroundColor: "#999999" }}
          onPress={onPressEnviar}
          actionName={'Generar transacción'}
        />
        <Option
          title={'Eliminar POA'}
          subtitle={'Elimina los datos registrados del POA hasta el momento. \nAsimismo, se eliminaran todos los datos de los arboles \nregistrados hasta el momento.'}
          optionItemView={{flexDirection: 'column', alignItems: 'flex-start'}}
          buttonStyle={{ marginLeft: 15, marginTop: 15, backgroundColor: "red" }}
          onPress={onPressEliminar}
          actionName={'Eliminar'}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'row'
  },
  optionItemsView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexWrap: 'wrap',
  },
  optionContainerView: {
    width: '100%',
    paddingHorizontal: 20,
  },
  contentView: {
    flex: 1,
    flexDirection: 'column',
    borderRightColor: '#ededed',
    borderRightWidth: 1,
  },
  sidebarView: {
    width: '35%',
    flexDirection: 'column',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 2,
  }
});

const mapStateToProps = (state: any) => {
  return {
    usuario: state.usuario.data,
    empresa: state.anexo.id
  }
}

export default connect(mapStateToProps)(POAScreen);