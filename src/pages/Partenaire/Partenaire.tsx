import React, {useEffect, useState} from 'react';
import {IonButton, IonContent, IonLoading, IonPage, IonToast} from '@ionic/react';
import './Partenaire.css';
import {AppHeader} from "../../components/AppHeader/AppHeader";
import {Geolocation, Geoposition} from "@ionic-native/geolocation";

interface LocationError {
    showError: boolean;
    message?: string;
}

const Partenaire: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<LocationError>({ showError: false });
    const [position, setPosition] = useState<Geoposition>();

    useEffect( () => {
       getLocation();
    });

    const getLocation = async () => {
        if (position === undefined) {
            setLoading(true);

            try {
                const position = await Geolocation.getCurrentPosition();
                setPosition(position);
                setLoading(false);
                setError({ showError: false });
            } catch (e) {
                setError({ showError: true, message: e.message });
                setLoading(false);
            }
        }
    }

    return (
        <IonPage>
            <AppHeader/>
            <IonContent>
                <IonLoading
                    isOpen={loading}
                    onDidDismiss={() => setLoading(false)}
                    message={'Récupération de la localisation...'}
                />
                <IonToast
                    isOpen={error.showError}
                    onDidDismiss={() => setError({ message: "", showError: false })}
                    message={error.message}
                    duration={3000}
                />
                <IonButton color="primary" onClick={getLocation}>{position ? `${position.coords.latitude} ${position.coords.longitude}` : "Get Location"}</IonButton>

                {/*{console.log(position)}*/}
            </IonContent>
        </IonPage>
    );
};

export default Partenaire;
