// fonction permettant de vérifier la présence et le format d'un n° de téléphone
function checkPhoneFormat(numberPhone) {
    const regExPhoneNum =
    /(\+|00|0)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/;
    
    if(numberPhone){
        const formattedPhoneNumber = numberPhone.split(" ").join(""); // suppression des espaces
        return regExPhoneNum.test(formattedPhoneNumber);
    }
    return false;
  }

// fonction permettant de vérifier la présence et le format d'un mail
function checkMailFormat(email){
  const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(email){
    const formattedMail = email.trim();
    return EMAIL_REGEX.test(formattedMail);
  }
  return false;
}


// fonction permettant de gérer la récupération des n° de téléphone dans les inputs de la page ContactScreen
function handleInputPhone(phoneInput1, phoneInput2, contactUpdating){
    const thePhonesList =[];
    // gestion du premier n°
    if (checkPhoneFormat(phoneInput1)) {
      let typePhone1 = "";
      // récupération d'un type de téléphone existant ou affection par defaut de main
      contactUpdating.phones.length > 0 ?  (typePhone1 = contactUpdating.phones[0].typePhone):(typePhone1 = "main"); 
      // ajout au tableau
      thePhonesList.push({
        phoneType: typePhone1,
        number: phoneInput1.split(" ").join(""),
        areaCode: "",
        country: "",
      });
    }

    // gestion du deuxieme n°
    if (checkPhoneFormat(phoneInput2)) {
      let typePhone2 = "";
      // récupération d'un type de téléphone existant ou affection par defaut de home
      contactUpdating.phones.length > 1 ? (typePhone2 = theContactUpdating.phones[1].typePhone): (typePhone2 = "home");
      // ajout au tableau
      thePhonesList.push({
        phoneType: typePhone2,
        number: phoneInput2.split(" ").join(""),
        areaCode: "",
        country: "",
      });
    }
    
    return thePhonesList;
}

// fonction permettant de gérer la récupération des mails dans les inputs de la page ContactScreen
function handleInputMails(mailInput1, mailInput2, contactUpdating){
  const theMailsList =[];
  // gestion du premier mail
  if (checkMailFormat(mailInput1)) {
    let typeEmail1 = "";
    // récupération d'un type de mail existant ou affection par defaut de personnal
    contactUpdating.emails.length > 0
      ? (typeEmail1 = contactUpdating.emails[0].emailType)
      : (typeEmail1 = "personnal");
    theMailsList.push({ emailType: typeEmail1, email: mailInput1 });
  }

  if (checkMailFormat(mailInput2)) {
    let typeEmail2 = "";
    // récupération d'un type de mail existant ou affection par defaut de personnal
    contactUpdating.emails.length > 1
      ? (typeEmail2 = contactUpdating.emails[1].emailType)
      : (typeEmail2 = "personnal");
      theMailsList.push({ emailType: typeEmail2, email: mailInput2});
  }

  return theMailsList;
}
  
  module.exports = { checkPhoneFormat, checkMailFormat, handleInputPhone, handleInputMails};