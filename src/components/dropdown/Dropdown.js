import React, { Component } from 'react';

class Dropdown extends Component {
   
    state = {
        list: [
            {
            label:'Upcoming',
            value: 'upcoming'
            },
            {
            label:'Top Rated',
            value: 'top_rated'
            },
            {
            label:'Now Playing',
            value: 'now_playing'
            },
            {
            label:'Popular',
            value: 'popular'
            },
        ],
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Dropdown;