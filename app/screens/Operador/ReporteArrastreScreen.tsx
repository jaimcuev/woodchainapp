import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigateTo } from '../../services/HelpfulFunctions';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Option from '../../components/Option';
import options from '../../models/ReporteArrastre';
import ActividadAcciones from '../../components/ActividadAcciones';

const ReporteArrastreScreen = (props: any) => {
  return (
    <Container style={styles.containerView}>
      <View style={styles.contentView}>
        <Title title="Información requerida" />
        <View style={styles.optionItemsView}>
          { options.map((option: any, index) => {
            return (
              <View key={option.number} style={[styles.optionContainerView]}>
                <Option
                  number={option.number}
                  title={option.title}
                  onPress={() =>
                    NavigateTo(props.componentId, option.screen, option.title)
                  }
                  subtitle={option.subtitle}
                  actionName={`Ingresar`}
                />
              </View>
            );
          }) }
        </View>
      </View>
      <View style={styles.sidebarView}>
        <Title title="Acciones" />
        <ActividadAcciones
          name={`Reporte de Arrastre`}
          componentId={props.componentId} 
          deleteActividad={props.deleteActividad}
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
    flexDirection: 'column',
    borderRightColor: '#ededed',
    borderRightWidth: 1,
    flex: 1
  },
  sidebarView: {
    width: "35%",
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

export default ReporteArrastreScreen;