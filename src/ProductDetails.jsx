import React, { Component } from 'react';
import {render,ReactDOM} from 'react-dom';
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert'; // Import
import ReactImageZoom from 'react-image-zoom';
import DisplayVariant from './DisplayVariant.jsx';
import PubSub from 'pubsub-js';  
import ColorV from './ColorV.jsx';

import './App.css';
import ReactImageMagnify from 'react-image-magnify';
//import newId from './util/newid';

// To understnad the life cycle of react kindly visit the below site :-
//https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0
export  default class ProductDetails extends Component {

  //This is constructor call once in life cycle. this is usefule for initialization. i.e. set defulat value to properties.
  constructor(props) {
    super(props);
    console.log("************ 1.0 ProductDetails.constructor() method gets called ****************");
    var imgBasUrl = "https://s3.amazonaws.com/instadelibucket/";
   // this.handleClick = this.handleClick.bind(this);
    this.state = {
      status:"",
      isLoaded:true,
      isOnLoad : this.props.isOnLoad,
      product: this.props.productV,
      productImages:this.props.productV.productImagesSet,
      variantKeys:this.props.productV.variantKeys,
      variantMap:"",
      productSpecificationSet:this.props.productV.productSpecificationSet,
      displayImgUrl: imgBasUrl + this.props.productV.imageUrl 
    };
    console.log("************ 1.0 ProductDetails.constructor() method gets completed  ****************"+this.state.variantKeys);
  } 
  
   
 
