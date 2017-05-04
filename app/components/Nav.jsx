let React = require('react');
let PropTypes = require('prop-types');
let CreateClass = require('create-react-class');
let { Link, IndexLink } = require('react-router');

let Nav = CreateClass({
	
	onSearch(e){
		e.preventDefault();
		
		alert('Not yet wired up');
	},
	                      render() {
		                      return (
		                      <div className="top-bar">
			                      <div className="top-bar-left">
				                      <ul className="dropdown menu" data-dropdown-menu>
					                      <li className="menu-text">WeatherApp</li>
					                      <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get
					                                                                                                        Weather</IndexLink>
					                      </li>
					                      <li><Link to="/about" activeClassName="active"
					                                activeStyle={{fontWeight: 'bold'}}>About</Link></li>
					                      <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
					                      </li>
				                      </ul>
			                      </div>
			                      <div className="top-bar-right">
				                      <form onSubmit={this.onSearch}>
																<ul className="menu">
																	<li>
																		<input type="search" placeholder="Search weather"/>
																	</li>
																	<li>
																		<input type="submit" className="button" value="Get Weather"/>
																	</li>
																</ul>
				                      </form>
			                      </div>
		                      </div>
		                      )
	                      }
                      });

module.exports = Nav;