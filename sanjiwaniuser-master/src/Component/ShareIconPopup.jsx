import React from "react";
import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";
import "../assets/css/popup.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon
} from "react-share";

class ShareIconPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false
    };
  }

  render() {
    const shareUrl ="https://play.google.com/store/apps/details?id=com.apecto.apectouserapp";
    const title = "Apecto";

    return (
      <div id="CloseMessagePopup" className="messagePopup">
        <div className="messagePopup_inner">
          <div className="modal">
            <span className="close" onClick={this.props.closePopup}>
              &times;
            </span>
            {this.props.title ? (
              <div className="header">{this.props.title} </div>
            ) : (
              "Share this app on"
            )}
            <div className="divider-20"></div>
            <div className="scrolling-wrapper-share-icon-popup">
              <div className="popupShareAllIconList">
                <FacebookShareButton
                  url={shareUrl}
                  title={title}
                  className="popupShareIcon"
                >
                  <FacebookIcon size={42} round />
                </FacebookShareButton>

                <WhatsappShareButton
                  url={shareUrl}
                  title={title}
                  className="popupShareIcon"
                >
                  <WhatsappIcon size={42} round />
                </WhatsappShareButton>

                <TwitterShareButton
                  url={shareUrl}
                  title={title}
                  className="popupShareIcon"
                >
                  <TwitterIcon size={42} round />
                </TwitterShareButton>

                <LinkedinShareButton
                  url={shareUrl}
                  title={title}
                  className="popupShareIcon"
                >
                  <LinkedinIcon size={42} round />
                </LinkedinShareButton>

                <TelegramShareButton
                  url={shareUrl}
                  title={title}
                  className="popupShareIcon"
                >
                  <TelegramIcon size={42} round />
                </TelegramShareButton>
                <EmailShareButton
                  url={shareUrl}
                  title={title}
                  subject="Apecto Solutions Pvt.Ltd."
                  body="<html><body><b>Hey,</b><br><br/> We have developed online saloon booking app for you.Please download and booking your seat from your home.<br/><br/>Click on below link <b>https://play.google.com/store/apps/details?id=com.apecto.apectouserapp</b></body></html>"
                  className="popupShareIcon"
                >
                  <EmailIcon size={42} round />
                </EmailShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShareIconPopup;
