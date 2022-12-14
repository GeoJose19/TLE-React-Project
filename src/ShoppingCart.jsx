import React,{Component} from "react";
import Product from "./Product";
export default class ShoppingCart extends Component
{
    constructor(props){
        super(props)
    this.state={
    products:[
        {id:1,productName:"iPhone",price:88000,quantity:0},
        {id:2,productName:"Sony IMX 680",price:69000,quantity:0},
        {id:3,productName:"Samsung QLED TV",price:100000,quantity:0},
        {id:4,productName:"XBox Series X",price:55000,quantity:0},
        {id:5,productName:"PS5",price:60000,quantity:0},
   
    ]
}
    }

    render(){
    return (
    <div className="container-fluid">

        <h4>Shopping Cart</h4>
        <div className="row">
            {this.state.products.map((prod)=>{
                return (
                <Product 
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                >
                    <button className="btn btn-primary">Buy Now</button>
                </Product>
            )})}


        </div>

   </div>
    


    )}




    handleIncrement=(product,maxValue)=>{
        let allProducts=[...this.state.products]
        let index=allProducts.indexOf(product)
        if(allProducts[index].quantity<maxValue){
            allProducts[index].quantity++;
            this.setState({products:allProducts})
        }
        
    };


    handleDecrement=(product,minValue)=>{
        let allProducts=[...this.state.products]
        let index=allProducts.indexOf(product)
        if(allProducts[index].quantity>minValue){
            allProducts[index].quantity--;
            this.setState({products:allProducts})  
        }
         };

    handleDelete=(product)=>{
        let allProducts=[...this.state.products];
        let index=allProducts.indexOf(product)
        if(window.confirm("Are You Sure To Delete ? ")){        
            allProducts.splice(index,1)
            this.setState({product:allProducts})  
    }} ;   
}

