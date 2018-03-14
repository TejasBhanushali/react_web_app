import React, { Component } from 'react';
import {render,ReactDOM} from 'react-dom';
import './App.css';

export  default class Size extends React.Component {

  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    let productV = this.props.product;
    let variantKey = this.props.variantKey;
    this.state = {
        attrVal : productV.productVariantDetailsSet.filter((obj,index) =>
        (function() {
            //console.log("************ Inside function ****************"+ obj.productVariantAttributeValue.productVariantAtrributes.attributeName);
            if (obj.productVariantAttributeValue.productVariantAtrributes.attributeName == variantKey){
              //  console.log("************ obj.productVariantAttributeValue.productVariantAtrributes.attributeName := ****************"+obj.productVariantAttributeValue.productVariantAtrributes.attributeName); 
               // console.log("*********** obj.productVariantAttributeValue.attributeValue ******* "+obj.productVariantAttributeValue.attributeValue);
                // console.log("*********** index ******* "+ index);
            return true;
            
        }
     })()).map(function(obj){
        return obj.productVariantAttributeValue.attributeValue;
     }),
     isHovering: false
        };
            //console.log("************ Inside ColorV constructor() ****************");
    //console.log("************ Inside Size constructor() ****************"+props);
  }
  
  handleMouseHover() {
    //console.log("************ Inside Size handleMouseHover() ****************"); 
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    // console.log("************ Inside Size toggleHoverState() ****************"); 
    return {
      isHovering: !state.isHovering,
    };
  }

   
  componentWillMount() {
    //console.log("************ Inside Size componentWillMount() ****************");
  }  
  
  
  render() {
	{/* Check uiElement is List or what  */}   
	//console.log("************ Inside Size render() ****************");
    var imgBasUrl = "https://s3.amazonaws.com/instadelibucket/";
    let productV = this.props.product;
    let variantKey = this.props.variantKey;
    return (
        <div className="_37KLG6 col col-12-12" >
        <div className="_2a2WU_ _2PBcpj" >
           <span id="Size" className="_1lwQLq" >{this.props.variantKey}</span>
              <ul className="eaKBCI">
                 {this.props.product.variantMap[this.props.variantKey].map((obj,index) =>
               
                   <li className="_3XkO0t" id={this.props.variantKey +"-"+ obj.attributeValue + "-" + index } key={index} >
                        <button className={"_2_26Ng" + 
                       (this.state.attrVal == obj.attributeValue ? ' _26Dt15 _5FnwXU' : 
                           this.props.product.productInOthVariants[this.props.variantKey].includes(obj.attributeValue) ?
                            ' _5FnwXU':' _3-ViMg _5FnwXU')} 
                            onMouseEnter={this.handleMouseHover} 
                            onMouseLeave={this.handleMouseHover} >{obj.attributeValue}</button>
                        
                        {this.state.isHovering &&    
                        <div className="_11cw91 _1-fCbU E753YP DgCx9f">
                            <div className="_2h52bo _15sV4W CunQIh">
                                    {obj.attributeValue}
                            </div>
                        </div>}
                         
                    </li> )}
                  
                </ul>
            </div>
    </div>
    );
   
  }
}

