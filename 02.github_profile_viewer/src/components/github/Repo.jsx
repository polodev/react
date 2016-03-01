import React from 'react';

class Repo extends React.Component{
    render () {
        return (
            <div className="list-group-item">
                <a href={this.props.repo.html_url}>{this.props.repo.name}</a> : {this.props.repo.description}
            </div>
        )
    }
}

export default Repo;