import LocalizedStrings from "react-localization";
const strings = new LocalizedStrings({
  en: {
    english: "English",
    marathi: "मराठी",
    hindi: "हिंदी",
    //common name
    address:"Address",
    ownerName:"Owner Name",
    seats:"seats",
    shopDetails:"Shop Details",
    ok:"Ok",
    shopOn:"ON",
    shopOff:"OFF",
    cancelled:"CANCELLED",
    complete:"COMPLETE",
    submit:"Submit",
    send:"Send",
    pleaseenteryourreview:"Your review",
    pleaseenteryourname:"Please enter your name",
    mall:"Mall",
    addfacility:"Add Facility",
    shareuserapp:"Share User App",
    
    //add new service page
    addnewservice: "Add New Service",
    enteryourservicename: "Enter Your Service Name",
    enterserviceprice: "Enter Service Price",
    enterservicetime: "Enter Service Time (ex. 30 min)",
    enterservicetype: "Enter Service Type (MALE / FEMALE)",
    selectservicetype: "Select service type",
    selectservicetypeMaleFemale: "Select service type (Male / Female)",
    addTimeInMinute:"Enter time in minutes",
    male: "Male",
    female: "Female",
// update service 
    updateyourservice:"Update Your Service",
    updateservicename:"Update service name",
    updateserviceprice:"Update service price",
    updateservicetime:"Update service time in minute.",
    updateservice:"Update Service",
    //SanjiwaniMall page
    yourshopisclose: "Your Shop is close",
    yourshopisopen: "Your shop is Open",
    todaysbooking: "Today's Booking",
    areyousurewantto: "Are you sure want to ?",

    //TodayBooking page
    yourbookingisempty: "Your Booking is Empty",
    bookmanually: "Book Manually",
    areyousurewanttocancelbooking: "Are you sure want to Cancel Booking?",
    name: "Name",
    services: "Services",
    mobile: "Mobile",
    youhavecanclethisbooking: "You have cancle this booking",
    youhavestartednewcustomer: "You have started new customer",
    view: "View",
    start: "Start",
    open: "Open",
    totalamount: "Total Amount",
    close: "Close",

    //booking history
    today: "Today",
    last7days: "Last 7 Days",
    month: "Month",

    //all booking history
    client: "Client",
    amount: "Amount",
    number: "No",
    status: "Status",
    nothingyettoshow: "Nothing yet to show",
    pleasesayyourusertousethisappforbooking:
      "Please,say your user to use this app for Booking",

    //todayhistory
    sorry: "Sorry",
    noorderhistoryavailablefortoday: "No order history available for Today",
    forgettingmoreoffers:
      "For getting more offers, We would suggest you to come up with the new offer's and packages",

    //shopservices
    yourservicesisempty: "Your Services is Empty",
    clickonbelowbuttonforaddingnewservice:
      "Click on Below Button For Adding new Service",
    createoffers: "Create Offers",
    yourofferservices: "Your Offer Services",
    service: "Service",
    servicesdeletedsuccessfully: "Services Deleted Successfully",
    offerservicesdeletedsuccessfully: "Offer Services Deleted Successfully",
    offerserviceaddedsuccessfully: "Offer Service Added Successfully !!!",
    serviceaddedsuccessfully: "Service Added Successfully",
    areyousurewanttodelete: "Are you sure want to delete ?",
    //bottom menu
    home: "Home",
    history: "History",
    profile: "Profile",

    //clientdeletepopup
    yes: "Yes",
    no: "No",

    //bookmanuallypopup
    add: "Add",
    or:"OR",
    book: "Book",
    cancel: "Cancel",
    enterservicetimemanual:"Enter service time (ex. 120 min)",
    addofflinebooking:"Add new offline booking",
    addmobileNumber:"Add mobile number",
    selectTimeForBooking:"Select time to complete the service",
    addmobileMsg:"Add mobile no. to send a reminder to an offline user",
    addmoreTimeMsg:"Want to put more time?",


    //emptylogin
    yournotlogin: "Your not LogIn",
    pleaseloginfirst: "Please Login First",
    login: "Log In",

    //locationbar
    enteryouraddress: "Enter Your Address, Area, City ?",

    //offeronservice
    AddOfferTitle:"Add New Offers",
    offername: "Offer Name",
    servicename: "Service Name",
    newyearoffer: "Ex.New year offer",
    actualprice: "Actual price",
    offerTime: "Offer Time",
    offerprice: "Offer price",
    percentageonoffer: "Percentage on offer",
    fromdate: "From Date",
    todate: "To Date",
    selectpercentageforoffer: "Select percentage for offer",
    select: "Select %",
    apply: "Apply",
    delete: "Delete",
    enteroffername: "Enter offer name",
    entercorrectoffername: "Enter correct offer name",
    enterofferservicename: "Enter offer service name",
    enterofferprice: "Enter offer price",
    enterofferactualprice: "Enter offer actual price",
    enterofferservicestime: "Enter required time to complete this services (ex. 30 min)",
    pleaseselectpercentageonoffer: "Please select percentage on offer",
    selectcorrectpercentageonoffer: "Select correct percentage on offer",
    pleaseselectfromDate: "Please select from Date ",
    pleaseselectToDate: "Please select To Date",

    //select which offer
    offersinpercentage: "Offers in Percentage",
    offeronservices: "Offer on Services",

    //login
    entermobilenumber: "Enter Mobile Number",
    enterpassword: "Enter Password",
    enterconfirmpassword: "Enter Confirm Password",

    //shop registration
    ownerfullname: "Owner Full Name",
    enteremailaddress: "Enter Email Address",
    loginhere: "Login Here",
    alreadyauser: "Already a User",
    pleaseticktheboxtocontinue: "Please tick the box to Continue",

    //shopprofileinfoupdate
    shopname: "Shop Name",
    shopaddress: "Shop Address",
    entersomethingaboutyourshop: "Enter Something about your shop",
    howmanyinchairinyourshop: "How many chair in your shop",
    howmanyemployeeworksinyourshop: "How many employee works in your shop",
    updateprofile: "Update Profile",
    profilesuccessfullyupdated: "Profile successfully updated ",

    //shopprofileinfo
    employee: "Employee",
    shopdetails: "Shop Details",
    contact: "Contact",
    email: "Email",
    logout: "Logout",
    edit: "Edit",
    selectlanguage: "Change language",
    faq: "FAQ's",

    //faqs
    faqs: "FAQ'S",
    frequentlyaskedquestions: "Frequently Asked Questions",
    ques1: "How to start the System?",
    ans1: "at the top click on : ON and OFF button.",
    ques2: "How to see bookings on application?",
    ans2: "All booking is on the home page .",
    ques3: "If someone come offline then how to manage them?",
    ans3: "click on home page go to the bottom then click on BOOK MANUALLY.",
    ques4: "How to see customers order?",
    ans4: "Home – click on view button of that customer.",
    ques5: "How to send message to the customer?",
    ans5:
      "Home – see the customer which you want to send the messages then click on start.",
    ques6: "In emergency how to contact with the customer?",
    ans6:
      "Home – see the customer which you want to contact with then click on three dots of that customer then select the option through which you want to connect (call/ message).",
    ques7:
      "After complete of the service how to remove customer form the queue or from the list ?",
    ans7:
      "Home – see the list and  click on DELETE option whom you want remove from the list after completing of the service.",
    ques8: "How to add or update the menu card of the shop?",
    ans8:
      "click on SERVICES -  now enter the new service name and the enter the price then ckick on UPDATE.",
    ques9: "How to change the profile?",
    ans9:
      " click on PROFILE – click on edit – make changes you want  then click on UPDATE.",
    ques10: "How to see the History?",
    ans10:
      " click on HISTORY –  now click on which history you want to see like (yesterday / last 7 days / last month).",
    ques11: "Need Help ?",
    ans11:
      "We are really sorry for this experience.We will try to resolve this as soon as possible.",
    callus: "Call Us",
    emailus: "Email Us",

    //errormsgs
    somethingwentwrong: "Oops ! SomeThing went wrong..",
    heysorryforinconvenience:
      "Hey Sorry For Inconvenience We Will Try to reach out soon !",
    pleaseenteryourmobilenumber: "Please enter your mobile number",
    enter10digitmobilenumberonly: "Enter 10 Digit Mobile Number Only",
    mobilenumbermustbe10digit: "Mobile number must be 10 digit",
    pleaseenteryourpin: "Please enter your pin",
    enterfourdigitnumberpinonly: "Enter Four Digit Number Pin Only",
    mobilenumberorpinnotmatchtryagain:
      "Mobile Number or Pin not match Try Again"
  },

  hi: {
    english: "English",
    marathi: "मराठी",
    hindi: "हिंदी",
    //common name
    address:"पता",
    ownerName:"मालिक का नाम",
    seats:"सीट",
    shopDetails:"दुकान का विवरण",
    ok:"ठीक है",
    shopOn:"चालू",
    shopOff:"बंद",
    cancelled:"रद्द",
    complete:"पूर्ण",
    submit:"प्रस्तुत करना",
    send:"भेजें",
    pleaseenteryourreview:"आपकी समीक्षा दर्ज करें",
    pleaseenteryourname:"अपना नाम दर्ज करें",
    mall:"शॉपिंग सेंटर",
    addfacility:"सुविधा जोड़ें",
    shareuserapp:"इस ऐप को अपने यूजर को शेयर करें",
    //add new service page
    addnewservice: "नयी सर्विस डाले",
    enteryourservicename: "सर्विस का नाम डाले",
    enterserviceprice: "सर्विस की  कीमत डाले ",
    enterservicetime: "सर्विस का समय दर्ज करें (उदा. 30 मिनट में)",
    enterservicetype: "सर्विसका प्रकार (पुरुष / महिला)",
    selectservicetype: "सर्विसका प्रकार",
    selectservicetypeMaleFemale:"सेवा प्रकार चुनें (पुरुष / महिला)",
    addTimeInMinute:"समय मिनटों में दर्ज करें",
    male: "पुरुष ",
    female: "महिला",

    // update service 
    updateyourservice:"अपनी सेवा को अपडेट करें",
    updateservicename:"सेवा नाम बदलें",
    updateserviceprice:"सर्विस की  कीमत डाले",
    updateservicetime:"सर्विस का समय दर्ज करें (उदा. 30 मिनट में)",
    updateservice:"सेवा बदलें",

    //SanjiwaniMall page
    yourshopisclose: "आपका दुकान बंद है ",
    todaysbooking: "आजकी बुकिंग्स",
    yourshopisopen: "आपकी दुकान खुली है",
    areyousurewantto: "क्या आप चाहते हैं दुकान ?",

    //TodayBooking page
    yourbookingisempty: "बुकिंग्स नहीं है ",
    bookmanually: "खुद बुक करे",
    areyousurewanttocancelbooking: "क्या आप वाकई बुकिंग रद्द करना चाहते हैं?",
    name: "नाम",
    services: "सेवाएं",
    mobile: "मोबाइल",
    youhavecanclethisbooking: "आपने इस बुकिंग को रद्द कर दिया है",
    youhavestartednewcustomer: "आपने नए ग्राहक शुरू किया हैं",
    view: "देखे",
    start: "चालू करे",
    open: "चालू करे",
    totalamount: "पूरी रक्कम",
    close: "बंद करे",

    //booking history
    today: "आज",
    last7days: "पिछले ७ दिन",
    month: "महिना",

    //all booking history
    client: "ग्राहक",
    amount: "रक्कम",
    number: "नंबर",
    status: "स्थिती",
    nothingyettoshow: "दिखाने के लिए अभी तक कुछ नहीं है ",
    pleasesayyourusertousethisappforbooking:
      "कृपया, अपने ग्राहकको बुकिंग के लिए इस ऐप का उपयोग करने के लिए कहें",

    //todayhistory
    sorry: "माफ़ करे",
    noorderhistoryavailablefortoday: "कोई ऑर्डर इतिहास उपलब्ध नहीं है",
    forgettingmoreoffers:
      "अधिक ऑफ़र प्राप्त करने के लिए, हम आपको नए ऑफ़र और पैकेज के साथ आने का सुझाव देते है",

    //shopservices
    yourservicesisempty: "आपकी सेवाएं खाली हैं",
    clickonbelowbuttonforaddingnewservice:
      "नई सेवा जोड़ने के लिए नीचे बटन पर क्लिक करें",
    createoffers: "ऑफ़र बनाएँ",
    yourofferservices: "आपकी ऑफ़र सेवाएँ",
    service: "सर्विस",
    servicesdeletedsuccessfully: "सेवाएँ सफलतापूर्वक हटा दी गईं",
    offerservicesdeletedsuccessfully: "ऑफ़र सेवाएँ सफलतापूर्वक हटा दी गईं",
    offerserviceaddedsuccessfully: "ऑफ़र सेवाएँ सफलतापूर्वक जोड़ी गयी ",
    serviceaddedsuccessfully: "सेवाएँ सफलतापूर्वक जोड़ी गयी",
    areyousurewanttodelete: "क्या आप वाकई हटाना चाहते हैं?",
    //bottom menu
    home: "होम",
    history: "इतिहास",
    profile: "प्रोफाइल",

    //clientdeletepopup
    yes: "हाँ",
    no: "नहीं",

    //bookmanuallypopup
    add: "जोड़े",
    or:"या",
    book:"बुक",
    cancel: "रद्द करे",
    enterservicetimemanual:"सेवा समय दर्ज करें (उदा.120 मिनट में)",
    addofflinebooking:"नई ऑफ़लाइन बुकिंग जोड़ें",
    addmobileNumber:"मोबाइल नंबर जोड़ें",
    selectTimeForBooking:"सेवा को पूरा करने के लिए समय का चयन करें",
    addmobileMsg:"ऑफ़लाइन उपयोगकर्ता को अनुस्मारक (reminder) भेजने के लिए मोबाइल नंबर जोड़ें.",
    addmoreTimeMsg:"अधिक समय लगाना चाहते हैं?",


    //emptylogin
    yournotlogin: "आपने लॉगिन नहीं किया ",
    pleaseloginfirst: "पहले लॉगिन करें",
    login: "लॉगिन",

    //locationbar
    enteryouraddress: "अपना पता, क्षेत्र, शहर डाले ",

    //offeronservice
    AddOfferTitle:"नए प्रस्ताव जोड़ें",
    offername: "ऑफरका नाम",
    servicename: "सर्विसका नाम",
    newyearoffer: "जैसे।  नए साल की ऑफर",
    actualprice: "मूल कीमत",
    offerTime: "समय प्रदान करें",
    offerprice: "ऑफर की कीमत ",
    percentageonoffer: "ऑफर पर प्रतिशत",
    fromdate: "तारीख से",
    todate: "तारीख तक",
    selectpercentageforoffer: "ऑफ़र के लिए प्रतिशत चुनें",
    select: "% चुनें",
    apply: "लागू करें",
    delete: "हटाये ",
    enteroffername: "ऑफ़र नाम दर्ज करें",
    entercorrectoffername: "सही ऑफ़र नाम दर्ज करें",
    enterofferservicename: "ऑफर सर्विस नाम डालें ",
    enterofferprice: "ऑफ़र मूल्य दर्ज करें",
    enterofferactualprice: "मूल ऑफर किमत डाले",
    enterofferservicestime: "इन सेवाओं को पूरा करने के लिए आवश्यक समय दर्ज करें (उदा. 30 मिनट में)",
    pleaseselectpercentageonoffer: "कृपया ऑफर पर प्रतिशत चुनें",
    selectcorrectpercentageonoffer: "ऑफर पर सही प्रतिशत चुनें",
    pleaseselectfromDate: "कृपया दिनांक से चुनें",
    pleaseselectToDate: "कृपया दिनांकतक चुनें",

    //select which offer
    offersinpercentage: "प्रतिशत नुसार ऑफर",
    offeronservices: "सर्विसेज पर ऑफर",

    //login
    entermobilenumber: "मोबाइल नंबर डाले ",
    enterpassword: "पासवर्ड डाले ",
    enterconfirmpassword: "कन्फर्म पासवर्ड डाले",

    //shop registration
    ownerfullname: "मालक का पूरा नाम ",
    enteremailaddress: "ईमेल डाले",
    loginhere: "यहां लॉगिन करें",
    alreadyauser: "पहलेसेही यूजर है ",
    pleaseticktheboxtocontinue: "जारी रखने के लिए कृपया बॉक्स पर टिक करें",

    //shopprofileinfoupdate
    shopname: "दुकान का नाम",
    shopaddress: "दुकान का पता",
    entersomethingaboutyourshop: "दुकान के बारे में कुछ लिखे",
    howmanyinchairinyourshop: "दुकान में कितने चेयर है",
    howmanyemployeeworksinyourshop: "दुकान में कितने कामगार है",
    updateprofile: "प्रोफाइल अपडेट करे",
    profilesuccessfullyupdated: "प्रोफ़ाइल सफलतापूर्वक अपडेट की गई",

    //shopprofileinfo
    employee: "कामगार",
    shopdetails: "दुकान की जानकारी",
    contact: "संपर्क",
    email: "ईमेल",
    logout: "लॉग आउट",
    edit: "एडिट",
    selectlanguage: "भाषा बदलो",
    faq: "सामान्य प्रश्न",

    //faqs
    faqs: "अक्सर पूछे जाने वाले प्रश्न",
    frequentlyaskedquestions: "अक्सर पूछे जाने वाले प्रश्न?",
    ques1: "सिस्टम कैसे शुरू करें?",
    ans1: "होम पेज पर ऊपर के चालू और बंद बटन पर क्लिक करें |",
    ques2: "ऍप पर बुकिंग कैसे देखें ?",
    ans2: "सभी बुकिंग होम पेज पर है|",
    ques3: "अगर कोई ऑफलाइन आता है तो उन्हें कैसे मैनेज करना है?",
    ans3:
      "होम पेज पर क्लिक करें सबसे नीचे जाएं और फिर बुक मॅन्युअल पर क्लिक करें|",
    ques4: "ग्राहकों की आर्डर कैसे देखें ?",
    ans4: "होम पेज- उस ग्राहक के व्यू बटन पर क्लिक करें|",
    ques5: "ग्राहक को संदेश कैसे भेजें?",
    ans5:
      "होम - उस ग्राहक को देखें जिसे आप संदेश भेजना चाहते हैं, फिर स्टार्ट बटन पर क्लिक करें|",
    ques6: "आपातकालीन स्थिति में ग्राहक से कैसे संपर्क करें?",
    ans6:
      "होम - उस ग्राहक को देखें, जिसके साथ आप संपर्क करना चाहते हैं, उस ग्राहक के तीन डॉट्स पर क्लिक करें और फिर उस विकल्प का चयन करें जिसके माध्यम से आप कनेक्ट करना चाहते हैं (कॉल / मैसेज)|",
    ques7: "सेवा को पूरा करने के बाद ग्राहक को कतार या सूची से कैसे निकाले ?",
    ans7:
      "होम - सूची देखें और DELETE विकल्प पर क्लिक करें जिसे आप सेवा पूरा करने के बाद सूची से हटाना चाहते हैं|",
    ques8: "दुकान के मेनू कार्ड को कैसे जोड़ें या अपडेट करें?",
    ans8:
      "नयी सेवाओं पर क्लिक करें - अब नया सेवा नाम दर्ज करें और मूल्य दर्ज करें फिर अपडेट पर क्लिक करें।",
    ques9: "प्रोफाइल कैसे बदलें?",
    ans9:
      "प्रोफाइल पर क्लिक करें - एडिट पर क्लिक करें - अपने इच्छित परिवर्तन करें और फिर अपडेट पर क्लिक करें|",
    ques10: "हिस्ट्री कैसे देखे ?",
    ans10:
      "हिस्ट्री पर क्लिक करें - अब उस इतिहास पर क्लिक करें जिसे आप देखना चाहते हैं (कल / पिछले 7 दिन / पिछले महीने)|",
    ques11: "मदद की ज़रूरत है?",
    ans11:
      "हमें इस अनुभव के लिए वास्तव में खेद है। हम इसे जल्द से जल्द हल करने का प्रयास करेंगे।",
    callus: "हमें कॉल करे|",
    emailus: "हमें ईमेल करे |",

    //errormsgs
    somethingwentwrong: "माफ़ करे ! कुछ गलत हो रहा है | ",
    heysorryforinconvenience:
      "असुविधा के लिए क्षमा करें|  हम जल्द ही आप तक पहुंचने की कोशिश करेंगे| ",
    pleaseenteryourmobilenumber: "अपना मोबाइल नंबर दर्ज करें",
    enter10digitmobilenumberonly: "केवल 10 अंकों का मोबाइल नंबर दर्ज करें",
    mobilenumbermustbe10digit: "मोबाइल नंबर 10 अंकों का होना चाहिए",
    pleaseenteryourpin: "कृपया अपना पिन दर्ज करें",
    enterfourdigitnumberpinonly: "केवल चार अंकों का पिन दर्ज करें ",
    mobilenumberorpinnotmatchtryagain:
      "मोबाइल नंबर या पिन मिल नहीं रहे , फिर से कोशिश करे "
  },
  ma: {
    english: "English",
    marathi: "मराठी",
    hindi: "हिंदी",
    //common name 
    address:"पत्ता",
    ownerName:"मालकाचे नाव",
    seats:"आसन",
    shopDetails:"दुकान तपशील",
    ok:"ठीक आहे",
    shopOn:"चालू",
    shopOff:"बंद",
    cancelled:"रद्द",
    complete:"पूर्ण",
    submit:"प्रस्तुत करणे",
    send:"पाठवा",
    pleaseenteryourreview:"कृपया आपले पुनरावलोकन प्रविष्ट करा",
    pleaseenteryourname:"कृपया आपले नाव प्रविष्ट करा",
    mall:"शॉपिंग सेंटर",
    addfacility:"सुविधा जोडा",
    shareuserapp:"हा अ‍ॅप तुमच्या युजरवर शेअर करा",
    //add new service page
    addnewservice: "नविन सर्विस जोडा",
    enteryourservicename: "सर्विसचे नाव टाका ",
    enterserviceprice: "सर्विसची किंमत टाका",
    enterservicetime: "सर्विसचा वेळ टाका (उदा. 30 मिनिटात)",
    enterservicetype: "सर्विसचा प्रकार (पुरुष / महिला)",
    selectservicetype: "सर्विसचा प्रकार निवडा",
    selectservicetypeMaleFemale:"सेवा प्रकार निवडा (पुरुष / महिला)",
    addTimeInMinute:"वेळ मिनिटांत टाका",
    male: "पुरुष ",
    female: "महिला",

    // update service 
    updateyourservice:"तुमची सेवा बदला",
    updateservicename:"सेवा नाव बदला",
    updateserviceprice:"सेवा किंमत बदला",
    updateservicetime:"मिनिटात सेवा वेळ बदला.",
    updateservice:"सेवा बदला",

    //SanjiwaniMall page
    yourshopisclose: "आपले दुकान बंद आहे ",
    todaysbooking: "आजच्या बुकिंग्स ",
    yourshopisopen: "आपले दुकान सुरु आहे",
    areyousurewantto: "आपली खात्री आहे की दुकान?",

    //TodayBooking page
    yourbookingisempty: "बुकिंग्स नाहीत ",
    bookmanually: "स्वतः बुक करा",
    areyousurewanttocancelbooking:
      "आपली खात्री आहे की आपण बुकिंग रद्द करू इच्छिता?",
    name: "नाव",
    services: "सर्विसेस",
    mobile: "मोबाइल",
    youhavecanclethisbooking: "आपण हे बुकिंग रद्द केले",
    youhavestartednewcustomer: "आपण नवीन ग्राहक सुरु केला आहे",
    view: "पहा",
    start: "सुरु करा",
    open: "सुरु करा",
    totalamount: "एकूण रक्कम",
    close: "बंद करा",

    //booking history
    today: "आज",
    last7days: "मागील ७ दिवस ",
    month: "महिना",

    //all booking history
    client: "ग्राहक",
    amount: "रक्कम",
    number: "नंबर",
    status: "स्थिती",
    nothingyettoshow: "दर्शविण्यासाठी काहीही नाही",
    pleasesayyourusertousethisappforbooking:
      "कृपया, आपल्या ग्राहकास बुकिंगसाठी हा अ‍ॅप वापरण्यासाठी सांगा",

    //todayhistory
    sorry: "माफ़ करा",
    noorderhistoryavailablefortoday: "आजचा ऑर्डर इतिहास उपलब्ध नाही",
    forgettingmoreoffers:
      "अधिक ऑफर मिळविण्याकरिता, आम्ही तुम्हाला नवीन ऑफर आणि पॅकेजेससह येण्यास सुचवित आहे ",

    //shopservices
    yourservicesisempty: "आपल्या सेवा रिक्त आहेत",
    clickonbelowbuttonforaddingnewservice:
      "नवीन सेवा जोडण्यासाठी खाली बटणावर क्लिक करा",
    createoffers: "ऑफर तयार करा",
    yourofferservices: "आपल्या ऑफर सेवा",
    service: "सर्विस",
    servicesdeletedsuccessfully: "सेवा यशस्वीपणे हटविल्या",
    offerservicesdeletedsuccessfully: "ऑफर सेवा यशस्वीपणे हटविल्या",
    offerserviceaddedsuccessfully: "ऑफर सेवा यशस्वीपणे जोडल्या गेल्या ",
    serviceaddedsuccessfully: "सेवा यशस्वीपणे जोडल्या गेल्या",
    areyousurewanttodelete: "आपली खात्री आहे की आपण हटवू इच्छिता?",

    //bottom menu
    home: "घर",
    history: "इतिहास",
    profile: "प्रोफाइल",

    //clientdeletepopup
    yes: "होय",
    no: "नाही",

    //bookmanuallypopup
    add: "जोडा",
    or:"किंवा",
    book:"बुक",
    cancel: "रद्द करा",
    enterservicetimemanual:"सेवा वेळ प्रविष्ट करा (उदा. 120 मि)",
    addofflinebooking:"नवीन ऑफलाइन बुकिंग जोडा",
    addmobileNumber:"मोबाइल नंबर टाका",
    selectTimeForBooking:"सेवा पूर्ण करण्यासाठी वेळ निवडा",
    addmobileMsg:"ऑफलाइन वापरकर्त्याला स्मरणपत्र (reminder) पाठविण्यासाठी मोबाइल नंबर जोडा.",
    addmoreTimeMsg:"अधिक वेळ जोडायचा आहे?",
    //emptylogin
    yournotlogin: "आपण लॉगिन नाही केले",
    pleaseloginfirst: "प्रथम लॉग इन करा",
    login: "लॉगिन",

    //locationbar
    enteryouraddress: "आपला पत्ता, क्षेत्र, शहर टाका ",

    //offeronservice
    AddOfferTitle:"नवीन ऑफर जोडा",
    offername: "ऑफरचे  नाव ",
    servicename: "सर्विसचे  नाव ",
    newyearoffer: "उदा. नविन वर्षाची ऑफर ",
    actualprice: "मूळ  किम्मत",
    offerTime: "ऑफर वेळ",
    offerprice: "ऑफर ची किम्मत ",
    percentageonoffer: "ऑफर वर टक्केवारी",
    fromdate: "या तारखेपासून",
    todate: "या तारखेपर्यंत ",
    selectpercentageforoffer: "ऑफरची टक्केवारी निवडा",
    select: "% निवडा",
    apply: "लागू करा",
    delete: "हटवा",

    enteroffername: "ऑफर नाव टाका",
    entercorrectoffername: "योग्य ऑफर नाव टाका",
    enterofferservicename: "ऑफर सर्विस नाव टाका",
    enterofferprice: "ऑफर किंमत टाका",
    enterofferactualprice: "मूळ ऑफर किम्मत टाका ",
    enterofferservicestime: "ही सेवा पूर्ण करण्यासाठी किती वेळ लागेल (उदा. 30 मिनिटात)",
    pleaseselectpercentageonoffer: "कृपया ऑफरवर टक्केवारी निवडा",
    selectcorrectpercentageonoffer: "ऑफरवर अचूक टक्केवारी निवडा",
    pleaseselectfromDate: "कृपया तारखेपासून निवडा ",
    pleaseselectToDate: "कृपया तारखेपर्यन्त निवडा",

    //select which offer
    offersinpercentage: "टक्केवारी नुसार ऑफर",
    offeronservices: "सर्विसेज वर ऑफर",

    //login
    entermobilenumber: "मोबाइल नंबर टाका ",
    enterpassword: "पासवर्ड टाका",
    enterconfirmpassword: "कन्फर्म पासवर्ड टाका ",

    //shop registration
    ownerfullname: "मालकाचे पूर्ण नाव ",
    enteremailaddress: "ईमेल टाका",
    loginhere: "येथे लॉग इन करा",
    alreadyauser: "आधीच यूजर आहात ",
    pleaseticktheboxtocontinue: "कृपया सुरू ठेवण्यासाठी बॉक्सवर क्लिक करा",

    //shopprofileinfoupdate
    shopname: "दुकानाचे नाव",
    shopaddress: "दुकानाचा पत्ता ",
    entersomethingaboutyourshop: "आपल्या दुकानाबद्दल काहीतरी लिहा ",
    howmanyinchairinyourshop: "आपल्या दुकानात किती खुर्ची आहे",
    howmanyemployeeworksinyourshop: "आपल्या दुकानात किती कर्मचारी काम करतात",
    updateprofile: "प्रोफाइल अपडेट करा ",
    profilesuccessfullyupdated: "प्रोफाइल यशस्वीरित्या अपडेट झाली",

    //shopprofileinfo
    employee: "कर्मचारी संख्या",
    shopdetails: "दुकानाची माहिती ",
    //seats: "खुर्ची संख्या",
    contact: "संपर्क",
    //address: "पत्ता",
    email: "ईमेल",
    logout: "लॉग आउट",
    edit: "एडिट",
    selectlanguage: "भाषा निवडा",
    faq: "सामान्य प्रश्न",
    //logout: "बाहेर पडणे",

    //faqs
    faqs: "नेहमी विचारले जाणारे प्रश्न",
    frequentlyaskedquestions: "नेहमी विचारले जाणारे प्रश्न?",
    ques1: "सिस्टम कसे सुरू करावे?",
    ans1: "होम पेज वरील : चालू आणि बंद बटणावर क्लिक करा.",
    ques2: "ऍप वर बुकिंग कसे पहावे?",
    ans2: "सर्व बुकिंग होम पेजवर आहे.",
    ques3: "जर कोणी ऑफलाइन आले तर मैनेज कसे करावे?",
    ans3: "होम पेजवर क्लिक करा तळाशी जा नंतर बुक मॅन्युअल वर क्लिक करा.",
    ques4: "ग्राहकांची ऑर्डर कशी पहावी?",
    ans4: "होम पेज - त्या ग्राहकाच्या व्यू बटणावर क्लिक करा.",
    ques5: "ग्राहकाला संदेश कसा पाठवायचा?",
    ans5:
      "होम पेज - आपण ज्या ग्राहकास सन्देश पाठवू इच्छित आहात त्या ग्राहकास पहा आणि नंतर स्टार्ट बटन वर क्लिक करा.",
    ques6: "आपत्कालीन परिस्थितीत ग्राहकांशी कसा संपर्क साधावा?",
    ans6:
      "होम पेज - ज्या ग्राहकाशी आपण संपर्क साधू इच्छित आहात तो पहा आणि त्या ग्राहकाच्या तीन ठिप्यांवर क्लिक करा आणि त्यानंतर आपण कनेक्ट करू इच्छित पर्याय निवडा (कॉल / संदेश).",
    ques7: "सेवा पूर्ण झाल्यानंतर रांगेत किंवा सूचीमधून ग्राहक कसे काढावे?",
    ans7:
      "होम पेज  -लिस्ट  पहा आणि सेवा पूर्ण केल्यावर आपण ज्याला यादीतून काढून टाकायचे आहे ते हटवा पर्यायावर क्लिक करा.",
    ques8: "दुकानाचे मेनू कार्ड कसे जोडावे किंवा अपडेट कसे करावे?",
    ans8:
      "नविन सर्विसेज वर क्लिक करा - आता नवीन सेवा नाव आणि किंमत टाका नंतर अपडेट  वर क्लिक करा.",
    ques9: "प्रोफाइल कसे बदलावे?",
    ans9:
      "प्रोफाइल वर क्लिक करा - एडिट वर क्लिक करा - आपल्याला हवे असलेले बदल करा नंतर अपडेट करा.",
    ques10: "हिस्ट्री कशी पहावी ?",
    ans10:
      "इतिहासावर क्लिक करा - आता आपण कोणत्या इतिहासासारखे पाहू इच्छित आहात यावर क्लिक करा (काल / शेवटचे 7 दिवस / गेल्या महिन्यात).",
    ques11: "मदत हवी आहे?",
    ans11:
      "या अनुभवाबद्दल आम्ही खरोखर दिलगीर आहोत. आम्ही हे लवकरात लवकर सोडवण्याचा प्रयत्न करू.",
    callus: "आम्हाला कॉल करा.",
    emailus: "आम्हाला ईमेल करा.",

    //errormsgs
    somethingwentwrong: "माफ करा ! काहीतरी चुकीचे होत आहे.",
    heysorryforinconvenience:
      "गैरसोयीबद्दल माफ करा. आम्ही लवकरच तुमच्यापर्यंत पोहोचण्याचा प्रयत्न करू.",
    pleaseenteryourmobilenumber: "कृपया आपला मोबाइल नंबर टाका",
    enter10digitmobilenumberonly: "केवळ 10 अंकी मोबाइल नंबर टाका",
    mobilenumbermustbe10digit: "मोबाइल क्रमांक 10 अंकांचा असणे आवश्यक आहे",
    pleaseenteryourpin: "कृपया आपला पिन टाका",
    enterfourdigitnumberpinonly: "केवळ चार अंकी पिन टाका",
    mobilenumberorpinnotmatchtryagain:
      "मोबाइल नंबर किंवा पिन जुळत नाही पुन्हा प्रयत्न करा"
  }
});
export default strings;
