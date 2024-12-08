
import "@styles/coursecard.css"

const CourseCard = () => {
  return (
    <div className="card-container" >
      <img src="https://picsum.photos/id/1/300/200" alt="Card Image"  className='card-img'/>
      <h1 className='card-title'>Card Title</h1>
      <p className='card-desc'>This is the card description.</p>
      <a href="cardPage" className='card-btn'>Learn more</a>
    </div>
  )
}

export default CourseCard
