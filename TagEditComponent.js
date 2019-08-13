import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class TagEditComponent extends Component{
  

    fieldList = [];
    render(){
        return(
            <div className="tag-edit-container pl-m">
               <TextField
                    id="standard-name"
                    label="Tag Name"
                    className=""
                    value=""
                    margin="normal"
                    required
                />
                <div>
                    <TextField
                        id="standard"
                        label="Field Name"
                        className=""
                        value=""
                        margin="normal"
                        
                    />
                    <TextField
                        id="standard"
                        label="Data Type"
                        className="ml-m"
                        value=""
                        margin="normal"
                        
                    />

                <FormControlLabel
                        control={
                        <Checkbox
                            checked={true}
                            value="checkedB"
                            color="primary"
                            margin="normal"

                        />
                        }
                        label="Is Mandatory"
                        margin="normal"
                        className="ml-m mt-m"
                    />

                </div>
            </div>
        );
    }
}
export default TagEditComponent;