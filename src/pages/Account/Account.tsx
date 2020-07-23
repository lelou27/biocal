import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonImg,IonButtons } from '@ionic/react';
import './Account.css';
import {AppHeader} from "../../components/AppHeader/AppHeader";

const Account: React.FC = () => {
    return (
        <IonPage>
            <AppHeader/>
            <IonContent>
                <IonImg className={'imgProfile'} src={require("../../assets/images/profile-b.png")}/>
                <div className={'container'}>
                    <textarea disabled className={'personalInfo'}>Prénom</textarea>
                    <textarea disabled className={'personalInfo'}>Nom</textarea>
                    <textarea disabled className={'personalInfo'}>Ville</textarea>
                </div>
                <h1 className={'usernameTitle'}>Gérer mes identifiant : </h1>
                <div className={'container'}>
                    <textarea className={'personalInfo'}>Email</textarea>
                    <textarea className={'personalInfo'}>Password</textarea>
                </div>
                <div className={'buttondiv'}>
                    <button ion-button className={'accountButton'}>Modifier</button>
                    <br/>
                    <button ion-button className={'accountButton'}>Déconnexion</button>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Account;
