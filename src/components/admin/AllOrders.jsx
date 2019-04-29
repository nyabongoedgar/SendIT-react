import React from 'react'
import '../../styles/main.css';
import '../../styles/view-all-orders.css';

const AllOrders = (props) => {
  return (
      <div>
        <div id="wrapper">
    <div id="menu-icon-div"><span id="menu-icon" onclick="display()">&#9776;</span></div> 
    <nav>
            <div id="logo"><img src="../images/logo.jpg"/></div>
            <ul id="nav-ul">
                   
                    <li><a href="all-orders.html" class="active">Orders</a></li>
                    <li><a href="../home.html" class="right-float" onclick="logout()">Logout</a></li>
              
                </ul>
    </nav>        

</div>

<div id="content">

</div>

</div>

  );
}

export default AllOrders;
