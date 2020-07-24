import React, {useEffect, useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonImg,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {isLogged} from "./services/UserService";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Account from "./pages/Account/Account";
import Fidelity from "./pages/Fidelity/Fidelity";
import Don from "./pages/Don/Don";
import Partenaire from "./pages/Partenaire/Partenaire";
import Information from "./pages/Information/Information";
import Apropos from "./pages/Apropos/Apropos";
import FaireDon from "./pages/FaireDon/FaireDon";
import {Auth} from "./pages/Auth/Auth";

const App: React.FC = () => {
    const [userLogged, setUserLogged] = useState(Boolean);

    useEffect(() => {
        isLogged().then((logged) => {
            setUserLogged(logged)
        });
    });

    return (
        <IonApp>
        <IonReactRouter>
          { !userLogged && (
              <Auth />
          ) }
          { userLogged && (<IonTabs>
            <IonRouterOutlet>
              <Route path="/account" component={Account} exact={true} />
              <Route path="/fidelity" component={Fidelity} exact={true} />
              <Route path="/don" component={Don} />
              <Route path="/partenaire" component={Partenaire} />
              <Route path="/APropos" component={Apropos} />
              <Route path="/FaireDon" component={FaireDon} />
              <Route path="/" render={() => <Redirect to="/account" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom" class={'menu'}>
              <IonTabButton tab="account" href="/account">
                <IonImg src={require('./assets/images/BIOCAL_Profil.png')} class={'tabBarImg tabProfil'}/>
              </IonTabButton>
              <IonTabButton tab="fidelity" href="/fidelity">
                <IonImg src={require('./assets/images/Biocal_Logo.png')} class={'tabBarImg tabCarte'}/>
              </IonTabButton>
              <IonTabButton tab="don" href="/don">
                <IonImg src={require('./assets/images/BIOCAL_Dons.png')} class={'tabBarImg tabDon'}/>
              </IonTabButton>
              <IonTabButton tab="partenaire" href="/partenaire">
                <IonImg src={require('./assets/images/BIOCAL_Partenaires.png')} class={'tabBarImg tabPartn'}/>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
            )}
        </IonReactRouter>
      </IonApp>
    )
};

export default App;
