import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import TagPaneComponent from "./TagPaneComponent";
import TagEditComponent from "./TagEditComponent";
class TagManagerComponent extends Component{

    render(){
        return(
            <div className="fluid">
                <HeaderComponent title = "Tag Manager" />
                <div className="flex row">
                        <TagPaneComponent></TagPaneComponent>
                        <TagEditComponent></TagEditComponent>
                </div>
            </div>
        );
    }
}

export default TagManagerComponent;