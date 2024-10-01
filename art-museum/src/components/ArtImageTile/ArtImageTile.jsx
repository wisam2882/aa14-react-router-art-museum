import { Link } from "react-router-dom"



const ArtImageTile = ({art})=>{

// const image = art.images[0]
    console.log(art)
const image = art.images[0]
if(!image && art.title == "Three-handled Loving Cup"){ return (
    <div>
    <p>Title: {art.title}</p>
    <img src="https://ids.hvrd.art/ids/view/20682387?width=256&height=256" alt={art.title} height={50}/>
    </div>
)}
    return (
        <div>
        <p>Title: {art.title}</p>
        <Link to={`art/${art.id}`}>
        <img src={image.baseimageurl} alt={art.title} height={50}/>
        </Link> 
        </div>
    )
}

export default ArtImageTile

