import { PlayFill, PauseFill, SkipStartFill, SkipEndFill, Heart } from "react-bootstrap-icons";


export const Footer = ({nombreCancion, nombreArtista}) => {
  return (
    <footer className="bg-dark text-white fixed-bottom d-flex align-items-center justify-content-between px-4 py-2 shadow-lg">
      
      <div className="d-flex align-items-center gap-2">
        <div   className="text-truncate fixedSize">
          {nombreCancion != null ? <div className="fw-bold text-truncate">{nombreCancion}</div> 
          : <div className="fw-bold">Nombre de la canción desconocido</div>}

          {nombreCancion != null ? <div className="text-secondary small text-truncate ">{nombreArtista}</div> 
          : <div className="text-secondary small">Artista desconocido</div>} 
        </div>
      </div>

      <div className="d-flex align-items-center gap-3">
        <SkipStartFill size={20} />
        <PlayFill size={24} className="text-success" />
        <SkipEndFill size={20} />
      </div>


      <div className="flex-grow-1 mx-4">
        <div className="progress" style={{ height: "5px" }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: "10%" }}
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

    </footer>
  )
}
