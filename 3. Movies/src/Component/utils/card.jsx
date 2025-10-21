import { CardView } from "../Style/card"
import { Image } from "../Style/image"

function Card({ id, img, alt, name, type, year }) {
  return (
    <CardView id={id}>
      <Image src={img} alt={alt} />
      <h3>Name: {name}</h3>
      <p> <b>Type:</b> {type}</p>
      <p><b>Year:</b> {year}</p>
    </CardView>
  )
}

export default Card
