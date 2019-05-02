import React, { Component } from 'react';
import axios from 'axios';

export default class retrieveParcel extends Component {
  constructor(props) {
    super(props);
    }

  get_all_parcels = () => {
        axios.get('https://sendit299.herokuapp.com/api/v2/parcels' ,
        {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
          })
        .then(response => {
           
            var content = document.getElementById('content');            
            const parcels = response.data;
            content.innerHTML += '<div class="container color-white" style="background-color:white" id="order-view-table"><caption>All orders</caption> <table id="order-table"><tr><th>Parcel ID</th><th>Parcel Description</th><th>Parcel source</th><th>Parcel Destination</th><th>Current location</th><th>Receiver name</th><th>Receiver telephone</th><th>Price quote</th><th>Status</th><th>Weight(kg)</th><th>Date placed</th></tr>'
            for(var i=0; i < parcels.length; i++){
               
                var parcel_id = parcels[i]['parcel_id'];
                var parcel_description = parcels[i]['parcel_description'];
                var parcel_source = parcels[i]['parcel_source'];
                var parcel_destination = parcels[i]['parcel_destination'];
                var current_location = parcels[i]['current_location'];
                var receiver_name = parcels[i]['receiver_name'];
                var receiver_telephone = parcels[i]['receiver_telephone'];
                var price_quote = parcels[i]['price_quote'];
                var status = parcels[i]['status'];
                var parcel_weight = parcels[i]['parcel_weight'];
                var date_created = parcels[i]['date_created'];

                document.getElementById('order-table').innerHTML += ' <tr><td>'+ parcel_id+'</td><td>'+parcel_description+'</td><td>'+parcel_source+'</td><td>'+parcel_destination+'</td><td>'+current_location+'</td><td>'+receiver_name+'</td><td>'+receiver_telephone+'</td><td>'+price_quote+'</td><td>'+status+'</td><td>'+parcel_weight+'</td><td>'+date_created+'</td></tr>';
              
               
                 
            }
            content.innerHTML += '</table></div>';
        })
        .catch(error => {
          throw(error);
        });
        

    };

   componentDidMount(){
      this.get_all_parcels()
   }

  render() {
    return (
 
      <div id="content">

      </div>
  
    );
  }
}



