import fire from '../../resources/fire.svg';
import storm from '../../resources/storm.svg';
import volcano from '../../resources/volcano.svg';
const Home = () => {
    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{fontSize:"72px"}}
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="2000"
            
            >A unique Disaster tracker</h1>
                <div 
                data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="2000"
                >
                    <img  className="mapIndicator" src={fire} alt="fire.svg" />&emsp;
                    <img className="mapIndicator" src={storm} alt="storm.svg" />&emsp;
                    <img className="mapIndicator" src={volcano} alt="volcano.svg" />
                </div>
            <h3 style={{fontSize:"38px"}}>Advising decisions, ask for help and track nearby disasters...</h3>
            <h4
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
            >Made with ❤️ by Team Outliers</h4>
           
        </div>

        );
}

export default Home;