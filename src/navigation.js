import React , {Component} from 'react';
import './navigation.css';
//import About from './about.js'
import FlippingCardPage from './card.js'


class Navigation extends Component{
  state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }
  render(){
  //const sections = ['About','Portfolio','Interest-Skills','Work Experience'];
  //const navLinks = sections.map( section => {
  //return (
    //<li><a href={'#' + section }>{section}</a></li>
//)

//});
return (
          <>
         <div class="main">
          <section class="colored-section" id="title">
            <nav class="navbar navbar-expand-lg navbar-light">

                  {/*<a class="navbar-brand" href="">Welcome to My Page</a>*/}
                  <img src="on.JPG" />
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                      <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link font-weight-bold" href="#knowledge">Home</a>
                      </li>
                      <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle font-weight-bold" data-toggle="dropdown" href="#">Company<span class="caret"></span></a>
                      <ul class="dropdown-menu">
                        <li><a class="font-weight-bold" href="#">About</a></li>
                        <li><a class="font-weight-bold" href="#">Newsroom</a></li>
                        <li><a class="font-weight-bold" href="#">Careers</a></li>
                        <li><a class="font-weight-bold" href="#">Partners</a></li>
                    </ul>
                        </li>
                      
                        <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle font-weight-bold" data-toggle="dropdown" href="#">Learn<span class="caret"></span></a>
                      <ul class="dropdown-menu">
                        <li><a class="font-weight-bold" href="#">Blog</a></li>
                        <li><a class="font-weight-bold" href="#">Guides</a></li>
                        <li><a class="font-weight-bold" href="#">Help Center</a></li>
                    </ul>
                        </li>
                        <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle font-weight-bold" data-toggle="dropdown" href="#">Legal<span class="caret"></span></a>
                      <ul class="dropdown-menu">
                        <li><a class="font-weight-bold" href="#">Privacy Policy</a></li>
                        <li><a class="font-weight-bold" href="#">Terms of Use</a></li>
                        <li><a class="font-weight-bold" href="#">Trademarks</a></li>
                    </ul>
                        </li>


                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                    <button class="btn btn-primary navbar-btn p-2 px-4 mr-3 font-weight-bold">Login</button>
                    <button class="btn btn-outline-primary my-2 p-2 px-4 my-sm-0 font-weight-bold" type="submit">SignUp</button>
                    
                    </ul>
                    
                 

                  </div>
                </nav>
             </section>
             </div>
          </>
        );
      }
    }
export default Navigation;
