

function ExpertiseCard({image , heading , desc}) {
  return (
    <>
      <div className="relative">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="absolute bottom-0 rounded-b-xl text-white  bg-black bg-opacity-30 py-4">
          <h1 className="  text-2xl font-bold">{heading}</h1>
          <p className="">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default ExpertiseCard;
