import {IonCol, IonGrid, IonHeader, IonImg, IonRow, IonToolbar} from "@ionic/react";
import React, {useEffect} from "react";
import './AppHeader.css'

export const AppHeader = (props: {show?: Boolean}) => {
    return (
        <IonHeader>
            <IonToolbar class="toolbar">
                <IonGrid>
                    <IonRow>
                        <IonCol size="8"><IonImg src={require('../../assets/images/Biocal_LogoTypo-2.png')} class="logo" /></IonCol>
                        { props.show && <IonCol size="4"><IonImg src={require('../../assets/images/Biocal_Jauge.png')} class="jauge" /></IonCol> }
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonHeader>
    );
};
