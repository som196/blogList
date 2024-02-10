import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div>
      {blogsList.map(each => (
        <BlogItem eachItem={each} key={each.id} />
      ))}
    </div>
  )
}

export default BlogList
