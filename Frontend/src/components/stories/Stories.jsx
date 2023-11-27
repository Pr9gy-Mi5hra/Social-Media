import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"
const Stories = () => {
  const {currentUser} = useContext(AuthContext)
  const stories = [
    {
      id: 1,
      name: "Sonia",
      img: "https://cdn.pixabay.com/photo/2014/11/17/20/55/girl-535251_1280.jpg",
    },
    {
      id: 2,
      name: "Rinki",
      img: "https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_1280.jpg",
    },
    {
      id: 3,
      name: "Riya",
      img: "https://cdn.pixabay.com/photo/2015/02/04/08/03/baby-623417_1280.jpg",
    },
    {
      id: 4,
      name: "Priya",
      img: "https://cdn.pixabay.com/photo/2018/03/27/17/25/cat-3266673_1280.jpg",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <div className="text-blue-900 mt-2">
          <span>{currentUser.name}</span>
          </div>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <div className="text-blue-950">
          <span >{story.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Stories