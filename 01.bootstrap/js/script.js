//Navbar
var  Navbar = React.createClass({
    propTypes : {
        brand : React.PropTypes.string.isRequired
    },
    getDefaultProps : function () {
        return {
            brand : 'Hello world',
            color : 'light'
        }
    },
    render: function() {
        var nav_color = this.props.color == 'light' ? 'navbar navbar-default' : 'navbar navbar-inverse'
        var isHome = '', isAbout='';
        if(this.props.page == 'home'){
            isHome = 'active';
        }else if (this.props.page == 'about'){
            isAbout = 'active';
        }
        return (
            <div>
                <nav className={nav_color} id="main-navbar" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <a href="index.html" className="navbar-brand">{this.props.brand}</a>
                        </div>

                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className={isHome}><a onClick={this.props.HomeClick} href="#">Home</a></li>
                                <li className={isAbout}><a onClick={this.props.AboutClick} href="#">About</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
});
//Jumbotron
var  Jumbotron = React.createClass({
    propTypes : {
        heading : React.PropTypes.string,
        text : React.PropTypes.string,
        link : React.PropTypes.string
    },
    getDefaultProps : function () {
        return {
            heading : 'welcome',
            text : 'Welcome to our shiny website which is created by React js',
            link : 'http://www.google.com'
        }
    },
    render: function() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1> {this.props.heading} </h1>
                        <p>{this.props.text}</p>
                        <p><a className="btn btn-primary btn-lg" href={this.props.link} role="button">Learn more &raquo;</a></p>
                    </div>
                </div>
            </div>
        );
    }
});

//HomePage Component
var  PageHome = React.createClass({
    render: function() {
        return (
            <div className='container'>
               <div className="row">
                    <h1>Welcome to Home page</h1>
                    <p>Here is the some Home content</p>
               </div>
            </div>

        );
    }
});
var PageAbout = React.createClass({
    render : function () {
        return (
                <div className='container'>
                    <h1>Welcome to About page</h1>
                    <p>Here is the some about content</p>
                </div>
            )
    }
});
//Footer component
var  Footer = React.createClass({
    getDefaultProps : function () {
        return {
            company : "Cyber Eye, Inc",
            year : 2016
        }
    },
    render: function() {
        return (
            <div className='container'>
                <hr />
                <footer>
                    <p>&copy; {this.props.year} {this.props.company}.</p>
                </footer>
            </div>
        );
    }
});

//Main App
var  App = React.createClass({
    getInitialState : function () {
        return {
            page : 'home'
        }
    },
    HandleHomeClick : function () {
        this.setState({page : 'home'});
    },
    HandleAboutClick : function () {
        this.setState({page : 'about'});
    },
    render: function() {
        var jumbotron, page;
        if(this.state.page == 'home'){
            jumbotron = <Jumbotron />
            page = <PageHome />
        }else if(this.state.page == 'about'){
            jumbotron = '';
            page = <PageAbout />
        }
        return (
            <div>
                <Navbar 
                    brand="React js" 
                    color='dark'
                    page={this.state.page}
                    HomeClick = {this.HandleHomeClick}
                    AboutClick = {this.HandleAboutClick}/>
                    {jumbotron}
                    {page}
                <Footer />
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));