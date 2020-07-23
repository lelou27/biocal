import React, {useEffect, useState} from 'react';
import {IonButton, IonContent, IonLoading, IonPage, IonToast} from '@ionic/react';
import './Partenaire.css';
import {AppHeader} from "../../components/AppHeader/AppHeader";
import {Geolocation, Geoposition} from "@ionic-native/geolocation";
import L, {LatLng} from 'leaflet';
import {getCommercants} from "../../services/CommercantService";

interface LocationError {
    showError: boolean;
    message?: string;
}

const Partenaire: React.FC = (props: any) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<LocationError>({ showError: false });
    const [position, setPosition] = useState<Geoposition>();
    const [mapLoading, setMapLoading] = useState(true);
    const [commercants, setCommercants] = useState<any>(null);

    useEffect( () => {
        if (commercants === null) {
            getCommercantsLocal();
        }
    });

    const getCommercantsLocal = async () => {
        try {
            const commercantsLocal = await getCommercants();

            setCommercants(commercantsLocal);
        } catch (e) {
            setCommercants(e);
        }
    }

    const getLocation = async () => {
        if (position === undefined && mapLoading) {
            setLoading(true);

            try {
                const position = await Geolocation.getCurrentPosition();
                setPosition(position);
                setLoading(false);
                setError({ showError: false });

                if (position !== undefined) {
                    const mymap = L.map('mapid').setView([position.coords.latitude, position.coords.longitude], 13);
                    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                        maxZoom: 18,
                        id: 'mapbox/streets-v11',
                        tileSize: 512,
                        zoomOffset: -1,
                        accessToken: 'sk.eyJ1IjoibGVsb3UyNyIsImEiOiJja2N6M3d6N3YwZzRpMzJwdnB4cGsxYmViIn0.TEdL1io22h4mfKmZNqUddw'
                    }).addTo(mymap);

                    const greenIcon = new L.Icon({
                        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        shadowSize: [41, 41]
                    });
                    const marker = L.marker([position.coords.latitude, position.coords.longitude], {icon: greenIcon}).addTo(mymap);

                    const markers = [];
                    let i = 0;
                    for (const com of commercants) {
                        markers.push(L.marker([parseFloat(com.latitude), parseFloat(com.longitude)]).addTo(mymap))
                        markers[i].bindPopup(`${com.name} <br /> ${com.adress} - ${com.poscod}`).openPopup();
                        i++;
                    }
                    marker.bindPopup("<b>Votre position</b>").openPopup();
                    setMapLoading(false);
                }

            } catch (e) {
                setError({ showError: true, message: e.message });
                setLoading(false);
            }
        }
    }

    const renderMap = () => {
        if (position !== undefined) {
            const mymap = L.map('mapid').setView([51.505, -0.09], 13);
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'sk.eyJ1IjoibGVsb3UyNyIsImEiOiJja2N6M3d6N3YwZzRpMzJwdnB4cGsxYmViIn0.TEdL1io22h4mfKmZNqUddw'
            }).addTo(mymap);
            const marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap);
            setMapLoading(false);
        }
    }

    return (
        <IonPage>
            <AppHeader show={true}/>
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

                <div id="mapid"></div>
            </IonContent>
        </IonPage>
    );
};

export default Partenaire;
