import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonImg,IonButtons } from '@ionic/react';
import './Account.css';
import {AppHeader} from "../../components/AppHeader/AppHeader";
import Barcode from "react-native-barcode-builder";

const Account: React.FC = () => {
    return (
        <IonPage>
            <AppHeader/>
            <IonContent>
                <IonImg className={'imgProfile'} src={require("../../assets/images/profile-b.png")}/>
                <div>
                    <textarea disabled>Prénom</textarea>
                    <textarea disabled>Nom</textarea>
                    <textarea disabled>Ville</textarea>
                </div>
                <h1>Gérer mes identifiant : </h1>
                <div>
                    <textarea>Email</textarea>
                    <textarea>Password</textarea>
                </div>
                <div className={'buttondiv'}>
                    <button ion-button>Modifier</button>
                    <br/>
                    <button ion-button>Déconnexion</button>
                </div>
                <Barcode value="Hello World" format="CODE128" />
            </IonContent>
        </IonPage>
    );
};

export default Account;
