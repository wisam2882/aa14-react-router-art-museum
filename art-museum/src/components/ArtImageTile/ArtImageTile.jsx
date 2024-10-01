import { Navigate, useParams } from "react-router-dom"



const ArtImageTile = ({art})=>{
    const {artId} = useParams()
    const artImage = art.find((a)=> a.id == parseInt(artId))



    return (
        <h1>hello</h1>
    )
}

export default ArtImageTile