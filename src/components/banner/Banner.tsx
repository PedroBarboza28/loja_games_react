
const Banner = () => {

  return (
    <div
      className={`mb-10 w-full `}
      style={{ height: '200px', overflow: 'hidden'}} // Para garantir que o espaço do banner seja mantido
    >
      <img
        src="https://ik.imagekit.io/netdmdufko/banner3.jpg?updatedAt=1730490194377"
        alt="North Game Banner 2"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      />
    </div>
  );
};

export default Banner;
