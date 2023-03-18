
const styles = {
 // backgroundImage: `url('background_img.jpg')`,
  height: '200px',
  margin: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
//  backgroundattachment: fixed;
//  fontfamily: "Open Sans", sans-serif;
//  color: #333333;
};

function Image() {
  return (
    <div className="left">
      <div className="overlay">
        <img src="./Photo by Janko Ferlic on Pexels.jfif" width="550px" alt="Photo by Janko Ferlic on Pexels" />
      </div>
    </div>


  );
}

export default Image;