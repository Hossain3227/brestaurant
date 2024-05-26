const Foodcard = ({item}) => {
    const {image,price,recipe,name} = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 mt-4 mr-4 px-4 bg-slate-900 text-white ">${price}</p>
      <div className="card-body flex flex-col items-center justify-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions items-center justify-center">
          <button className="btn btn-outline bg-slate-100 border-orange-500  border-0 border-b-4 mt-4">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;
