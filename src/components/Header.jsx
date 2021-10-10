import React from 'react';
import "../styles.css";
import {Link, BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MarkdownMain from "./markdownMain"
import NoteMain from "./NoteMain"

function Header() {
	return (
		// everthing will be inside the Router 
		<Router>
			<div className='header'>
				<h1 >Productivity App</h1>
				<div >
					{/* the link buttons */}
					<Link to="/markdownMain" className="save">
					Markdown Text Editor </Link>
					<Link to="/" className="save" >
					Note Taking App </Link>
				</div>	
						
			</div>
			{/* create routes  */}
			<Switch>
				<Route path="/markdownMain" component={MarkdownMain} />
				<Route path="/"  component={NoteMain} />
			</Switch>
		</Router>
	);
};

export default Header;