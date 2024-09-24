export default function Card({ image, location, name, rating, price }) {
  return (
    <div className="card">
      <img src={image} alt="" width="200px" />
      <h2>{location}</h2>
      <h3>{name}</h3>
      {/* rating */}{" "}
      <p className={rating >= 4.0 ? "rating-high" : "rating-low"}>{rating} ★</p>
      <h4>{price}</h4>
    </div>
  );
}
