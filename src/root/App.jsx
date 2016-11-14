import React, { Component } from 'react';
import DiscordGuild from "../control/DiscordGuild"
import ServerDisplay from "../components/ServerDisplay"
import ServerList from "../components/ServerList"
import logo from "../../public/logo.svg";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div>
				<div className="wrapper">
					<section className="header">
						<div id="UserDisplay"></div>
						<div className="title">FredBoat</div>
						<ServerDisplay guild={DiscordGuild.placeholder}/>
					</section>
					<ServerList/>
					<section className="logoSection">
						<img className="logo" src={logo} style={{display: "none"}} alt="logo" draggable="false"></img>
					</section>
					<section className="main">
						<section className="settingsLeftContainer">
							<div id="settingsLeft"></div>
						</section>
						<section className="page" id="page">
							<input type="checkbox" id="memes"/>
							<label for="memes">Dank</label>
						</section>
					</section>
				</div>
				<section className="footer">
					<div className="footerText">
						FredBoat-Web &#169; Fre_d licensed under the <a href="https://github.com/Frederikam/FredBoat-Web/blob/master/LICENSE">MIT License</a>.
					</div>
				</section>
			</div>
		);
	}
}

export default App;