import React, {useEffect, useState} from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonImg,
    IonLabel,
    IonButtons,
    IonText,
    IonTextarea, IonInput, IonItem
} from '@ionic/react';
import './Account.css';
import {AppHeader} from "../../components/AppHeader/AppHeader";
import {getUser} from '../../services/UserService';

const Account: React.FC = () => {

    const [user, setUser] = useState({ _id: String, firstName: String, lastName: String, email: String});
    const [error, setError] = useState(Boolean);
    const [loaded, setLoaded] = useState(Boolean);

    useEffect(() => {
        if (!error && !loaded) {
            getLocalUser();
        }
    });

    const getLocalUser = async () => {
        try {
            const user = await getUser('5f19b195691187b0b8421dbe');
            console.log(user);
            setUser(user);
            setLoaded(true);
        } catch (e) {
            setError(true);
            setLoaded(true);
        }
    };

    const email = (user.email).toString();

    return (
        <IonPage>
            <AppHeader show={true}/>
            <IonContent>
                <IonImg className={'imgProfile'} src={require("../../assets/images/profile-b.png")}/>
                <div className={'container'}>
                    <IonTextarea className={'personalInfo'}>{user.firstName}</IonTextarea>
                    <IonTextarea disabled className={'personalInfo'}>{user.lastName}</IonTextarea>
                    <IonTextarea disabled className={'personalInfo'}>Ville</IonTextarea>
                </div>
                <h1 className={'usernameTitle'}>Gérer mes identifiant : </h1>
                <div className={'container'}>
                    <IonInput className={'personalInfo'} type={'email'} placeholder={email}></IonInput>
                    <IonInput className={'personalInfo'} placeholder={'password'}></IonInput>
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
