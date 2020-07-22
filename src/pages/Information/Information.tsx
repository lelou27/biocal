import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Information.css';

const Information: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Information</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis distinctio rerum. Aut distinctio est, eum fugiat harum inventore necessitatibus placeat possimus praesentium provident quae quia quos sint tenetur ullam.</p>
            </IonContent>
        </IonPage>
    );
};

export default Information;
