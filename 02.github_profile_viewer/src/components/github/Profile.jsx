import React from 'react';
import Repolist from './Repolist.jsx';

class Profile extends React.Component {
    render () {
        return (
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">{this.props.userData.name}</h3>
              </div>
              <div className="panel-body">
                <div className = "row">
                    <div className='col-md-4'>
                        <img src={this.props.userData.avatar_url} className="img-responsive thumbnail" />
                    </div>
                    <div className='col-md-8'>
                        <div className="row">
                            <div className = "col-md-12 github_profile">
                                <span className="label label-primary"> {this.props.userData.public_repos} Repos </span>
                                <span className="label label-warning"> {this.props.userData.public_gists} gists </span>
                                <span className="label label-success"> {this.props.userData.following} following </span>
                                <span className="label label-info"> {this.props.userData.followers} followers </span>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className = "col-md-12">
                                <ul className="list-group">
                                  <li className="list-group-item"><strong>User Name : </strong>{this.props.userData.name}</li>
                                  <li className="list-group-item"><strong>Location : </strong>{this.props.userData.location}</li>
                                  <li className="list-group-item"><strong>Email Address: </strong>{this.props.userData.email}</li>
                                </ul>
                                <a href={this.props.userData.html_url} target="_blank" className="btn btn-info">View Profile</a>
                            </div>
                        </div>

                    </div>
                </div>
                <hr />
                <h2> User Repositories </h2>
                <ul className="list-group">
                    <Repolist {...this.props} />
                </ul>
              </div>
            </div>
            )
    }
}

export default Profile;