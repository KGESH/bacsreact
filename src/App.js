import React, { useCallback, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Story from "./routes/Story";
import FAQ from "./routes/Faq";
import Business from "./routes/Business"
import Header from "./Header";
import Footer from "./Footer/Footer";
import LoginPage from './routes/Login';
import EmailLogin from "./routes/EmailLogin";
import EmailSignUp from "./routes/EmailSignUp";
import KakaoLoginHome from "./routes/KakaoLoginHome";
import SubscribeTest from "./routes/SubscribeTest";



function App() {


  return <BrowserRouter>
    
    <Header />
    <Route path="/" exact={true} component={Home}/>
    <Route path="/oauth" component={KakaoLoginHome} />
    <Route path="/Story" component={Story}/>
    <Route path="/Business" component={Business}/>
    <Route path="/FAQ" component={FAQ}/>
    <Route path="/Login" component={LoginPage}/>
    <Route path="/EmailSignUp" component={EmailSignUp}/>
    <Route path="/SubscribeTest" component={SubscribeTest}/>

    <Footer />
  </BrowserRouter>
}

export default App;
