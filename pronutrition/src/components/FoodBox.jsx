import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';

export default class FoodBox extends Component {
    constructor(){
        super();
        this.state={
            details:[
                {
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74-p3oWpuQhrHdHB20x-eIRy9ksOpkWlMsw&usqp=CAU",
                    name:"Apple",
                    cal:95
                },               
                {
                    image:"https://www.telegraph.co.uk/multimedia/archive/01834/orange_1834038b.jpg",
                    name:"Orange",
                    cal:45
                },
                {
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3F4wQ9Ezf5Y8VGhTDGVRRw8cYZJyRuANBpw&usqp=CAU",
                    name:"Grapes",
                    cal:55
                },
                {
                    image:"https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    name:"Pizza",
                    cal:300
                },
                {
                    image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    name:"Burger",
                    cal:200
                },
                {
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi94BSgqwm6Zzv7mx3DJWxYRWNUPC0gf3pOA&usqp=CAU",
                    name:"Banana",
                    cal:105
                }
                
                

        ]}
    }
    render(){
        return <SearchBox details={this.state.details}/> //passing the details of food to search box component as props
    }  
}
