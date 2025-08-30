import { Footer } from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import { useState } from "react";
import { MusicCards } from "./components/MusicCards";

export const Home = () => {

    const [currentSong, setCurrentSong] = useState({
        title: null,
        artist: null,
    });
    
    const recibirInfoMusic = (InfoMusic) => {
        setCurrentSong(InfoMusic);
    }


    return (
        <div className="bg-dark text-white min-vh-100 pb-5 AppContainer">
            <Navbar />
            <div className="container vh-100 mt-4 pt-5">
                <h2 className="mb-4">Canciones recomendadas</h2>
                <div className="row">
                    <MusicCards enviarInfoMusic={recibirInfoMusic}/>
                </div>
            </div>

            <Footer
                nombreCancion={currentSong.title}
                nombreArtista={currentSong.artist}
            />
        </div>
    )
}


