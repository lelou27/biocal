import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './Information.css';
import {AppHeader} from "../../components/AppHeader/AppHeader";

const Information: React.FC = () => {
    return (
        <IonPage>
            <AppHeader show={true}/>
            <IonContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis distinctio rerum. Aut distinctio est, eum fugiat harum inventore necessitatibus placeat possimus praesentium provident quae quia quos sint tenetur ullam.</p>
            </IonContent>
        </IonPage>
    );
};

export default Information;
