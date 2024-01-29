import "./header.css";
import {useNavigate} from "react-router-dom";
import CustomButton from "../../common-components/customButton/CustomButton";
import Carousel from 'react-material-ui-carousel'
import image1 from "./../../../resources/images/wallpaper1.jpeg"
import image2 from "./../../../resources/images/wallpaper2.jpeg"
import image3 from "./../../../resources/images/wallpaper3.jpeg"
import image4 from "./../../../resources/images/wallpaper4.jpeg"
import image5 from "./../../../resources/images/wallpaper5.jpeg"

const Header = () => {
    const navigate = useNavigate();
    const handleExplore = () => {
        navigate("/");
    };
    var images = [
image1,image2,image3,image4,image5
    ]
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="header-content">
                    <div className="textContent">
                        <h1 className="headerTitle">Luxury for Less</h1>
                        <p className="headerDesc">
                            Signup for 15% discount on your first stay
                        </p>
                    </div>
                    <CustomButton className="explore-button" buttonName={"explore now"} onClick={handleExplore}/>
                </div>
                <div className="header-carousel">
                    <Carousel className={"carousel-element"}>
                        {
                            images.map( (item, i) => <img key={i} src={item} className={"carousel-image"} alt={`no-img`}/> )
                        }
                    </Carousel>
                </div>
            </div>

        </div>
    );
};

export default Header;
