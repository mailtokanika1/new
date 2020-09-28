import React , {Component} from 'react';
import './main.css';
//import About from './about.js'
import FlippingCardPage from './card.js'


class Main extends Component{
  
  render(){
  
return (
          <>
          <div class="over">
          <div class="colored">
          <div class="main">
              <div class="row">

                <div class="col-lg-6">
                     <h1 class="big-heading">The Most Powerful Chechking Account</h1>
                     <h3>Our checking account gives you higher returns than a savings account with no hidden fees.</h3>
                    <button type="button" class="btn btn-dark btn-lg download-button"><i class="fab fa-apple"></i> Download</button>
                    <button type="button" class="btn btn-outline-light btn-lg download-button"><i class="fab fa-google-play"></i> Download</button>
                         <br></br>
                         
                         <input type="email" name="userEmail" required="required" placeholder="Enter Email Address"  class="h-full w-full xs:xs-paragraph-slate-gray md:lg-paragraph-slate-gray mail" /> 
                         <button class="btn btn-primary navbar-btn p-3 px-4 mr-4 font-weight-bold">Join Now</button>
                         
                </div>

                <div class="col-lg-6">
                    <img class="title-image" src="mo.png" alt="iphone-mockup" />
                </div>

            </div>

        </div>
        </div>

        <div class="im">
            <h4 class="back">BACKED BY THE BEST</h4>
            <div class="row main">
            <div class="col-md-4 col-sm-12">

            <img  class="responsive" src="1.png" />
            </div>

            <div class="col-md-4 col-sm-12">

            <img class="responsive" src="2.png" />
            </div>

            <div class="col-md-4 col-sm-12">

            <img class="responsive" src="3.png" />
            </div>
            </div>
        </div>
        

     
            
        <div class="im2 main">
        <div class="row">
            <div class="col-md-6 col-sm-12">
          <h4>Start saving for a rainy day fund</h4>
          <h1>Use Our Checking Account to Achieve Your Financial Goals</h1>
          <p>With the latest Federal rate cut, the largest banks are offering close to 0% APY on their checking and savings accounts. OnJuno checking will earn you more than 20x the national average*. Deposits up to $250,000 are FDIC insured through our banking partner Evolve Bank and Trust. Grow your idle money faster with our checking account and start saving towards a rainy day fund, big expense, or vacation.</p>
            </div>
            <div class="col-md-6 col-sm-12">
            <img class="responsive1" src="4.svg" />
              </div>
        </div>
        </div>

        <div class="car">
          <h1>Sign up early to save more</h1>
          <p>Depending on the level of your checking account, you’ll earn between 1.15%3 to 2.15%1 bonus rate.</p>
        </div>

        <div class="row main">
        <div class="col-md-4 col-sm-12">
        <img class="responsive2" src="c1.png" />
        <div class="border">
          <p class="A">METAL</p>
          <h1 class="a">2.15%</h1>
          <span class="box">5%</span> <span class="c">cash back</span>
          <div class="box1">
            <span class="b">2223</span><span class="c"> / 5000.</span>
          </div>
          <br></br>
          <progress max="100" value="80"></progress>
        </div>
        <button class="btn btn-primary navbar-btn p-3 px-6 mr-5 font-weight-bold btn-lg">Sign Up Now</button>

        <FlippingCardPage title="Includes!!" text="Charcoal Black Metal Card" text1="2.15%1 Bonus Rate Checking Account"
        text2="5% Cash back on brands you love" text3="Free Cash Withdrawals"/>
      
        </div>

        <div class="col-md-4 col-sm-12">
        <img class="responsive2" src="c2.png" />
        <div class="border">
          <p class="A">PREMIUM</p>
          <h1 class="aa">1.65%</h1>
          <span class="boxx">4%</span> <span class="c">cash back</span>
          <div class="box1">
            <span class="bb">0</span><span class="c"> / 2000.</span>
          </div>
          <br></br>
          <progress max="100" value="0"></progress>
        </div>
        <button class="btn btn-secondary navbar-btn p-3 px-6 mr-5 font-weight-bold btn-lg disabled">Up Next</button>

        <FlippingCardPage title="Includes!!" text="Free Debit Card" text1="1.65%2 Bonus Rate Checking Account"
        text2="4% Cash back on brands you love" text3="Free Cash Withdrawals"/>
        
        </div>
        <div class="col-md-4 col-sm-12">
        <img class="responsive2" src="c3.png" />

        <div class="border">
          <p class="A">BASIC</p>
          <h1 class="aa">1.15%</h1>
          <span class="boxx">3%</span> <span class="c">cash back</span>
          <div class="box1">
            <span class="bb">0</span><span class="c"> / 10000.</span>
          </div>
          <br></br>
          <progress max="100" value="0"></progress>
        </div>
        <button class="btn btn-secondary navbar-btn p-3 px-6 mr-5 font-weight-bold btn-lg disabled">Coming Soon</button>

        <FlippingCardPage title="Includes!!" text="Free Debit Card" text1="1.15%3 Bonus Rate Checking Account"
        text2="3% Cash back on brands you love" text3="Free Cash Withdrawals"/>
        
        </div>
        </div>
        </div>
          </>
        );
      }
    }
export default Main;