  //This is method where we are acthually calling the api.
  //This method get call whenever page load first time and user chnage any selection on variants.
  fetchProductBasedOfSelction() {
   // console.log("************ 3.0 fetchFirst() method gets called ****************");
    console.log("###################### 3.0 ProductDetails.fetchProductBasedOfSelction() method gets called ######################");
    // handle this in that variable and then access inside the function
    var that = this;
    var imgBasUrl = "https://s3.amazonaws.com/instadelibucket/";
     
    var   url = 'https://192.168.1.100:8443/InstaAdminLocal/jws/productVariant/36006?Size=M&Material=Cotton&Color=%230000FF&select=Size&selectValue=M';
       //console.log("url:"+url);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (result) {
     
        that.setState({ status: result.status,
          product: result.result.product,
          productImages:result.result.product.productImagesSet,
          variantKeys:result.result.product.variantKeys,
          variantMap: result.result.product.variantMap,
          productSpecificationSet: result.result.product.productSpecificationSet,
          displayImgUrl: imgBasUrl + result.result.product.imageUrl,
          isOnLoad:false,
           isLoaded:true
         });

        console.log("Completing  fetchProductBasedOfSelction");
      });
     
   // console.log("************ 3.0 Completed fetchFirst() method  ****************");
  }  

  

  //This method is get called before the componenet get mount into DOM
  //This method runs once in lifecycle and before the render, hence do all you want to do before rendering.
  
  handleClick(data) {
    console.log("-------------- ProductDetails.handleClick is getting called --------------- "+data);
    this.fetchProductBasedOfSelction();
   // this.fetchBasedOnValidation(data);
  }
  
  displayImage(url){
    this.setState({
      displayImgUrl:url
    });
    //console.log("************  displayImage() method has been called  ****************"+url);
    }
  
  
  // Mounts the component into DOM  
  render() {
    if(this.state.isLoaded == true){
      console.log("************ 4.0 started ProductDetails.Render() method gets called ****************");
      var imgBasUrl = "https://s3.amazonaws.com/instadelibucket/";
      let productV = this.state.product;
      var that = this;   
      //let productImages = this.state.product.productImagesSet;
      var count = 0;
      return (
      <div className="_divWH1"  >
         <div className="_divWH2" styles="padding-top:96px;" >
            <div className="_divWH3" >
               <div className="_divWH3" >
                  <div  className="_divWH3 _1Zddhx" >
                     <div className="_divWH4 _1GRhLX _3N5d1n" >
                        <div className="_divWH4 _33MqSN" >
                           <div className="_divWH5 _3S6yHr" >
                              <div className="_26KFgP" >
                                 <div className="_2wEmBu" >
                                    {/* This div is responsible for products extra images */} 
                                    <div className="_divWH6 _3Z9-Oj" >
                                       <div className="_3aYEat" >
                                          <div className="_21PE8N _divWH7"  >
                                             <ul className="LzhdeS _divWH7 _ulWH1" >
                                                <li className="_4f8Q22 _1WPMdP" style={{height:'64px'}}>
                                                   <div className="_20J1N6 " >                                                       
                                                      <div className="_1kJJoT" style={{backgroundImage:`url(${imgBasUrl + this.state.product.imageUrl})`}} 
                                                      onClick={() => this.displayImage(imgBasUrl + this.state.product.imageUrl)} 
                                                      onMouseOver={() => this.displayImage(imgBasUrl + this.state.product.imageUrl)}>
                                                   </div>
                                          </div>
                                          </li>
                                           {this.state.product.productImagesSet.map((productOthImages,index) =>
                                            <li className="_4f8Q22 _1WPMdP" style={{height:'64px'}} key={index} >
                                                 <div className="_20J1N6" id={that.state.product.product_Id + productOthImages.productImgId}  >                                                       
                                                <div className="_1kJJoT" style={{backgroundImage:`url(${imgBasUrl + productOthImages.productImageUrl})`}} 
                                                onClick={() => that.displayImage(imgBasUrl + productOthImages.productImageUrl)} 
                                                onMouseOver={() => that.displayImage(imgBasUrl + productOthImages.productImageUrl)} ></div>
                                                </div>
                                              </li> )}
                                       </ul>
                                    </div>
                                    <div className="_1sPU_V _2-5Z5m LwZTRD"  >
                                       <svg width="8" height="15" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_1gnlcU" >
                                          <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" className="" >
                                          </path>
                                       </svg>
                                    </div>
                                    <div className="_1sPU_V _3-urXm LwZTRD" >
                                       <svg width="8" height="15" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_1gnlcU" >
                                          <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" className="" >
                                          </path>
                                       </svg>
                                    </div>
                                 </div>
                              </div>
                              {/* This div is responsible to show selected product image */}
                              <div className="_1hMRnR" style={{ height:'420px',width:'auto'}}>
                                 <div className="_2SIJjY fluid__image-container" style={{ height:'420px',width:'auto'}} >
                                 <ReactImageMagnify {...{
                                 largeImage: {
                                 alt: '',
                                // src: imgBasUrl + this.state.product.imageUrl,
                                 src:this.state.displayImgUrl,
                                 width: 1200,
                                 height: 1800
                                 },
                                 smallImage: {
                                 isFluidWidth: true,
                                 alt: 'Wristwatch by Ted Baker London',
                                 //src: imgBasUrl + this.state.product.imageUrl,
                                 src:this.state.displayImgUrl,
                                 sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 460px'
                                 },
                                 isHintEnabled: true,
                                 enlargedImagePosition: 'over'
                                 }} />                          
                                  
                              </div>
                           </div>
                        </div>
                        <div className="_3gDSOa _2rDH5A" >
                           <div className="DsQ2eg" >
                              <svg xmlns="http://www.w3.org/2000/svg" className="_2oLiqr" width="16" height="16" viewBox="0 0 20 16" >
                                 <path d="M7.695 15.35C3.06 11.14 0 8.356 0 4.958 0 2.172 2.178 0 4.95 0 6.516 0 9.164 1.764 9 2.91 9.164 1.763 11.484 0 13.05 0 15.822 0 18 2.172 18 4.958c0 3.398-3.06 6.183-7.695 10.392L9 16.54l-1.305-1.19z" fill="#2874F0" className="_35Y7Yo" ></path>
                              </svg>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/*This div is responsible for product details */}
                  <div className="_2Cl4hZ" >
                     <div className="_1MVZfW" >
                        <div className="_2UDlNd" >
                           <div data-reactid="157">
                              <h1 className="_3eAQiD" >
                                 {this.state.product.name}
                              </h1>
                              <div className="_1vC4OE _37U4_g" >
                                 <span><h1 className="_3eAQiD" > ₹ </h1>
                                  </span>
                                 <span>{this.state.product.cost}</span>
                              </div>
                              
                              
                           </div>
                        </div>
                       {/*This div is responsible for product Variants */} 
                        
                          {that.state.variantKeys.length > 0 && 
                           <div className="rPoo01" data-reactid="variant" >
                           {that.state.product.variantKeys.map((variantKey,index) => 
                              
                              (function() {
                                count = count + 1;
                               switch(variantKey) {
                                   case 'Color': return <ColorV product={productV} variantKey={variantKey} key={index} 
                                    onClick={(data) => that.handleClick(data)} 
                                    id={"ColorV"+ that.state.variantKey +"-" + count +  index } />;break;
                                  // case 'Size': return  <Size product={productV} variantKey={variantKey} key={index} onClick={onClickFunc} />;break;
                                   //case 'Material': return  <Material product={productV} variantKey={variantKey} key={index} onClick={onClickFunc}/>;break;
                                   default: return  <p data-reactid={variantKey} key={index}>{variantKey}</p>;break;
                               }
                           })())
                           
                           }
                       </div>
                          
                          
                        }
  
                          
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   </div>
   </div>
      );
    }else{
      return null;
    }
    
   
  }

 

 
}
