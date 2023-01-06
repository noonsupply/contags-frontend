import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /* The style items are sorted by type of items :
      1. VIEWS
      2. CONTAINERS
      3. INPUTS
      4. TEXTS
      5. NAVIGATION ITEMS
      6. TAGS
      7. LOGO & LOADER
      8. ICON
      9. DATETIMEPICKER MODULE
      10. TAG CREATION MODAL
      
      */

  // 1. VIEWS

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

// KeyboardAvoidingView

  kav: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },


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
  },

  // Selected templates and created tags view

  selectedTagsScrollView: {
    flex: 1,
  },

  // 2. CONTAINERS

  // Splash screen containers

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

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

  // User tags container

  userTagsContainer: {
    marginVertical: 5,
    marginHorizontal: 5,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  // Tag creation screen main container

  tagCreationMainContainer: {
    height: "85%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  // Tag creation screen text container

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

  // 7. LOGO & LOADER

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

  // 8. ICON

  // Eye icon

  eyeIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    marginVertical: 5,
  },

    // 9. DATETIMEPICKER MODULE

    dateTimePickerBtnContainer: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 5,
      marginHorizontal: 6,
    },

    // 10. TAG CREATION MODAL

    modalGlobalContainer: {
      height: "87%",
      width: "90%",
      backgroundColor: "#FFFFFF",
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderColor: "#0046CF",
      borderWidth: 2,
      borderRadius: 10,
    },
  
    titles: {
      color: "#0046CF",
      fontFamily: "Poppins-Regular",
    },
  
    closeIconContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
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
      backgroundColor: "#0046CF",
      borderRadius: 10,
      width: 80,
      height: 35,
      justifyContent: "center",
      alignItems: "center",
    },
  
    //  ETAPE 1

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
  
    //   ETAPE 2
  
    tagContainer: {
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      marginVertical: 5,
    },
  
    // ETAPE 3
    createdTagScrollView: {
      flex: 1,
      height: 95,
      marginBottom: 10,
      borderColor: "#0046CF",
      borderWidth: 1,
      borderRadius: 10,
    },

  
    //   BOUTON
    containerBtn: {
      width: "100%",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      paddingTop: 5,
    },

    // DELETE TAG FEATURE

    container: {
      marginHorizontal: 5,
      marginVertical: 5,
      flexDirection: "row",
    },
  
    form: {
      zIndex: 0,
      alignItems: "center",
      borderRadius: 20,
      flexShrink: 1,
      height: 30,
      justifyContent: "center",
      paddingHorizontal: 10,
    },
  
    iconDelete: {
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1,
      marginLeft: -10,
      marginTop: -5,
      backgroundColor: "white",
      height: 17,
      width: 17,
      borderRadius: 17,
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0)",
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

  


});

export { styles };
