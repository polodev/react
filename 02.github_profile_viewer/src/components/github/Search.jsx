import React from 'react';

class Search extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        let username = this.refs.username.value.trim(); 
        if(!username){
            alert('Plese enter a username to search');
            return;
        }
        this.props.formSubmit(username);
        this.refs.username.value = '';
    }
    render () {
        return (
                <div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>Search github username</label>
                        <input type="text" ref="username" className="form-control" />
                    </form>
                </div>
            )
    }
}

export default Search;