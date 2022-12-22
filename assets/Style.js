import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // GLOBAL VIEWS

  // SafeAreaView (from react-native-safe-area-context)

  sav: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  // KeyboardAvoidingView

  kav: {
    flex: 1,
    height: "100%",
    width: "100%",
  },

  // CONTAINERS

  // Logo Container

  logoContainer: {
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },

  // Main Container

  mainContainerWithLogo: {
    height: "70%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  mainContainerNoLogo: {
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },

  // Navigation Container (with Submit Button only)

  navigationContainerSubmitOnly: {
    height: "10%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 25,
    paddingVertical: 10,
    // flexWrap: "wrap",
    flexDirection: "row",
  },

  // Navigation Container (with Multiple Buttons)

  navigationContainer: {
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 10,
    flexWrap: "wrap",
    flexDirection: "row",
  },

  // LOGO

  // Logo

  logo: {
    width: "100%",
    height: "100%",
  },

  // TEXTINPUTS & TEXTS OVER INPUTS

  // TextInput

  textInput: {
    borderRadius: 5,
    borderColor: "#0031B8",
    borderWidth: 1,
    color: "#5A5A5F",
    height: 45,
    width:300,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 1,
  },

  // Text Over Input

  textOverInput: {
    color: "#0031B8",
    marginLeft: 7,
    marginRight: 5,
    marginVertical: 5,
  },

  // NAVIGATION ITEMS

  // Submit Button & Return Button

  navigationBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0031B8",
    borderRadius: 45,
    height: 45,
    width: 45,
  },

  // Skip Step Button

  skipBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba (0,0,0,0)",
    borderRadius: 50,
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  // TEXTS STYLES

  // Alert Message

  alertMsg:{
    color: "#D90000",
    fontSize: 14,
    fontWeight: "500",
  },

});

export { styles };
