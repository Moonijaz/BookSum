//import "./Backgroung.css";
//import Background_img from './public/background_img.jpg';


const styles = {
    backgroundImage: `url('background_img.jpg')`,
    height: '200px',
    margin: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
<<<<<<< HEAD
    backgroundattachment: 'fixed',
   // fontfamily: 'Open Sans', 'sans-serif';
  //  color: #333333;
=======
    //  backgroundattachment: fixed;
    //  fontfamily: "Open Sans", sans-serif;
    //  color: #333333;
>>>>>>> f315b03a9b6533fc22a6083e38e4accdcef3e805
};

function Background() {
    return (
        <>
            {/* <div style={styles}></div> */}
            <img src="background_img.jpg" alt="Background" />
        </>
    )
}

export default Background;