import Profile from "../Profile/Profile";
import "./Gallery.css";

export default function Gallery() {
  return (
    <>
      <h2 className="title">American actress and inventor</h2>
      <div className="gallery">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </>
  );
}
