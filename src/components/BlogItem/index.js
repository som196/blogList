import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {title, publishedDate, description} = eachItem
  return (
    <div className="item-container">
      <div className="title-date-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description-container">{description}</p>
      <hr className="separater" />
    </div>
  )
}

export default BlogItem
