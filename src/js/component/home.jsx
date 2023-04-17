import React, {useState}  from "react";

const Home = () => {
    const [selectedLight, setSelectedLight] = useState(null);

    const handleLightClick = (light) => {
      setSelectedLight(light);
    };

	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div className={`trafficLight redLight ${selectedLight === "red" ? "selected" : ""}`}
				onClick={()=> handleLightClick("red")}>
				</div>
				<div className={`trafficLight yellowLight ${selectedLight === "yellow" ? "selected" : ""}`}
				onClick={()=> handleLightClick("yellow")}>
				</div>
				<div className={`trafficLight greenLight ${selectedLight === "green" ? "selected" : ""}`}
					onClick={()=> handleLightClick("green")}>
				</div>
			</div>
		</div>
	);

};

export default Home;
