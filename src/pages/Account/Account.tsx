import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Account.css';
import {AppHeader} from "../../components/AppHeader/AppHeader";

const Account: React.FC = () => {
    return (
        <IonPage>
            <AppHeader />
            <IonContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis distinctio rerum. Aut distinctio est, eum fugiat harum inventore necessitatibus placeat possimus praesentium provident quae quia quos sint tenetur ullam.</p>
            </IonContent>
        </IonPage>
    );
};

export default Account;
