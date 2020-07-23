import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  cardOutline,
  cashOutline,
  informationCircleOutline,
  mapOutline,
  personCircleOutline
} from 'ionicons/icons';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/account" component={Account} exact={true} />
          <Route path="/fidelity" component={Fidelity} exact={true} />
          <Route path="/don" component={Don} />
          <Route path="/partenaire" component={Partenaire} />
          <Route path="/information" component={Apropos} />
          <Route path="/" render={() => <Redirect to="/account" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="account" href="/account">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Mon compte</IonLabel>
          </IonTabButton>
          <IonTabButton tab="fidelity" href="/fidelity">
            <IonIcon icon={cardOutline} />
            <IonLabel>Carte fidélité</IonLabel>
          </IonTabButton>
          <IonTabButton tab="don" href="/don">
            <IonIcon icon={cashOutline} />
            <IonLabel>Faire don</IonLabel>
          </IonTabButton>
          <IonTabButton tab="partenaire" href="/partenaire">
            <IonIcon icon={mapOutline} />
            <IonLabel>Carte partenaire</IonLabel>
          </IonTabButton>
          <IonTabButton tab="information" href="/information">
            <IonIcon icon={informationCircleOutline} />
            <IonLabel>Informations</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
