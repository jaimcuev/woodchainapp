import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MyButton from './MyButton';

const MyTable = (props: any) => {
  const [rows, setRows] = useState(1);
  const onPressAnadir = () => {
    setRows(rows + 1);
  };
  
  const onPressAnadirDataEntry = () => {
    if( props.onPressAddItem ) {
      props.onPressAddItem();
    }
  };

  useEffect(() => {
    const id = props.id;
    const keys = Object.keys(props.local);
    let max = 0;

    keys.forEach(name => {
      if( name.includes(id) ) {
        var matches = name.match(/(\d+)/);
        if( matches && matches.length > 0 ) {
          const number = parseInt(matches[0]);
          if( number > max ) {
            max = number;
          }
        } 
      }
    });
    setRows(max + 1);
    return () => {
    }
  }, [ Object.keys(props.local) ]);

  return (
    <View style={styles.textinputView}>
      <View style={styles.headerView}>
        <Text style={styles.labelText}>{props.name}</Text>
        {!(props.options.max_rows && props.options.max_rows == 1) && (
          <MyButton
            onPress={onPressAnadir}
            name={'Añadir fila'}
            style={styles.anadirButton}
          />
        )}
        { props.dataEntry && ( <MyButton
            onPress={onPressAnadirDataEntry}
            name={'Añadir item'}
            style={styles.anadirButton}
          /> ) }
      </View>
      <View style={styles.tableView}>
        <View style={[styles.tableRowView, styles.tableHeaderView]}>
          {props.options.columns &&
            props.options.columns.length > 0 &&
            props.options.columns.map((column: any, index: number) => {
              return (
                <View
                  style={[
                    styles.tableItemRowView,
                    index === 0 && styles.tableFirstItemRowView,
                    {width: 100 / props.options.columns.length + '%'},
                    column.subcolumns &&
                      column.subcolumns.length > 0 && {paddingHorizontal: 0},
                  ]}
                  key={index}>
                  <Text style={[styles.tableItemText]}>{column.name}</Text>
                  <View style={styles.tableRowView}>
                    {column.subcolumns &&
                      column.subcolumns.length > 0 &&
                      column.subcolumns.map(
                        (subcolumn: any, sindex: number) => {
                          return (
                            <View
                              style={[
                                styles.tableItemRowView,
                                styles.tableSubItemRowView,
                                sindex === 0 && styles.tableFirstItemRowView,
                                {width: 100 / column.subcolumns.length + '%'},
                              ]}
                              key={sindex}>
                              <Text style={styles.tableItemText}>
                                {subcolumn.name}
                              </Text>
                            </View>
                          );
                        },
                      )}
                  </View>
                </View>
              );
            })}
        </View>
        {[...Array(rows)].map((x, i) => (
          <View
            style={[styles.tableRowView, styles.tableRowContentView]}
            key={i}>
            {props.options.columns &&
              props.options.columns.length > 0 &&
              props.options.columns.map((column: any, index: number) => {
                return (
                  <View
                    style={[
                      styles.tableItemRowView,
                      index === 0 && styles.tableFirstItemRowView,
                      {width: 100 / props.options.columns.length + '%'},
                    ]}
                    key={index}>
                    {column.subcolumns && column.subcolumns.length > 0 ? (
                      <View style={styles.tableRowView}>
                        {column.subcolumns.map(
                          (subcolumn: any, sindex: number) => {
                            return (
                              <View
                                style={[
                                  styles.tableItemRowView,
                                  sindex === 0 && styles.tableFirstItemRowView,
                                  {
                                    width: 100 / column.subcolumns.length + '%',
                                    height: 60,
                                  },
                                ]}
                                key={sindex}>
                                <TextInput
                                  key={sindex}
                                  placeholder="Escribir aqui..."
                                  defaultValue={props.local && props.local[`${subcolumn.id}_${i}`] && props.local[`${subcolumn.id}_${i}`].value || ""}
                                  onChangeText={(text: string) =>
                                    props.onChange &&
                                    props.onChange(`${subcolumn.id}_${i}`, text, 'MyTable')
                                  }
                                />
                              </View>
                            );
                          },
                        )}
                      </View>
                    ) : (
                      <View
                        style={[
                          styles.tableItemRowView,
                          styles.tableFirstItemRowView,
                        ]}>
                        <TextInput
                          style={styles.textInput}
                          placeholder="Escribir aqui..."
                          defaultValue={props.local && props.local[`${column.id}_${i}`] && props.local[`${column.id}_${i}`].value || ""}
                          onChangeText={(text: string) =>
                            props.onChange && props.onChange(`${column.id}_${i}`, text, 'MyTable')
                          }
                        />
                      </View>
                    )}
                  </View>
                );
              })}
            <TextInput />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelText: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666666',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textinputView: {
    marginBottom: 20,
  },
  tableView: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#ededed',
    backgroundColor: 'white',
    borderBottomWidth: 0,
  },
  tableRowView: {
    flexDirection: 'row',
  },
  tableItemRowView: {
    borderLeftColor: '#ededed',
    borderLeftWidth: 1,
    height: '100%',
    paddingHorizontal: 15,
  },
  tableSubItemRowView: {
    borderTopColor: '#ededed',
    borderTopWidth: 1,
  },
  tableHeaderView: {
    backgroundColor: '#F7F8FA',
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  tableItemText: {
    marginVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableFirstItemRowView: {
    borderLeftWidth: 0,
  },
  tableRowContentView: {
    height: 60,
    alignItems: 'center',
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
  },
  textInput: {
    height: 60,
  },
  anadirButton: {
    height: 30,
    backgroundColor: '#999999',
    marginLeft: 20,
  },
});

export default MyTable;
