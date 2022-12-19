import { useState } from 'react';
import { ImageBackground, Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
//import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Tag from "../components/Tag";

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateContact, setContags } from '../reducers/contacts';

export default function App() {
  // const [dataSet, setDataSet] = useState([]);
  // const [citiesData, setCitiesData] = useState([]);

   const contacts = useSelector((state) => state.contacts.value);
   const dispatch = useDispatch();

   useEffect(() => {
    const indexContact = contacts.findIndex(elt => elt.lastName === "Giroud" && elt.firstName === "Rania");
    if(indexContact !==-1){
      dispatch(setContags(contacts));
    //   dispatch(updateContact({index : indexContact, newDatas: {lastName : "Giroud", firstName : "Nico", 
    //   emails:[{emailType:"essai", email:"test@"}],
    //   phones:[{phoneType:"mobile", number : "01", country:"Chine", areaCode : ""}, {phoneType:"home", number : "07", country:"Tunisie", areaCode : ""}]
    // }}))
       console.log("done")
    }else{
      console.log('non trouvé')
    }
    
  },[]);

  // const searchCity = (query) => {
  //   // Prevent search with an empty query
  //   if (query === '') {
  //     return;
  //   }


  //       setDataSet([{id: 0, title : "Nico" },
  //     {id : 1, title : "Esssai"}]);
  // };

  // const cities = citiesData.map((data, i) => {
  //   return (
  //     <View key={i} style={styles.resultContainer}>
  //       <MaterialCommunityIcons name="map-marker-check" size={30} color="#51e181" />
  //       <View>
  //         <Text style={{ ...styles.resultText, ...styles.resultTitle }}>{data.title}</Text>
  //         <Text style={styles.resultText}>{data.context}</Text>
  //       </View>
  //     </View>
  //   );
  // });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Where are we going?</Text>
      {/* <AutocompleteDropdown
        onChangeText={(value) => searchCity(value)}
        onSelectItem={(item) => item && setCitiesData([...citiesData, item])}
        dataSet={dataSet}
        renderItem={({ item, text }) => (
          <TouchableOpacity onPress={() => handleTagPress(item)}>
            <Tag tag={{title : item, color : "blue", border : "none"}} />
          </TouchableOpacity>
        )}
        textInputProps={{ placeholder: 'Search city' }}
        inputContainerStyle={styles.inputContainer}
        containerStyle={styles.dropdownContainer}
        suggestionsListContainerStyle={styles.suggestionListContainer}
        closeOnSubmit
      /> */}

      <ScrollView style={styles.scrollContainer}>
        <Text>ceci est un essai 1 </Text>
        <Text>ceci est un essai 2 </Text>
        <Text>ceci est un essai 3 </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 25,
    paddingTop: 50,
  },
  scrollContainer: {
    width: '100%',
  },
  dropdownContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#51e181',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 50,
    color: '#51e181',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
    marginBottom: 15,
  },
  suggestionListContainer: {
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  resultContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 6,
    padding: 20,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#51e181',
    borderWidth: 1,
  },
  resultText: {
    textAlign: 'right',
  },
  resultTitle: {
    fontWeight: 'bold',
  },
});
