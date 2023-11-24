import React from 'react'
import styled from 'styled-components'

function FounderDetails() {
    return (
        <Div>

            <div class="context">
                <h1>Founder Details</h1>

            </div>




            <div class="area" >
                <ul class="circles">
                    <li></li> <li></li> <li></li> <li></li> <li></li> <li></li>  <li></li>  <li></li> <li></li> <li></li>  <li></li>    <li></li>
                </ul>
            </div >
        </Div>
    )
}

const Div = styled.div`
height:200vh;

@import url('https://fonts.googleapis.com/css?family=Exo:400,700');

*{
    margin: 0px;
    padding: 0px;
}
body{
    font-family: 'Exo', sans-serif;
}

.context {
    width: 100%;
    position: absolute;
    top:50vh;
    z-index:10;
    // height: 200vh;
}

.context h1{
    text-align: center;
    // color: #fff;
    font-size: 50px;
}

.area{
    // background:  #3f4c6b;  
    background: aliceblue;
    // background: -webkit-linear-gradient(to left, #3f4c6b, #606c88);  
    width: 100%;
    height:200vh;
    position: sticky;
    z-index:1;
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    // background: rgba(255, 255, 255, 0.2);
    background: orange;
    animation: animate 35s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
.circles li:nth-child(11){
    left: 15%;
    width: 30px;
    height: 30px;
    animation-delay: 0s;
    animation-duration: 21s;
}
.circles li:nth-child(12){
    left: 55%;
    width: 50px;
    height: 50px;
    animation-delay: 0s;
    animation-duration: 31s;
}

@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-2000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}

`






export default FounderDetails