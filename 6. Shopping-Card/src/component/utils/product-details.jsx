
function ProductDetails({ image, name, description }) {
  return (
    <section className='d-flex align-items-center'>
      <div className='me-3'>
        <img src={image} alt="image" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px'}}/>
      </div>
      <div>
        <span>{name}</span><br />
        <span>{description}</span>
      </div>
    </section>
  )
}

export default ProductDetails
