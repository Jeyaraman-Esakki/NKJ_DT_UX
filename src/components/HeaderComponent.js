import React, { Component } from "react";
class HeaderComponent extends Component{

    render(){
        return(
            <div className = "header-container flex middle fluid-width">
                    <div className = "header-container-text f-xl pl-xs">
                        { this.props.title }
                    </div>
                    <div className="fab secondary-color-bg">
                        <div>+</div>
                    </div>
            </div>
        );
    }
}
export default HeaderComponent;