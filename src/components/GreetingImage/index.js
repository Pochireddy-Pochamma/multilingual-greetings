import './index.css'

const GreetingImage = props => {
  const {details} = props
  const {imageUrl, imageAltText} = details

  return (
    <div className="img-cont">
      <img src={imageUrl} alt={imageAltText} className="image" />
    </div>
  )
}
export default GreetingImage
