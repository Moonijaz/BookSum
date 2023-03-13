//import "./Backgroung.css";
//import Background_img from './public/background_img.jpg';


const styles = {
    backgroundImage: `url('background_img.jpg')`,
    height: '200px',
    margin: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  //  backgroundattachment: fixed;
  //  fontfamily: "Open Sans", sans-serif;
  //  color: #333333;
};

function Background() {
    return (
        <>
       {/* <div style={styles}></div> */}
        <img src="background_img.jpg" alt="Background"/>   
        </>
    )
}

export default Background;