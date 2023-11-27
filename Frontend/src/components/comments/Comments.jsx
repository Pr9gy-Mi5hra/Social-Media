import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      desc:"In the cherubic countenance of the infant, a sublime innocence twinkles softly through those serene, wide eyes, radiating outwards an entire world of pure, unadulterated joy and tender warmth, presenting a captivating reflection of unspoiled wonder, offering glimpses into a universe uncharted, where every charming smile and giggle unravels boundless delight and promises an abundance of happiness.",
      name: "Shivam Tripathi",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc:"In the cherubic countenance, innocence twinkles through serene eyes, radiating a world of pure joy and tender warmth, a captivating reflection of unspoiled wonder.",
      name: "Arpita",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};
export default Comments;