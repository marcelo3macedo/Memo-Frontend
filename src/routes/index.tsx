import React from "react";
import { Switch, useLocation } from "react-router-dom";
import Router from "./Router";
import { useSelector } from "react-redux";

import { Layouts } from "@config/Layouts";
import SignIn from "@pages/auth/SignIn";
import SignUp from "@pages/auth/SignUp";
import Recover from "@pages/auth/Recover";
import Recovered from "@pages/auth/Recovered";
import Main from "@pages/main/Main";
import Deck from "@pages/main/Deck";
import About from "@pages/main/About";
import Help from "@pages/main/Help";
import MyAccount from "@pages/main/MyAccount";
import AddDeck from "@pages/main/AddDeck";
import EditDeck from "@pages/main/EditDeck";
import Session from "@pages/main/Session";
import PrivacyPolicy from "@pages/main/PrivacyPolicy";
import SessionCompleted from "@pages/main/SessionCompleted";
import Home from "@pages/public/Home";
import Review from "@pages/main/Review";
import Account from "@pages/main/Account";
import Profile from "@pages/main/Profile";
import History from "@pages/main/History";
import Gallery from "@pages/main/Gallery";
import Activate from "@pages/auth/Activate";
import Validation from "@pages/auth/Validation";
import { RootState } from "@store/modules/rootReducer";
import GalleryDeck from "@pages/public/GalleryDeck";
import Sessions from "@pages/main/Sessions";

import { PATH_FORGOT_PASSWORD, PATH_SESSION, PATH_SIGN_IN, PATH_SIGN_UP, PATH_RECOVERED, PATH_SESSION_COMPLETED, PATH_PRIVACY_POLICY, PATH_ABOUT, PATH_HELP, PATH_MYACCOUNT, PATH_ADDDECK, PATH_EDITDECK, PATH_DECK, PATH_REVIEW, PATH_MAIN, PATH_HOME, PATH_ACCOUNT, PATH_PROFILE, PATH_HISTORY, PATH_GALLERY, PATH_ACTIVE, PATH_EMAIL_VALIDATION, PATH_GALLERYDECK, PATH_SESSIONS } from "@services/Navigation";

export default function Routes() {
    const location = useLocation();
    const { signed } = useSelector((state:RootState) => state.auth);
    const dynamicLayout = signed ? Layouts.Main : Layouts.Visitor;

    return (
        <Switch location={location}>
            <Router path={PATH_MAIN} exact component={Main} layout={Layouts.Main} />
            <Router path={PATH_SESSIONS} component={Sessions} layout={Layouts.Main}/>     
            <Router path={PATH_GALLERY + "/:search"} component={Gallery} layout={Layouts.Main}/>
            <Router path={PATH_GALLERY} component={Gallery} layout={Layouts.Main}/>            
            <Router path={PATH_GALLERYDECK + "/:path"} component={GalleryDeck} layout={dynamicLayout} public />
            <Router path={PATH_ABOUT} component={About} layout={Layouts.Main}/>  
            <Router path={PATH_HELP} component={Help} layout={Layouts.Main}/>  
            <Router path={PATH_MYACCOUNT} component={MyAccount} layout={Layouts.Main}/>   
            <Router path={PATH_DECK + "/:path/:id"} component={Deck} layout={Layouts.Main}/>  
            <Router path={PATH_ADDDECK} component={AddDeck} layout={Layouts.Main}/>  
            <Router path={PATH_EDITDECK} component={EditDeck} layout={Layouts.Main}/>
            <Router path={PATH_PRIVACY_POLICY} component={PrivacyPolicy} layout={Layouts.Main}/>  
            <Router path={PATH_SESSION + "/:id"} component={Session} layout={Layouts.Main}/>
            <Router path={PATH_ACCOUNT} component={Account} layout={Layouts.Main}/>
            <Router path={PATH_PROFILE} component={Profile} layout={Layouts.Main}/>
            <Router path={PATH_HISTORY} component={History} layout={Layouts.Main}/>
                        
            <Router path={PATH_REVIEW} component={Review} layout={Layouts.Full}/>              
            <Router path={PATH_SESSION_COMPLETED} component={SessionCompleted} layout={Layouts.Full}/>                          
            
            <Router path={PATH_SIGN_IN} component={SignIn} layout={Layouts.Auth}/>    
            <Router path={PATH_FORGOT_PASSWORD} component={Recover} layout={Layouts.Auth}/>
            <Router path={PATH_SIGN_UP} component={SignUp} layout={Layouts.Auth}/>
            <Router path={PATH_RECOVERED} component={Recovered} layout={Layouts.Auth}/>
            <Router path={PATH_ACTIVE} component={Activate} layout={Layouts.Auth}/>
            <Router path={PATH_EMAIL_VALIDATION} component={Validation} layout={Layouts.Auth}/>

            <Router path={PATH_HOME} exact component={Home} layout={Layouts.Public}  />
        </Switch>
    );
}