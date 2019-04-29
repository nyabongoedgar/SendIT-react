import React from 'react';

const CreateOrder = (props) => {
  return (
      <div>
    <div id="wrapper">
    <div id="menu-icon-div"><span id="menu-icon" onclick="display()">&#9776;</span></div> 
        <nav>
        <div id="logo"><img src="../images/logo.jpg"/></div>
        <ul id="nav-ul">
                
            <li><a href="all-orders.html">Orders</a></li>
                <li><a href="create-parcel-delivery-order.html" class="active">Create Order</a></li>
                 
                <li><a href="../home.html" class="right-float" onclick="logout()">Logout</a></li>
            </ul>
        </nav>        

</div>

<div id="content">

<div class="container">
    <h1>CREATE PARCEL DELIVERY ORDER</h1>
        <form action="#">
            <span><p id="error"></p></span>
            <span><p id="message"></p></span>
        
        <input type="text" placeholder="parcel_description" id="parcel_description"/>
                              
        <input type="number" id="parcel_weight" placeholder="parcel_weight"/> <br/> 
                        
        <input type="text" id="parcel_source" placeholder="parcel_source"/><br/>

        <input type="text" id="parcel_destination" placeholder=" parcel_destination"/> <br/>

        <input type="text" id="receiver_name" placeholder="Enter receiver name"/>
        <br/>
        <input maxlength="10" type="text" id="receiver_telephone" placeholder="Enter receiver Telephone number starting with a 0" />
            <button type="submit" onclick="create_parcel()">CREATE ORDER</button>
        </form>

    </div>
    </div>
    </div>
  );
};

export default CreateOrder;
