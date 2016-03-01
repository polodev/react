import React from 'react';
import Repo from './Repo.jsx'

class Repolist extends React.Component {
    render () {
        const userRepos = this.props.userRepos;
        return (
            <div className="list-group">
                {
                    userRepos.map(repo => {
                        return <Repo repo={repo} key={repo.id}/>
                    })
                }
            </div>
        )
    }
}

export default Repolist;
