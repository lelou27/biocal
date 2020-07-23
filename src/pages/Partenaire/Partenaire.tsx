import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Partenaire.css';
import {AppHeader} from "../../components/AppHeader/AppHeader";

const Partenaire: React.FC = () => {
    return (
        <IonPage>
            <AppHeader show={true}/>
            <IonContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis distinctio rerum. Aut distinctio est, eum fugiat harum inventore necessitatibus placeat possimus praesentium provident quae quia quos sint tenetur ullam.</p>
            </IonContent>
        </IonPage>
    );
};

export default Partenaire;
