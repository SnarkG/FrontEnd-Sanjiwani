import React, { Component } from 'react';
//import {Redirect} from "react-router-dom";
import ShopNameTopBar from "./topBarBackButton";
//import BottomMenu from "./bottomMenu";

class TermsAndCondition extends Component {
    constructor(props) {
        super(props);
        this.state={
            hasError: false,
        }
        
    }
    

    render() {
        
        return (
            <>   
            <ShopNameTopBar ShopName="Sanjiwani" backUrl={localStorage.getItem("TermsBackUrl")} />

            <div className="shopTermsCondition divider-60 disable-select">
                <h1>Terms &amp; Conditions</h1>
                <div className="divider-10"></div>
                <p className="textAlignJustify">By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages, or make derivative versions. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to Sanjiwani group solutions Private Limited .</p>

                <p className="textAlignJustify">Sanjiwani group solutions Private Limited. is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.</p>

                <p className="textAlignJustify">The  Sanjiwani group app stores and processes personal data that you have provided to us, in order to provide our Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the Sanjiwani group app won’t work properly or at all.</p>

                <p className="textAlignJustify">You should be aware that there are certain things that Sanjiwani group solutions Private Limited will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but Sanjiwani group solutions Private Limited cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.</p>

                <p className="textAlignJustify">If you’re using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third party charges. In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.</p>

                <p className="textAlignJustify">Along the same lines, Sanjiwani group solutions Private Limited cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, Sanjiwani group solutions Private Limited cannot accept responsibility.</p>

                <p className="textAlignJustify">With respect to Sanjiwani group solutions Private Limited ’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavor to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Sanjiwani group solutions Private Limited accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.</p>

                <p className="textAlignJustify">At some point, we may wish to update the app. The app is currently available on Android – the requirements for system (and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. Sanjiwani group solutions Private Limited does not promise that it will always update the app so that it is relevant to you and/or works with the Android version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.</p>
                <div className="divider-20"></div>
                <p className="textAlignJustify">
                    <b>For Shop owner</b>
                    <ol >
                        <li><b>Waiting at shop</b><br/>
                        - you have to click the book manual button then and then the waiting at your shop will be shown to the online user 
                        </li>
                        <li><b>Alert msg to your online user</b><br/>
                        when some one get chair at shop you have to click on start after that system will send message to your online customer if any one is there.
                        </li>
                        <li><b>Type of alert message</b><br/>
                        Sanjiwani group is not giving the perticualr time to the user its just notify the user that his number is comming so he don't have to wait for long.
                        </li>
                        <li><b>Menu card  (services)</b><br/>
                        the menu card (services) is completely in your hand (cost,design )
                        </li>
                        
                        <li><b>Payment of online user </b><br/>
                        there is no third party payment system only you have to collect the money from user or user will not pay to the application he will directly pay to you.
                        </li>
                        <li><b>Shop ON/OFF </b><br/>
                        you have to on/off the sytem when you open and close the shop. you are responsible if shop is closed and your system is on and that time you get any booking.
                        </li>
                        <li><b>I am accepting all the terms and conditions of Sanjiwani group. I am allowing the Sanjiwani group to have my data and i am registering to the Sanjiwani group the salon booking app.</b>
                        </li>
                    </ol>
                </p>
                <div className="divider-20"></div>
                <h2><b>Changes to This Terms and Conditions</b></h2>
                <div className="divider-10"></div>
                <p className="textAlignJustify">We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page. These changes are effective immediately after they are posted on this page.</p>

                <div className="divider-20"></div>
                <h2><b>Contact Us</b></h2>
                <div className="divider-10"></div>
                <p className="textAlignJustify">If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at <span className="emailLink" onClick={()=>this.CallForEmail()}>Sanjiwani group.solutions@gmail.com</span> or call us on <span className="emailLink" onClick={()=>this.CallOnMobile()}>7709419926</span></p>
            </div>
            <div className="divider"></div>
            </>

        );
    }
    
    CallOnMobile(){
        console.log("Call Cell phone");
        window.open("tel:7709419926");
      }

    CallForEmail(){
        console.log("Send Email");
        window.open("mailto:Sanjiwani group.solutions@gmail.com");
      }
}
export default TermsAndCondition;