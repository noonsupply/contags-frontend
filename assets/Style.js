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
    // flex: 1,
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 20, 
borderWidth: 2,
borderColor: "blue",
  },

  // Main Container

  mainContainerWithLogo: {
    // flex: 1,
    height: "70%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 25,
    paddingVertical: 25,
    borderWidth: 2,
    borderColor: "red",
  },

  mainContainerNoLogo: {
    // flex: 1,
    height: "90%",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 25,
    borderWidth: 2,
    borderColor: "red",
  },

  // Navigation Container (with Submit Button only)

  navigationContainerSubmitOnly: {
    // flex: 1,
    height: "10%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 25,
    paddingVertical: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "green",
  },

  // Navigation Container (with Multiple Buttons)

  navigationContainer: {
    // flex:1,
    height: "10%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "green",
  },

  // LOGO

  // Logo

  logo: {
    // width: 300,
    // height: 200,
  },

  // TEXTINPUTS & TEXTS OVER INPUTS

  // TextInput

  textInput: {
    borderRadius: 5,
    borderColor: "#0031B8",
    borderWidth: 1,
    color: "#5A5A5F",
    height: 45,
    width: 300,
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
    marginTop: 7,
    marginBottom: 5,
    fontWeight: "500"
  },

  // NAVIGATION ITEMS

  // Submit Button & Return Button

  navigationBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0031B8",
    borderRadius: 40,
    height: 40,
    width: 40,
  },

  // Skip Step Button

  skipBtn: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "rgba (0,0,0,0)",
    backgroundColor: "#0031B8",
    borderRadius: 5,
    height: 35,
    paddingHorizontal: 10,
    paddingVertical: 5,

  },

  skipBtnText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  // TEXTS STYLES

  // Simple Text

  simpleText: {
    color: "#0031B8",
    marginLeft: 7,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "500"
  },

  // Password Validation Message Container

  msgToUserContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    paddingHorizontal: 5,
  },

  // Alert Message

  alertMsg: {
    color: "#D90000",
    fontSize: 14,
    fontWeight: "500",
  },

  // Validation Message

  validationMsg: {
    color: "#21AC14",
    fontSize: 14,
    fontWeight: "500",
  },


  // PASSWORD INPUTS

  // Password Input and Eye Icon Container

  inputAndEyeIconContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  // Password Input

  pwdInput: {
    borderRadius: 5,
    borderColor: "#0031B8",
    borderWidth: 1,
    color: "#5A5A5F",
    height: 45,
    width: 270,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 1,
  },

  // Eye Icon

  eyeIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    marginVertical: 5,
  },

  // DATETIME PICKER MODULE

  dateTimePickerBtnContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "96%",
    paddingVertical: 5,
    marginHorizontal: 6,
  },

  // TAGS

    userTagsContainer: {
    marginVertical: 5,
    marginHorizontal: 25,
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "red",
  },

  scrollViewContainer: {
    height: "25%",
  },

  btnAddTagContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },

  proposedTagsScrollView: {
    flexWrap: "wrap",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#0031B8",
    borderRadius: 10,
    paddingHorizontal: 3,
    marginVertical: 15,
    marginHorizontal: 25,
  },

  selectedTagsScrollView: {
    flexWrap: "wrap",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#0031B8",
    borderRadius: 10,
    paddingHorizontal: 3,
    marginVertical: 15,
    marginHorizontal: 25,
  },

  contentContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

    templateTagContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "center",
    marginBottom: 15,
    marginTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    height: 250,
  },


  userTagsContainer: {
    marginVertical: 5,
    marginHorizontal: 25,
    flexWrap: "wrap",
    flexDirection: "row",
    marginVertical: 10,
    // backgroundColor: "red",
  },

  scrollViewContainer: {
    height: "25%",
  },

  proposedTagsScrollView: {
    // flexWrap: "wrap",
    // flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "#0031B8",
    // borderRadius: 10,
    paddingHorizontal: 3,
    marginVertical: 15,
    marginHorizontal: 25,
  },

  selectedTagsScrollView: {
    // flexWrap: "wrap",
    // flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "#0031B8",
    // borderRadius: 10,
    paddingHorizontal: 3,
    marginVertical: 15,
    marginHorizontal: 25,
  },

  contentContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
  },

  btnAddTagContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },

  btnAddTag: {
    backgroundColor: "#0031B8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    flexShrink: 1,
    height: 30,
    marginVertical: 3,
    paddingHorizontal: 10,
  },

    btnWhiteText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },

    tagFullDarkBlue: {
    backgroundColor: "#0031B8",
    alignItems: "center",
    borderRadius: 20,
    flexShrink: 1,
    height: 30,
    justifyContent: "center",
    marginHorizontal: 2,
    marginVertical: 3,
    paddingHorizontal: 10,
  },

  tagTextWhite: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  skipBtnView: {
    marginVertical: 25,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  h2:{
    color: "#0031B8",
    marginLeft: 7,
    marginRight: 5,
    marginTop: 7,
    marginBottom: 5,
    fontWeight: "500",
    fontSize:14,
  },

  p: {
    color: "#0031B8",
    marginLeft: 7,
    marginRight: 5,
    marginTop: 7,
    marginBottom: 5,
    fontWeight: "400",
  }
});

export { styles };
