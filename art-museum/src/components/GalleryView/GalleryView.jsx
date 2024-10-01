import { Navigate, useParams } from "react-router-dom"
import ArtImageTile from "../ArtImageTile/ArtImageTile"

const GalleryView = ({galleries})=>{
    const {galleryId} = useParams()
    // console.log(galleryId)
    const gallery = galleries.find((g)=> g.id == parseInt(galleryId))
    // console.log(gallery.objects)

    if(!gallery){
        return <Navigate to="/"></Navigate>
    }
    return (
        <div className="artTile">
        <h2>{gallery.name}</h2>
        {
            gallery.objects.map((object) => (
                <ArtImageTile key= {object.id} art={object}/>
            ))
        }
        </div>
    )
}


export default GalleryView