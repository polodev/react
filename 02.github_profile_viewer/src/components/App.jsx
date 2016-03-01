import React from 'react';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';


class App extends React.Component {
    constructor(props){
        super (props);
        this.state = {
            username  : 'polodev',
            userData : [],
            userRepos : [],
            perPage : 5
        }
    }
    //Get user data from github
    getUserData(){
        $.ajax({
            url : 'http://api.github.com/users/'+ this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
            dataType : 'json',
            cache : false,
            success : function (data) {
                this.setState({userData : data});
                console.log(data);
            }.bind(this),
            error : function (xhr, status, err){
                this.setState({username : null});
                alert(err);
            }.bind(this)
        })
    }
    //Get user repo from github
    getUserRepo(){
        $.ajax({
            url : 'http://api.github.com/users/'+ this.state.username + '/repos?per_page'+ this.state.perPage +'/client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
            dataType : 'json',
            cache : false,
            success : function (data) {
                this.setState({userRepos : data});
                console.log(data);
            }.bind(this),
            error : function (xhr, status, err){
                this.setState({username : null});
                alert(err);
            }.bind(this)
        })
    }
    componentDidMount(){
        this.getUserData();
        this.getUserRepo();
    }
    handleSubmit(username){
        this.setState({username : username}, function () {
            this.getUserData();
            this.getUserRepo();
            
        })
    }

    render () {
        return (
            <div>
                <Search formSubmit={this.handleSubmit.bind(this)} />
                <Profile {...this.state} /> 
            </div>
        )
    }
}
App.propTypes = {
    clientId : React.PropTypes.string,
    clientSecret : React.PropTypes.string
};
App.defaultProps = {
    clientId : 'a318d18fa48b9749a89f',
    clientSecret : '37e8c9d82a31294613fdb759678484e2cb14242a'
};
export default App;
