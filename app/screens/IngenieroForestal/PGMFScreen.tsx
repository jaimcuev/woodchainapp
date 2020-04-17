import React from 'react';
import {View, StyleSheet} from 'react-native';
import Container from '../../components/Container';
import Title from '../../components/Title';
import ActividadAcciones from '../../components/ActividadAcciones';
import options from '../../models/PGMF';
import { NavigateTo } from '../../services/HelpfulFunctions';
import Option from '../../components/Option';

const PGMFScreen = (props: any) => {
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
          componentId={props.componentId}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'row'
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
  },
  optionItemsView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexWrap: 'wrap',
  },
  optionContainerView: {
    width: '100%'
  },
});

export default PGMFScreen;
