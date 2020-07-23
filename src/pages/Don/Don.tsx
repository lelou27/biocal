import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './Don.css';
import {AppHeader} from "../../components/AppHeader/AppHeader";

const Don: React.FC = () => {
    return (
        <IonPage>
            <AppHeader show={true}/>
            <IonContent>
                <textarea className={'searchField'}>Recherche</textarea>
            </IonContent>
        </IonPage>
    );
};

export default Don;
