import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { parcelHandler } from '../../actions/parcel/parcelActions'
import M from 'materialize-css/dist/js/materialize.js';
import CreateParcel from '../../components/parcels/CreateParcel';


export class ParcelContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        parcel_description: '',
        parcel_weight: '',
        parcel_source: '',
        parcel_destination: '',
        receiver_name: '',
        receiver_telephone: ''
    };
    console.log(props)
  }


  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.password === this.state.password2) {
      const data = {
        parcel_description: this.state.parcel_description,
        parcel_weight: this.state.parcel_weight,
        parcel_source: this.state.parcel_source,
        parcel_destination: this.state.parcel_destination,
        receiver_name: this.state.receiver_name,
        receiver_telephone: this.state.receiver_telephone,
      };
      // this.props.parcelHandler(data);
      console.log(this.props);
      // this.props.parcelHandler(data)
    } 
  };


  render() {
    console.log(this.state)
    return (
      <div>

        <CreateParcel
          submitHandler = {this.submitHandler}
          inputHandler={this.inputHandler}
          parcel_description= {this.state.parcel_description}
          parcel_weight= {this.state.parcel_weight}
          parcel_source= {this.state.parcel_source}
          parcel_destination= {this.state.parcel_destination}
          receiver_name= {this.state.password}
          receiver_telephone= {this.state.receiver_telephone}
          isLoading={this.props.loading}
        />
      </div>
    );
  }
}

// ParcelContainer.propTypes = {
//   parcelHandler: PropTypes.func.isRequired,
// };

const mapDispatchToProps = dispatch => bindActionCreators({
  getParcelHandler: parcelHandler,
}, dispatch)


export const mapStateToProps = state => ({
  loading: state.parcelReducer.loading 
})



export default connect(mapStateToProps, mapDispatchToProps)(ParcelContainer);
