import {IonCol, IonGrid, IonHeader, IonImg, IonRow, IonToolbar} from "@ionic/react";
import React from "react";
import './AppHeader.css'

export const AppHeader = () => {
    return (
        <IonHeader>
            <IonToolbar class="toolbar">
                <IonGrid>
                    <IonRow>
                        <IonCol size="8"><IonImg src={require('../../assets/img/Biocal_LogoTypo-2.png')} class="logo" /></IonCol>
                        <IonCol size="4"><IonImg src={require('../../assets/img/Biocal_Jauge.png')} class="jauge" /></IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonHeader>
    );
}
