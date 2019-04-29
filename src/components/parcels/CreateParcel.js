import React from 'react'

const CreateParcel = (props) => {
    let Loader = require('react-loader')
    return (
        <div className="authForms">
       
        <form onSubmit={props.submitHandler} className="authForms">
        <h1>CREATE PARCEL DELIVERY ORDER</h1>
        <input onChange={props.inputHandler} value={props.parcel_description} type="text" placeholder="parcel_description" name="parcel_description" required />
                                
        <input onChange={props.inputHandler} value={props.parcel_weight} type="number" name="parcel_weight" placeholder="parcel_weight" required/> <br/> 
                        
        <input onChange={props.inputHandler} value={props.parcel_source} type="text" name="parcel_source" placeholder="parcel_source" required/><br/>

        <input onChange={props.inputHandler} value={props.parcel_destination} type="text" name="parcel_destination" placeholder=" parcel_destination" required /> <br/>

        <input onChange={props.inputHandler} value={props.receiver_name} type="text" name="receiver_name" placeholder="Enter receiver name" required />
        <br/>
        <input onChange={props.inputHandler} value={props.receiver_telephone} maxLength="10" type="text" name="receiver_telephone" placeholder="Enter receiver Telephone number starting with a 0" required />
        <Loader loaded={!props.isLoading}>
        <button type="submit">CREATE ORDER</button>
        </Loader>
        </form>
        
        </div>
    );
};

export default CreateParcel;