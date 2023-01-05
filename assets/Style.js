import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /* The style items are sorted by type of items :
      1. VIEWS
        A. SAFEAREAVIEWS
        B. KEYBOARDAVOIDINGVIEW
      2. CONTAINERS

      3. INPUTS
      4. TEXTS
      5. NAVIGATION ITEMS
      6. TAGS
      
      
      */

  // 1. VIEWS

  // A. SAFEAREAVIEWS

  // SafeAreaView for the Splash screen (from react-native-safe-area-context)

  savSplashScreen: {
    flex: 1,
    backgroundColor: "#0046CF",
  },

  // SafeAreaView (from react-native-safe-area-context)

  sav: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  // B. KEYBOARDAVOIDINGVIEW

  kav: {
    flex: 1,
  },

  // C. SCROLLVIEW

  scrollViewStyle: {
    flex: 1,
    height: "100%",
    width: "100%",
    // borderColor: "purple",
    // borderWidth: 2,
  },

  // Tag templates view

  proposedTagsScrollView: {
    flex: 1,
    // paddingHorizontal: 3,
    // marginTop: 10,
    // marginBottom: 20,
    // marginHorizontal: 10,
    // borderColor: "red",
    // borderWidth: 2,
  },

  // Selected templates and created tags view

  selectedTagsScrollView: {
    flex: 1,
    // paddingHorizontal: 3,
    // marginTop: 10,
    // marginBottom: 20,
    // marginHorizontal: 10,
  },

  // 2. CONTAINERS

  // Inner container if KeyboardAvoidingView

  innerContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    // borderColor: "maroon",
    // borderWidth: 2,
  },

  // Logo container

  logoContainer: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    // borderColor: "red",
    // borderWidth: 2,
  },

  // Main container (if logo on screen)

  mainContainerWithLogo: {
    height: "65%",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    // borderColor: "green",
    // borderWidth: 2,
  },

  // Main container for ProfileCreation screen

  profileCreationMainContainer: {
    height: "55%",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    // borderColor: "green",
    // borderWidth: 2,
  },

  // Main container (if no logo on screen)

  mainContainerNoLogo: {
    height: "85%",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    // borderColor: "green",
    // borderWidth: 2,
  },

  // Navigation container (if submit button only)

  navigationContainerSubmitOnly: {
    height: "15%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 25,
    paddingVertical: 10,
    flexDirection: "row",
    // borderColor: "orange",
    // borderWidth: 2,
  },

  // Navigation container (if multiple buttons)

  navigationContainer: {
    height: "15%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 10,
    flexDirection: "row",
    // borderColor: "orange",
    // borderWidth: 2,
  },

  // Container for password input + eye icon

  inputAndEyeIconContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  // Tag creation skip button container

  skipBtnContainer: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // borderColor: "purple",
    // borderWidth: 2,
  },

  // Content container (for ScrollViews)

  contentContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor: "orange",
  },

  // Validation message container

  msgToUserContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    marginVertical: 5,
  },

  // "Add tag" button container

  addTagBtnContainer: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // borderColor: "purple",
    // borderWidth: 2,
  },

  // Tag templates scroll view container

  tagTemplatesScrollViewContainer: {
    height: 100,
    width: "90%",
    marginVertical: 10,
    borderColor: "#0046CF",
    borderWidth: 1,
    borderRadius: 10,
  },

  tagCreationMainContainer: {

    height: "85%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  tagCreationTextContainer: {
    paddingHorizontal: 10,
    width: "100%",
  },

  // 3. INPUTS

  // Text input

  textInput: {
    borderRadius: 5,
    borderColor: "#0046CF",
    borderWidth: 1,
    color: "#5A5A5F",
    height: 45,
    width: "95%",
    marginVertical: 5,
    marginHorizontal: 5,
    paddingLeft: 10,
    paddingTop: 5,
    fontFamily: "Poppins-Regular",
  },

  // Password input

  passwordInput: {
    borderRadius: 5,
    borderColor: "#0046CF",
    borderWidth: 1,
    color: "#5A5A5F",
    height: 45,
    width: 280,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingLeft: 10,
    paddingTop: 5,
    fontFamily: "Poppins-Regular",
  },

  // 4. TEXTS

  // Texts over inputs

  textOverInput: {
    color: "#0046CF",
    marginLeft: 7,
    marginRight: 5,
    marginTop: 7,
    fontFamily: "Poppins-SemiBold",
  },

  // Alert message

  alertMsg: {
    color: "#D90000",
    fontFamily: "Poppins-Regular",
    paddingLeft: 2,
  },

  // Validation message

  validationMsg: {
    color: "#21AC14",
    fontFamily: "Poppins-Regular",
    paddingLeft: 2,
  },

  // Date picking validation message

  validationMsgDatePicker: {
    color: "#21AC14",
    fontFamily: "Poppins-Regular",
  },

  // Paragraphes
  p: {
    color: "#0046CF",
    marginLeft: 7,
    marginRight: 5,
    marginTop: 7,
    marginBottom: 5,
    fontFamily: "Poppins-Regular",
  },

  // Bold paragraphes

  boldp: {
    color: "#0046CF",
    marginLeft: 7,
    marginRight: 5,
    marginTop: 15,
    marginBottom: 2,
    fontFamily: "Poppins-SemiBold",
  },

  // // Skip button text

  skipBtnText: {
    color: "#FFFFFF",
    fontFamily: "Poppins-Regular",
  },

  btnWhiteText: {
    color: "#FFFFFF",
    fontFamily: "Poppins-Regular",
  },

  // 5. NAVIGATION ITEMS

  // Submit button & Return button

  navigationBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0046CF",
    borderRadius: 40,
    height: 40,
    width: 40,
  },

  // Skip Step Button

  skipBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0046CF",
    borderRadius: 5,
    height: 35,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  // Add Tag Button

  addTagBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0046CF",
    borderRadius: 5,
    height: 35,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  // 6. TAGS

  automaticallyCreatedTag: {
    backgroundColor: "#0046CF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    flexShrink: 1,
    height: 30,
    marginHorizontal: 2,
    marginVertical: 3,
    paddingHorizontal: 12,
  },

  tagForm: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    flexShrink: 1,
    height: 30,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingHorizontal: 12,
  },

  tagTextWhite: {
    color: "#FFFFFF",
    fontFamily: "Poppins-Regular",
  },

  tagText: {
    fontFamily: "Poppins-Regular",
  },

  withBorder: {
    borderWidth: 2,
    borderColor: "#0046CF",
  },

  withoutBorder: {
    borderWidth: 0,
  },

  //////////////////////////////////////////////////////////////////////

  // B. SCROLLVIEWS

  // KeyboardAwareScrollView

  kas: {
    // flex: 1,
  },

  // Content container for Scroll Views

  scrollViewContentContainerStyle: {
    justifyContent: "space-between",
  },

  scrollView: {
    maxHeight: "100%",
    // borderColor: "maroon",
    // borderWidth: 2,
  },

  // 2. CONTAINERS

  loaderContainer: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    // borderColor: "red",
    // borderWidth: 2,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  mainContainerWithLogoProfileCreation: {
    // height: "62%",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    // borderColor: "green",
    // borderWidth: 2,
  },

  // User tags container

  userTagsContainer: {
    marginVertical: 5,
    marginHorizontal: 5,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  // Tag templates container

  templateTagContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
    marginTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
    height: 250,
  },

  // 3. LOGO & LOADER

  // Logo

  logo: {
    width: "80%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },

  // Loader

  loader: {
    width: 50,
    height: 50,
  },

  // Password input

  pwdInput: {
    borderRadius: 5,
    borderColor: "#0046CF",
    borderWidth: 1,
    color: "#5A5A5F",
    height: 45,
    width: 270,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 1,
  },

  // 5. TEXTS

  // Simple Text

  simpleText: {
    color: "#0046CF",
    marginLeft: 7,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 10,
    fontFamily: "Poppins-Regular",
  },

  // 6. NAVIGATION ITEMS

  // 7. ICONS

  // Eye icon

  eyeIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    marginVertical: 5,
  },

  // 8. MODULES

  // DateTimePicker module

  dateTimePickerBtnContainer: {
    alignItems: "center",
    justifyContent: "center",
    // width: "96%",
    paddingVertical: 5,
    marginHorizontal: 6,
  },

  // TAGS

  btnAddTag: {
    backgroundColor: "#0046CF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    flexShrink: 1,
    height: 30,
    marginVertical: 3,
    paddingHorizontal: 10,
  },

  // BORDEL

  kav: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  globalContainer: {
    height: "83%",
    width: "90%",
    // alignItems: "center",
    // justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: "#0046CF",
    borderWidth: 2,
    borderRadius: 10,
  },

  titles: {
    color: "#0046CF",
    fontFamily: "Poppins-Regular",
    marginTop: 0,
    marginBottom: 0,
  },

  closeIconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  //  ETAPE 1
  firstContainer: {
    width: "100%",
    marginTop: 5,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 10,
  },

  input: {
    width: "80%",
    height: 30,
    borderRadius: 100,
    paddingLeft: 5,
    borderRadius: 5,
    borderColor: "#0046CF",
    borderWidth: 1.5,
  },

  //   ETAPE 2 : TAGS
  secondContainer: {
    height: "45%",
  },

  tagContainerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  tagContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",

    // marginBottom: 0,
    // marginTop: 0,
    // paddingLeft: 0,
    // paddingRight: 0,
  },

  // ETAPE 3
  visualContainer: {
    height: "25%",
    width: "100%",
  },

  ScrollView: {
    height: 100,
    flex: 1,
    marginTop: 5,
  },

  validateTagContainer: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
  },

  //   BOUTON
  containerBtn: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingTop: 5,
  },

  btnBack: {
    borderWidth: 2,
    borderColor: "#0046CF",
    borderRadius: 10,
    width: 80,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  tagNameAndNumCharContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },

  tagInput: {
    borderRadius: 5,
    borderColor: "#0046CF",
    borderWidth: 1,
    color: "#5A5A5F",
    height: 45,
    width: 250,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingLeft: 10,
    paddingTop: 5,
    fontFamily: "Poppins-Regular",
  },

  createdTagScrollView: {
    maxHeight: 90,
    height: 50,
    marginBottom: 20,
    borderColor: "#0046CF",
    borderWidth: 1,
    borderRadius: 10,
  },

  noTagCreatedYetMsg: {
    color: "#0046CF",
    marginLeft: 7,
    marginRight: 5,
    marginTop: 7,
    marginBottom: 5,
    fontFamily: "Poppins-Regular",
  },

  tagCreationValidateBtn: {
    // borderWidth: 2,
    // borderColor: "#0046CF",
    backgroundColor: "#0046CF",
    borderRadius: 10,
    width: 80,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { styles };
