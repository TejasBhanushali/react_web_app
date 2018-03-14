import React, { Component } from 'react';
import {render,ReactDOM} from 'react-dom';
//import { Provider as AlertProvider } from 'react-alert';
//import AlertTemplate from 'react-alert-template-basic';
//import logo from './logo.svg';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'; // Import
import ReactImageZoom from 'react-image-zoom';
//import DisplayVariant from './DisplayVariant.jsx';
//import PubSub from 'pubsub-js';  
import ProductDetails from './ProductDetails.jsx';

import './App.css';
import ReactImageMagnify from 'react-image-magnify';
//import newId from './util/newid';

// To understnad the life cycle of react kindly visit the below site :-
//https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0
class App extends Component {

  //This is constructor call once in life cycle. this is usefule for initialization. i.e. set defulat value to properties.
  constructor(props) {
    super(props);
    console.log("************ 1.0 constructor() method gets called ****************");
    
   // this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOnLoad : true,
      isLoaded:false,
      status:"",
      product: "",
      productImages:[],
      variantKeys:[],
      variantMap:"",
      productSpecificationSet:[],
      displayImgUrl: ""
    };
    console.log("************ 1.0 Completed App.constructor() method ****************");
  } 
  
  //This is method where we are acthually calling the api.
  //This method get call whenever page load first time and user chnage any selection on variants.
  fetchFirst() {
   // console.log("************ 3.0 fetchFirst() method gets called ****************");
    console.log("###################### 3.0 fetchFirst() method gets called ######################");
    // handle this in that variable and then access inside the function
    var that = this;
    var imgBasUrl = "https://s3.amazonaws.com/instadelibucket/";
     
    var   url = 'https://192.168.1.100:8443/InstaAdminLocal/jws/productVariant/36006?Size=S&Material=Cotton&Color=%23000000&select=Color&selectValue=%23000000';
       //console.log("url:"+url);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (result) {
        
        console.log("--------- result.status ---------- "+result.status);
        console.log("----------- result.product ---------"+ result.result.product);
        //console.log(result.result.otherVariants);
        

        that.setState({ status: result.status,
          product: result.result.product,
          productImages:result.result.product.productImagesSet,
          variantKeys:result.result.product.variantKeys,
          variantMap: result.result.product.variantMap,
          productSpecificationSet: result.result.product.productSpecificationSet,
          displayImgUrl: imgBasUrl + result.result.product.imageUrl,
          isOnLoad:false,
          isLoaded:true,
         });

        
      });
      console.log("************ 3.0 Completed fetchFirst() method  ****************");
  }  

   
  //This method is get called before the componenet get mount into DOM
  //This method runs once in lifecycle and before the render, hence do all you want to do before rendering.
  componentWillMount() {
     this.fetchFirst();
  } 
  // Mounts the component into DOM  
  render() {
    
    if (this.state.isLoaded ==  true) {
      console.log("************  App.render() method has been called  ****************");
      var imgBasUrl = "https://s3.amazonaws.com/instadelibucket/";
      var that = this;
      let productV = this.state.product;
       
      var count = 0;
      return (<div id="container">
                  <ProductDetails productV={this.state.product} isOnLoad={this.state.isOnLoad}/>
              </div>
      );
      console.log("************  App.render() method has been Completed  ****************");
    }else{
      console.log("************  App.render() method not started  ****************");
      return null;
    }
    
  }
}
render(<App/>, document.getElementById('root'));
