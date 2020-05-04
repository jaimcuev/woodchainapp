import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { FlatList } from 'react-native-gesture-handler';
import MyTable from './MyTable';
import MyTextInput from './MyTextInput';
import Title from './Title';
import MyButton from './MyButton';

const MyTableDataEntry = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [local, setLocal] = useState({} as any);

  const [dataEntry, setDataEntry] = useState([] as any);
  const [dataEntrySelected, setDataEntrySelected] = useState([] as any);

  const [name, setName] = useState('');
  const [texts, setTexts] = useState([] as any);

  const [enableDataEntry, setenableDataEntry] = useState(true);

  useEffect(() => {
    if( props.options && props.options.dataEntry ) {
      if( props.options.dataEntry ) {
        setTexts(props.options.dataEntry.texts);
      }
      if( props.options.dataEntry.endpoint ) {
        props.options.dataEntry.endpoint().then( (result: any) => {
          if( result.data ) {
            setDataEntry(result.data);
          }
        } );
      }
    }
    return () => {
      
    }
  }, []);

  useEffect(() => {
    setLocal(props.local);
    return () => {
    }
  }, [props.local]);

  const onPressAddItem = () => {
    setIsOpen(true);
  };

  const onPressCargarItems = () => {
    const _local = local;
    
    const keys = Object.keys(_local);
    
    let cantidadFilas = -1;
    keys.forEach(element => {
      if( element.includes(props.id) ) {
        const nrow = parseInt(element.replace(/[^0-9]/g, ''));
        if( nrow >= cantidadFilas ) cantidadFilas = nrow; 
      }
    });
    let newRows = cantidadFilas;
    
    const entry = props.options.dataEntry.entry;

    dataEntrySelected.forEach((element: any) => {
      newRows = newRows + 1;
      entry.forEach((_element: any) => {
        _local[`${_element.value}_${newRows}`] = { value: element[_element.key], type: "MyTable" };
      });
    });
    setLocal(_local);
    setIsOpen(false);
    setenableDataEntry(false);
  };

  const onPressItem = (item: any) => {
    const _dataEntrySelected = dataEntrySelected;
    const exist = _dataEntrySelected.find( (i: any) => i.id === item.id );
    if( exist ) {
      setDataEntrySelected( _dataEntrySelected.filter( (i: any) => i.id !== item.id ) );
    } else {
      setDataEntrySelected( [..._dataEntrySelected, item] );      
    }
  };

  const onPressCerrar = () => {
    setIsOpen(false);
  }

  return (
    <View>
      <MyTable 
        {...props} 
        local={local}
        dataEntry={enableDataEntry}
        onPressAddItem={onPressAddItem}
      />
      <Modal isVisible={isOpen} style={styles.modalContainerView}>
        <View style={styles.modalView}>
          <Title title={`Lista`} />
          <View style={styles.bodyView}>
            <MyTextInput placeholder={`Buscar por atributo...`} />
            <FlatList
              data={dataEntry}
              renderItem={({item}) => (
                <TouchableOpacity 
                  onPress={() => onPressItem(item)}
                  style={[
                    styles.itemDataEntry, 
                    dataEntrySelected.find( (i: any) => i.id === item.id ) && styles.selectedItem 
                  ]}>
                  { texts.map( (text: any, index: number) => {
                    return <Text key={index}>{text.name}: { item[text.value] || '' }</Text>
                  } ) }
                </TouchableOpacity>
              )}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(field: any) => field.id}
            />
          </View>
          <MyButton name="Cargar" onPress={onPressCargarItems} />
          <MyButton name="Cerrar" style={styles.closeButton} onPress={onPressCerrar} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainerView: {
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: "#ffffff",
    width: 600,
    height: "100%"
  },
  bodyView: {
    paddingHorizontal: 15,
    flex: 1
  },
  itemDataEntry: {
    borderColor: '#ededed',
    borderWidth: 1,
    marginBottom: 15,
    padding: 15
  },
  selectedItem: {
    borderColor: "#339989"
  },
  closeButton: {
    backgroundColor: "#666666"
  }
});

export default MyTableDataEntry;
