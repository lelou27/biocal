import React, {useState} from "react";
import {
    IonButton, IonCol,
    IonContent, IonGrid,
    IonHeader, IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonList, IonRow,
    IonText,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import "./Auth.css";
import {Link} from "react-router-dom";
import {login} from "../../services/AuthService";

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

export const Auth = () => {
    const [ email, setEmail ] = useState<any>('');
    const [ password, setPassword ] = useState<any>('');
    const [user, setUser] = useState<any>(null);

    const [ formErrors, setFormErrors ] = useState<any>({});

    const submit = async () => {
        try {
            if (!email) {
                throw Error('Veuillez entrer une adresse email');
            }
            if (!password) {
                throw Error('Veuillez entrer une adresse email');
            }

            const userData = await login(email, password);

            if (userData instanceof Error) {
                throw Error('Impossible de connecter l\'utilisateur');
            }

            await setUserToStorage(userData);

        } catch (e) {
            setFormErrors(e);
        }
    }

    const setUserToStorage = async(userData: Object) => {
        await Storage.clear();

        await Storage.set({
            key: 'user',
            value: JSON.stringify(userData)
        });

        window.location.href = '/';
    }

    return (
        <>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size="12">
                            <IonImg class="ion-margin-top imageAuth" src={require('../../assets/images/Biocal_LogoTypo-2.png')} />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12" class="titleAuth">
                            <IonText>Connexion</IonText>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12">
                            <form className="ion-padding" onSubmit={(e) => { e.preventDefault(); submit();}}>
                                <div>
                                    {formErrors ? (<span className="color-danger">{formErrors.message}</span>
                                    ): null}
                                </div>
                                <IonList>
                                    <IonItem>
                                        <IonInput class="inputAuth" placeholder="Email" name="email" type="email" value={email} onIonChange={(e) => setEmail((e.target as HTMLInputElement).value)}/>
                                    </IonItem>
                                    <IonItem>
                                        <IonInput class="inputAuth" placeholder="Password" name="password" type="password" value={password} onIonChange={(e) => setPassword((e.target as HTMLInputElement).value)}/>
                                    </IonItem>
                                </IonList>
                                <IonRow>
                                    <IonCol class="forgetPassItem">
                                        <Link to="/" >Mot de passe oublié ?</Link>
                                    </IonCol>
                                </IonRow>


                                <IonRow class="rowButtonAuth">
                                    <IonCol>
                                        <IonButton class="btnAuth ion-color" type="submit">Se connecter</IonButton>
                                    </IonCol>
                                </IonRow>
                                <IonRow class="rowButtonAuth">
                                <IonCol>
                                        <IonButton class="btnAuth ion-color">S'inscrire</IonButton>
                                    </IonCol>
                                </IonRow>
                            </form>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </>
    )
}
