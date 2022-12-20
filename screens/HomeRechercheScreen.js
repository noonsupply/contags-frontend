import * as React from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function TabViewExample() {
  const TablA = [
    { lastName: "Wayne", firstName: "Rania" },
    { lastName: "Papin", firstName: "Yasmine" },
    { lastName: "François", firstName: "Paul" },
    { lastName: "Gump", firstName: "Lucas" },
    { lastName: "Al-Khwarizmi", firstName: "Nicolas" },
    { lastName: "Giroud", firstName: "Josettte" },
    { lastName: "Al-Khwarizmi", firstName: "Hélène" },
    { lastName: "Camus", firstName: "Pierre" },
    { lastName: "Wayne", firstName: "Julien" },
    { lastName: "Camus", firstName: "Léa" },
    { lastName: "Green", firstName: "Noémie" },
    { lastName: "Turing", firstName: "Patrice" },
    { lastName: "Curry", firstName: "Léa" },
    { lastName: "Wilde", firstName: "Gwenael" },
    { lastName: "Dick", firstName: "Mohamed" },
  ];
  const TablB = [
    { lastName: "Patulacci", fisrtName: "Lucette" },
    { lastName: "Cooper", fisrtName: "Yvon" },
    { lastName: "Gump", fisrtName: "Ryan" },
    { lastName: "Pitt", fisrtName: "Paul" },
    { lastName: "Brown", fisrtName: "Nicolas" },
    { lastName: "Pitt", fisrtName: "Olivier" },
    { lastName: "Kenobi", fisrtName: "Sharon" },
    { lastName: "Poirot", fisrtName: "Pierre" },
    { lastName: "Al-Khwarizmi", fisrtName: "Odile" },
    { lastName: "Papin", fisrtName: "Ryan" },
    { lastName: "Mbappé", fisrtName: "Yasmine" },
    { lastName: "Söze", fisrtName: "Alexandre" },
    { lastName: "Durden", fisrtName: "Jean-Pierre" },
    { lastName: "Patulacci", fisrtName: "Julien" },
    { lastName: "Turing", fisrtName: "Ryan" },
  ];

  const DisplayTabA = TablA.map((Element, index) => {
    return (
      <View style={styles.container} key={index}>
        <TouchableOpacity
          style={styles.case}
          onPress={() =>
            navigation.navigate("ContactScreen", {
              lastName: data.lastName,
              firstName: data.firstName,
              /* dob: data.dob, phonenr: tableauPhone, email : email, */ key: key,
            })
          }
        >
          <View style={styles.caseIcon}>
            <FontAwesome name="user-circle" size={35} color="#0031B8" />
          </View>
          <Text style={styles.name}>
            {Element.lastName} {Element.firstName}
          </Text>
          <TouchableOpacity style={styles.param}>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  });

  const DisplayTabB = TablB.map((Element, index) => {
    return (
      <View style={styles.container} key={index}>
        <TouchableOpacity
          style={styles.case}
          onPress={() =>
            navigation.navigate("ContactScreen", {
              lastName: data.lastName,
              firstName: data.firstName,
              /* dob: data.dob, phonenr: tableauPhone, email : email, */ key: key,
            })
          }
        >
          <View style={styles.caseIcon}>
            <FontAwesome name="user-circle" size={35} color="#0031B8" />
          </View>
          <Text style={styles.name}>
            {Element.lastName} {Element.firstName}
          </Text>
          <TouchableOpacity style={styles.param}>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  });

  const layout = useWindowDimensions();
  const FirstRoute = () => (
    <ScrollView>
      <View style={styles.container}>{DisplayTabA}</View>
      <View style={styles.contactContainer}></View>

      <View style={styles.btnContainer}></View>
    </ScrollView>
  );

  const SecondRoute = () => (
    <ScrollView>
      <View style={styles.container}>{DisplayTabB}</View>
      <View style={styles.contactContainer}></View>

      <View style={styles.btnContainer}></View>
    </ScrollView>
  );
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  return (
    <SafeAreaProvider style={styles.SAV}>
      <View>
        <TextInput placeholder="🔎 Search Bar                                                                             ✖️" />
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  SAV: {
    flex: 1,
    height: "100%",
  },
  container: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  case: {
    borderColor: "#222222",
    borderWidth: 0.5,
    borderRadius: 5,
    height: 50,
    width: 350,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  caseIcon: {
    borderRadius: 70,
    marginLeft: 10,
  },
  icon: {
    marginLeft: 5,
  },
  name: {
    width: 200,
    marginRight: 40,
  },
  param: {},

  btnContainer: {
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 150,
    height: 80,
    alignItems: "stretch",
    textAlign: "right",
    marginLeft: 200,
  },
});
