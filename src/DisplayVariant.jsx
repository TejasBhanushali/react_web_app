import React, { Component } from 'react';
import {render,ReactDOM} from 'react-dom';
import ColorV from './ColorV.jsx';
import Size from './Size.jsx';
import Material from './Material.jsx';
import './App.css';

export  default class DisplayVariant extends React.Component {

  constructor(props) {
    super(props);
     
  }  
   
  componentWillMount() {
   // console.log("************ Inside DisplayVariant componentWillMount() ****************");
  }  
  
  render() {
	{/* Check uiElement is List or what  */}   
	// console.log("************ Inside DisplayVariant render() ****************"+this.props.product.variantKeys);
   // var imgBasUrl = "https://s3.amazonaws.com/instadelibucket/";
    let productV = this.props.product;
    var onClickFunc = () => this.props.onClick();
    return (
        <div className="rPoo01" data-reactid="variant" >
            {this.props.product.variantKeys.map((variantKey,index) => 
            
               (function() {
                switch(variantKey) {
                    case 'Color': return <ColorV product={productV} variantKey={variantKey} key={index} onClick={onClickFunc}/>;break;
                   // case 'Size': return  <Size product={productV} variantKey={variantKey} key={index} onClick={onClickFunc} />;break;
                    //case 'Material': return  <Material product={productV} variantKey={variantKey} key={index} onClick={onClickFunc}/>;break;
                    default: return  <p data-reactid={variantKey} key={index}>{variantKey}</p>;break;
                }
            })())
            
            }
        </div>
    );
   
  }
}

