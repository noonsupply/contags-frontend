import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { logout } from "../reducers/users";
import { logoutContact } from "../reducers/contacts";

import TagSearchBar from "../components/TagSearchBar";
import ContactCard from "../components/ContactCard";

export default function HomeScreen({ navigation }) {
  const addContact = useSelector((state) => state.contacts.value);
  const dispatch = useDispatch();

  // gestion de la déconnexion
  const handleLogout = () => {
    dispatch(logout());
    dispatch(logoutContact());
    navigation.navigate("MailScreen");
  };

  // événement quand on presse le bouton recherche : on navigue vers la page des onglets en leur transmettant les données (en attente d'un reducer non persistant)
  const handleBtnSearch = (datasFromSearchBar) => {
    navigation.navigate("HomeRechercheScreen", {
      searching: datasFromSearchBar.searching,
      contactsMatchAllTags: datasFromSearchBar.results.contactsMatchAllTags,
      contactsAnyTags: datasFromSearchBar.results.contactsAnyTags,
    });
  };

  // fonction gérant la navigation lorsqu'on presse sur un contact
  const handleNavigateContactScreen = (theLastName, theFirstName) => {
    navigation.navigate("ContactsScreen", {
              lastName: theLastName,
              firstName: theFirstName,
            })
  }

  // gestion de l'affichage des contacts
  let contacts = <View><Text>Aucun contact trouvé</Text></View>;
  if(addContact){ 
    contacts = addContact.map((data, i) => {
      return ( <ContactCard lastName = {data.lastName} firstName = {data.firstName} goToContactScreen={handleNavigateContactScreen} key={i}/>
              );
    });
}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.header, { zIndex: 1 }]}>
        <TouchableOpacity onPress={() => handleLogout()}>
          <Text style={styles.deco}>
            <Feather name="log-out" size={24} color="black" />
          </Text>
        </TouchableOpacity>
        {/* BARRE DE RECHERCHE */}
        <TagSearchBar btnSearch={handleBtnSearch} tagsSearching={[]} />
      </View>
      {/* Liste des contacts */}
      <ScrollView>
        <View style={styles.contactContainer}>
          <View style={styles.container}>{contacts}</View>
        </View>
      </ScrollView>
      {/* Bouton + (ajout d'un contact) */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.addManually}
          onPress={() => navigation.navigate("ContactAddManually")}
        >
          <Text style={styles.txtBtnAjouter}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  deco: {
    position: "absolute",
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 0,
  },
  addManually: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0031b8",
    height: 50,
    width: 50,
    marginLeft: "75%",
    marginBottom: "15%",
    borderRadius: 50,
  },

  txtBtnAjouter: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },

  contactContainer: {
    flex: 1,
  },

  btnContainer: {
    width: 150,
    height: 80,
    marginLeft: 200,
    backgroundColor: "blue",
  },

  footer: {
    position: "absolute",
    top: "92%",
    left: "13%",
  },
  header: {
    backgroundColor: "#ffffff",
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
});
