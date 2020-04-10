import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { setDataActividad } from '../actions/actividad.actions';

import MyTextInput from './MyTextInput';
import MyButton from './MyButton';
import MySelect from './MySelect';
import MyTable from './MyTable';
import MyMap from './MyMap';

const Formv3 = (props: any) => {
  const dispatch = useDispatch();
  const dataActividad = useSelector((state: any) => state.actividad.data);
  const storeDataActividad = useCallback(
    (data: any) => dispatch(setDataActividad(data)),
    [dispatch],
  );
  const [currentStep, setCurrentStep] = useState(0);
  const [localData, setLocalData] = useState({} as any);
  const [isFetch, setIsFetch] = useState(false);
  useEffect(() => {
    if ( props.formId ) {
      if ( dataActividad && dataActividad[props.formId] ) {
        setLocalData(dataActividad[props.formId]);
      }
      setIsFetch(true);
    } else {
      console.error(`No se ha establecido el formId para el formulario.`);
    }
  }, []);

  const onChange = (id: string, value: any, type: string) => {
    const _localData = localData as any;
    _localData[id] = { value: value, type: type };
    const store_data = mergeData(localData, _localData);
    setLocalData(store_data);
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
  
  const onPressSiguiente = () => {
    const maxStep = props.steps.length;
    const newStep = currentStep + 1;
    if (newStep < maxStep) {
      setCurrentStep(newStep);
    }
  };
  
  const onPressAtras = () => {
    const newStep = currentStep - 1;
    if (newStep >= 0) {
      setCurrentStep(newStep);
    }
  };

  const onPressGuardar = () => {
    if( props.formId ) {
      let _dataActividad = dataActividad || {};
      _dataActividad[props.formId] = localData;
      storeDataActividad(_dataActividad);
      Navigation.pop(props.componentId);
    } else {
      console.warn(`No se ha establecido el formId para el formulario.`);
    }
  };
  
  const renderComponent = (field: any) => {
    switch (field.component) {
      case 'MySelect':
        return (
          <MySelect 
            onChange={onChange} {...field} 
          />
        );
      case 'MyTable':
        return (
          <MyTable 
            onChange={onChange} 
            local={localData || {}} 
            {...field} 
          />
          );
      case 'MyMap':
        return (
          <MyMap 
            onChange={onChange} 
            defaultValue={localData && localData[field.id] && localData[field.id].value || []} 
            {...field} 
          />
        );
      default:
        return (
          <MyTextInput 
            onChange={onChange} 
            defaultValue={localData[field.id] && localData[field.id].value || ""} 
            {...field} 
          />
        );
    }
  };
  const renderFields = (fields: any, parent: boolean) => {
    return (
      <FlatList
        data={fields}
        renderItem={({item}) => (
          <View key={item.id}>
            {item.children ? (
              <View style={styles.childrenView}>
                <Text style={styles.labelChildrenText}>{item.name}</Text>
                {renderFields(item.children, false)}
              </View>
            ) : (
              renderComponent(item)
            )}
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(field: any) => field.id}
        ListFooterComponent={() => {
          if (parent) {
            return (
              <View style={styles.actionsView}>
                <MyButton
                  onPress={onPressGuardar}
                  style={[styles.actionView, { backgroundColor: "#999999" }]}
                  name="Continuar Luego"
                />
                {currentStep !== 0 && (
                  <MyButton
                    style={styles.actionView}
                    onPress={onPressAtras}
                    name="Atras"
                  />
                )}
                {currentStep !== props.steps.length - 1 && (
                  <MyButton
                    style={styles.actionView}
                    onPress={onPressSiguiente}
                    name="Siguiente"
                  />
                )}
                {currentStep === props.steps.length - 1 && (
                  <MyButton
                    onPress={onPressGuardar}
                    style={styles.actionView}
                    name="Guardar"
                  />
                )}
              </View>
            );
          } else {
            return <View></View>;
          }
        }}
      />
    );
  };
  return (
    <View style={styles.formView}>
      <View style={styles.stepsView}>
        {props.steps.map((step: any, index: number) => {
          return (
            <Text
              style={[
                styles.stepView,
                index === currentStep && styles.currentStepView,
              ]}
              key={step.id}>
              {index + 1}. {step.name}
            </Text>
          );
        })}
      </View>
      <View style={styles.fieldsView}>
        { isFetch && renderFields(props.steps[currentStep].fields, true) }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formView: {
    flex: 1,
  },
  parentTitle: {
    textTransform: 'uppercase',
    marginBottom: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666666',
  },
  scrollView: {
    flex: 1,
  },
  actionsView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  stepsView: {
    flexDirection: 'row',
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
  },
  stepView: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    fontWeight: 'bold',
    color: '#999',
    paddingHorizontal: 25,
    paddingVertical: 23,
  },
  currentStepView: {
    backgroundColor: '#94DA46',
    color: '#ffffff',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fieldsView: {
    padding: 30,
    flex: 1,
  },
  actionView: {
    marginLeft: 15,
  },
  labelChildrenText: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666666',
    position: 'absolute',
    left: 10,
    top: -10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  childrenView: {
    borderWidth: 1,
    borderColor: '#ededed',
    marginBottom: 20,
    marginTop: 10,
    padding: 20,
    position: 'relative',
    paddingBottom: 5,
    paddingTop: 25,
  },
});

export default Formv3;