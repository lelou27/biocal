import {IonCol, IonGrid, IonHeader, IonImg, IonRow, IonToolbar} from "@ionic/react";
import React, {useEffect, useState} from "react";
import './AppHeader.css'
import {getActuelsXp} from "../../services/UserService";

export const AppHeader = (props: {show?: Boolean}) => {
    const [xp, setXp] = useState<any>(null);
    const [error, setError] = useState(Boolean);

    useEffect( () => {
        if(xp === null) {
            getXp();
        }
    });

    const getXp = async () => {
        try {
            const xp = await getActuelsXp('5f19b195691187b0b8421dbe');

            setXp(xp);
        } catch (e) {
            setError(true);
        }
    };

    return (
        <IonHeader>
            <IonToolbar class="toolbar">
                <IonGrid>
                    <IonRow>
                        <IonCol size="8"><IonImg src={require('../../assets/images/Biocal_LogoTypo-2.png')} class="logo" /></IonCol>
                        { props.show && <IonCol size="4"><IonImg src={require('../../assets/images/Biocal_Jauge.png')} class="jauge" /></IonCol> }
                        {props.show && <p className={'nbPointsHeader'}>{xp} points</p>}
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonHeader>
    );
};
