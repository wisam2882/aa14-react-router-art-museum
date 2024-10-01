import { Navigate, useParams } from "react-router-dom"


const GalleryView = ({galleries})=>{
    const {galleryId} = useParams()
    // console.log(galleryId)
    const gallery = galleries.find((g)=> g.id == parseInt(galleryId))
    console.log(gallery)
    if(!gallery){
        return <Navigate to="/"></Navigate>
    }
    return (
        <h2>{gallery.name}</h2>

    )
}


export default GalleryView