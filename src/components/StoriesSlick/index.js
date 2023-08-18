import Slider from 'react-slick'
import './index.css'

const StoriesSlick = props => {
  const {userStories} = props

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  }

  const renderEachStory = eachStory => {
    const {
      user_id: userId,
      user_name: userName,
      story_url: storyUrl,
    } = eachStory

    return (
      <div key={userId} className="story-container">
        <img className="story-image" src={storyUrl} alt="user story" />
        <p className="story-username">{userName}</p>
      </div>
    )
  }

  return (
    <>
      <Slider {...settings} className="desktop-slick">
        {userStories.map(renderEachStory)}
      </Slider>
      <Slider {...settings} slidesToShow={4} className="mobile-slick">
        {userStories.map(renderEachStory)}
      </Slider>
    </>
  )
}

export default StoriesSlick
