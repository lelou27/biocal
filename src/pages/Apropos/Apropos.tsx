import './Apropos.css';
import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonImg,IonButtons } from '@ionic/react';
import {AppHeader} from "../../components/AppHeader/AppHeader";

const handleClick = () => {
    // this.context.location.transitionTo('login');
};

const Apropos: React.FC = () => {
    return(
        <IonPage>
            <AppHeader show={true}/>
            <IonContent>
                <div className="grid">
                    <div className="grid-image greenpeace">
                    </div>
                    <div className="grid-contenu">
                        <div className="contenu-tag">
                            <div className="tag-adherant">
                                <p className="tag-p" > Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="tag-international">
                                <p className="tag-p"> Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="tag-environnement">
                                <p className="tag-p"> Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="tag-national">
                                <p className="tag-p"> Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div className="contenu-text">
                            <p className="contenu-p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</p>
                            <p className="contenu-p"> Semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.</p>
                        </div>
                    </div>
                    <div className="button ">
                        <button ion-button  className={'accountButton'}>Faire un don</button>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}
export default Apropos;