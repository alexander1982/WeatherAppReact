let React = require('react');
let PropTypes = require('prop-types');
let CreateClass = require('create-react-class');
let { Link, IndexLink } = require('react-router');

let Nav = CreateClass({

	                      onSearch(e){
		                      e.preventDefault();

		                      var location = this.refs.search.value;
		                      var encodedLocation = encodeURIComponent(location);
		                      if(location.length > 0){
			                      this.refs.search.value = '';
			                      window.location.hash = '#/?location=' + encodedLocation;
			                      console.log(encodedLocation);
		                      }
	                      },
	                      render() {
		                      return (
		                      <div className="top-bar">
			                      <div className="top-bar-left">
				                      <ul className="dropdown menu" data-dropdown-menu>
					                      <li className="menu-tex">WeatherApp</li>
					                      <li className="hide-for-small-only"><IndexLink to="/" activeClassName="active"
					                                                                     activeStyle={{fontWeight: 'bold'}}>Get
					                                                                                                        Weather</IndexLink>
					                      </li>
					                      <li className="hide-for-small-only"><Link to="/about" activeClassName="active"
					                                                                activeStyle={{fontWeight: 'bold'}}>About</Link>
					                      </li>
					                      <li className="hide-for-small-only"><Link to="/examples" activeClassName="active"
					                                                                activeStyle={{fontWeight: 'bold'}}>Examples</Link>
					                      </li>
				                      </ul>
			                      </div>
			                      <div className="top-bar-right">
				                      <form onSubmit={this.onSearch}>
					                      <ul className="menu">
						                      <li>
							                      <input ref="search" type="search" placeholder="Search weather"
							                             className="hide-for-small-only hide-for-medium-only"/>
						                      </li>
						                      <li>
							                      <input type="submit" className="button hide-for-small-only hide-for-medium-only"
							                             value="Get Weather"/>
						                      </li>
					                      </ul>
				                      </form>
			                      </div>
		                      </div>
		                      )
	                      }
                      });

module.exports = Nav;