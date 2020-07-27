import React from 'react';

function Search(props) {
    return (
        <div className="searchbar">
            <form onSubmit={props.ignoreSubmit} className="form-inline">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    className="form-control"
                    type="text"
                    placeholder="Filter by name"
                />
            </form >
        </div>
    )
}

export default Search;