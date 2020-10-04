import React, { Component } from "react";
import "../assets/css/reset.css";
import "../assets/css/snackbarToast.css";

class SnackBarToast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setClassName:"show"
            
        };
      }

      getData(){
        setTimeout(() => {
          console.log('Toast message fetch');
          this.setState({
            setClassName:""
            })
        }, 1000)
      }

      componentDidMount(){
        this.getData();
      }

     
  render() {
    return (
            <div className="snackBarMessage">
            <div id="snackbar" className={this.state.setClassName}>{this.props.toastMessage}</div>
            <div className="divider"></div>
            </div>
    );
  }

}
export default SnackBarToast;
