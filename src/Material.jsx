import React, { Component } from 'react';
import {render,ReactDOM} from 'react-dom';
import './App.css';

export  default class Material extends React.Component {

  constructor(props) {
    super(props);
    let productV = this.props.product;
    let variantKey = this.props.variantKey;
    this.state = {
        attrVal : productV.productVariantDetailsSet.filter((obj,index) =>
        (function() {
            //console.log("************ Inside Consturctor of Materail ****************"+ obj.productVariantAttributeValue.productVariantAtrributes.attributeName);
            if (obj.productVariantAttributeValue.productVariantAtrributes.attributeName == variantKey){
               // console.log("************ obj.productVariantAttributeValue.productVariantAtrributes.attributeName := ****************"+obj.productVariantAttributeValue.productVariantAtrributes.attributeName); 
                //console.log("*********** obj.productVariantAttributeValue.attributeValue ******* "+obj.productVariantAttributeValue.attributeValue);
                // console.log("*********** index ******* "+ index);
            return true;
            
        }
     })()).map(function(obj){
        return obj.productVariantAttributeValue.attributeValue;
     })
        };
            //console.log("************ Inside ColorV constructor() ****************");
   //console.log("************ Inside Material constructor() ****************"+props);
  }  
   
  componentWillMount() {
    //console.log("************ Inside Material componentWillMount() ****************");
  }  
  
  
  render() {
	{/* Check uiElement is List or what  */}   
	//console.log("************ Inside Material render() ****************");
    var imgBasUrl = "https://s3.amazonaws.com/instadelibucket/";
    let productV = this.props.product;
    let variantKey = this.props.variantKey;
    return (
        <div className="_37KLG6 col col-12-12" >
        <div className="_2a2WU_ _2PBcpj" >
           <span id="Color" className="_1lwQLq" >{this.props.variantKey}</span>
              <ul className="eaKBCI">
                 {this.props.product.variantMap[this.props.variantKey].map((obj,index) =>               
                    <li className="_3XkO0t" key={index} >                   
                        <button className={"_2_26Ng" + 
                       (this.state.attrVal == obj.attributeValue ? ' _26Dt15 _5FnwXU' : 
                           this.props.product.productInOthVariants[this.props.variantKey].includes(obj.attributeValue) ?
                            ' _5FnwXU':' _3-ViMg _5FnwXU')} >{obj.attributeValue}</button>                       
                    </li> )}
                  
                </ul>
            </div>
    </div>
    );
   
  }
}

