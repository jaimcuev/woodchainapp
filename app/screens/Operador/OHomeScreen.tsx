import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';
import Container from '../../components/Container';
import Option from '../../components/Option';
import Title from '../../components/Title';
import { NavigateTo } from '../../services/HelpfulFunctions';
import { getPOA, getReporte, registrarReporte } from '../../services/OService';

const OHomeScreen = (props: any) => {
  const [POAID, setPOAID] = useState("");
  const [reporteActivo, setReporteActivo] = useState("");
  useNavigationComponentDidAppear(e => {
    getPOA().then( poaId => {
      if( !poaId ) {
      } else {
        setPOAID(poaId);
        getReporte().then( reporte => {
          if( reporte ) {
            setReporteActivo(reporte);
          } else {
            setReporteActivo("");
          }
        } );
      }
    } );
  }, props.componentId);
  const onPressReporteTala = () => {
    if( reporteActivo === "" ) {
      registrarReporte('ReporteTala').then( status => {
        if( status ) {
          NavigateTo(props.componentId, 'ReporteTalaScreen', 'Reporte de Tala', { poaId: POAID });
        };
      } )
    }
    if( reporteActivo === "ReporteTala" ) {
      NavigateTo(props.componentId, 'ReporteTalaScreen', 'Reporte de Tala', { poaId: POAID });
    }
  };
  const onPressReporteArrastre = () => {
    if( reporteActivo === "" ) {
      registrarReporte('ReporteArrastre').then( status => {
        if( status ) {
          NavigateTo(props.componentId, 'ReporteArrastreScreen', 'Reporte de Arrastre');
        };
      } );
    }
    if( reporteActivo === "ReporteArrastre" ) {
      NavigateTo(props.componentId, 'ReporteArrastreScreen', 'Reporte de Arrastre');
    }
  };
  const onPressReportePatio = () => {
    if( reporteActivo === "" ) {
      registrarReporte('ReportePatio').then( status => {
        if( status ) {
          NavigateTo(props.componentId, 'ReportePatioScreen', 'Reporte de Patio');
        };
      } );
    }
    if( reporteActivo === "ReportePatio" ) {
      NavigateTo(props.componentId, 'ReportePatioScreen', 'Reporte de Patio');
    }
  };
  const onPressRegistrarPOA = () => {
    NavigateTo(props.componentId, 'RegistrarPOAScreen', 'Registrar POA');
  };
  const onPressGTF = () => {
    NavigateTo(props.componentId, 'GTFScreen', 'Guia de Transporte Forestal');
  };
  return (
    <Container style={styles.containerView}>
      <View style={styles.optionsView}>
        <Title title="Reportes" />
        <View style={styles.optionItemsView}>
          <Option
            number={2}
            title={'Plan general de manejo forestal'}
            subtitle={'Subtitulo de la accion'}
            actionName={'Iniciar'}
          />
          <Option
            number={1}
            title={'Reporte de Tala'}
            subtitle={'Subtitulo de la accion'}
            onPress={onPressReporteTala}
            actionDisabled={ (POAID === "" || reporteActivo !== "ReporteTala") && reporteActivo !== "" }
            actionName={reporteActivo === "ReporteTala" ? 'Continuar' : 'Iniciar'}
          />
          <Option
            number={2}
            title={'Reporte de Arrastre'}
            subtitle={'Subtitulo de la accion'}
            onPress={onPressReporteArrastre}
            actionDisabled={ (POAID === "" || reporteActivo !== "ReporteArrastre") && reporteActivo !== "" }
            actionName={reporteActivo === "ReporteArrastre" ? 'Continuar' : 'Iniciar'}
          />
          <Option
            number={3}
            title={'Reporte de Patio'}
            subtitle={'Subtitulo de la accion'}
            onPress={onPressReportePatio}
            actionDisabled={ (POAID === "" || reporteActivo !== "ReportePatio") && reporteActivo !== "" }
            actionName={reporteActivo === "ReportePatio" ? 'Continuar' : 'Iniciar'}
          />
          <Option
            number={4}
            title={'Guia de Transporte Forestal'}
            subtitle={'Subtitulo de la accion'}
            onPress={onPressGTF}
            actionName={'Iniciar'}
          />
        </View>
      </View>
      <View style={styles.badgesView}>
        <Title title="Accesos Directos" />
        <View style={styles.optionItemsView}>
          <Option
            number={1}
            title={'Registrar POA'}
            subtitle={'Subtitulo de la accion'}
            onPress={onPressRegistrarPOA}
            actionName={ POAID === "" ? 'Ingresar' : 'Modificar' }
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'row',
  },
  badgesView: {
    width: '35%',
    flexDirection: 'column'
  },
  optionItemsView: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  optionsView: {
    flex: 1,
    flexDirection: 'column',
    borderRightColor: '#ededed',
    borderRightWidth: 1,
  },
});

export default OHomeScreen;
