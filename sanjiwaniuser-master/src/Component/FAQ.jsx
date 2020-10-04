import React from "react";
import {Redirect} from "react-router-dom";
import BottomMenu from "./bottomMenu";
import Loader from "./loader";
import TopBar from './sanjiwaniMallPLBar';
import ToManyError from "./ToManyError";
import "../assets/css/reset.css";
import "../assets/css/accordion.css";
import "../assets/css/style.css"
import strings from './stringsoflanguages';


class FAQ extends React.Component {
  constructor(props){
      super(props);
      this.state = {
            displayMenu: false,
            loaded:false,
            loadError:false,
          };
      }
      
      UNSAFE_componentWillMount() {
        localStorage.setItem("activeMenu","Profile");
      }

render() {
      if(this.state.loaded === true){
          return (<Loader />);
      }else if (localStorage.getItem('shopIdLocal') === null) {
          return (<Redirect to='/login' />);
      }else if(this.state.loadError === true){
          return (<ToManyError redirectURL = {"/profile"}/>);
      }else if(localStorage.getItem("language") !== null){
        strings.setLanguage(localStorage.getItem("language"));
      }else if(localStorage.getItem("language") === null){
        strings.setLanguage("en");
      }

  return (
      <div>
          <TopBar productTitle="FAQ"backUrl="/account"like={false}search={false}cart={false} />
          <div className="divider-60"></div>
          <div className="rowData"><div className="faqTitleName">{strings.frequentlyaskedquestions}?</div></div>

      <div className="rowDataPadding10 divider-5">            
          <button className="accordion">{strings.ques1}</button>
          <div className="panel">
          <span className="FaqSpan">
            <ul>
              <li>Sanjiwani : {strings.ans1} </li>
            </ul>
            
            </span>
          </div>

          <button className="accordion">{strings.ques2}</button>
          <div className="panel">
          <span className="FaqSpan">
              <ul>
                <li>Sanjiwani : {strings.ans2} </li>
              </ul>
              </span>
          </div>

          <button className="accordion">{strings.ques3}</button>
          <div className="panel">
          <span className="FaqSpan">
              <ul>
                <li>Sanjiwani : {strings.ans3} </li>
                
              </ul>
              </span>
          </div>

          <button className="accordion">{strings.ques4}</button>
          <div className="panel">
          <span className="FaqSpan">
              <ul>
                <li>Sanjiwani : {strings.ans4}</li>
          
              </ul>
              </span>
          </div>

          <button className="accordion">{strings.ques5}</button>
          <div className="panel">
          <span className="FaqSpan">
                  <ul>
                    <li>Sanjiwani : {strings.ans5} </li>
                   </ul>
                   </span>
          </div>

          <button className="accordion">{strings.ques6}</button>
          <div className="panel">
          <span className="FaqSpan">
            <ul>
              <li>Sanjiwani : {strings.ans6} </li>
              
               </ul>
               </span>
          </div>

         <button className="accordion">{strings.ques7}</button>
          <div className="panel">
          <span className="FaqSpan">
              <ul>
                <li>Sanjiwani : {strings.ans7}</li>
              </ul>
              </span>
          </div> 

          <button className="accordion">{strings.ques8}</button>
          <div className="panel">
          <span className="FaqSpan">
            <ul>
              <li>Sanjiwani – {strings.ans8} </li>
            </ul>
            </span>
          </div>

          <button className="accordion">{strings.ques9}</button>
          <div className="panel">
          <span className="FaqSpan">
            <ul>
              <li>Sanjiwani – {strings.ans9}</li>
            </ul>
            </span>
          </div>

          <button className="accordion">{strings.ques10}</button>
          <div className="panel">
          <span className="FaqSpan">
            <ul>
              <li>Sanjiwani – {strings.ans10}</li>
            </ul>
          </span>
          </div>

          <button className="accordion">{strings.ques11}</button>
          <div className="panel">
          <span className="FaqSpan">
            <ul>
              <li>{strings.ans11}<br/></li>
            </ul>
            {/* <Link><div className="helpButton">Call us</div></Link><br/>
            <Link><div className="helpButton">Email us</div></Link> */}
                <div className="helpButton" onClick={()=>this.CallOnMobile()}>{strings.callus}</div><br/>
                <div className="helpButton" onClick={()=>this.CallForEmail()}>{strings.emailus}</div>
          </span>
          </div>
          
      </div>
      <div className="divider-90"></div>
      <BottomMenu myCartCount={localStorage.getItem('cartTotalCount')}/>
  </div>
  );
}

CallOnMobile(){
  console.log("Call Cell phone");
  window.open('tel:7709419926');
}
CallForEmail(){
  console.log("Send Email");
  window.open("mailto:Sanjiwani.solutions@gmail.com");
}

componentDidMount(){
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
}
}


}

export default FAQ;