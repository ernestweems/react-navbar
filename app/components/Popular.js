import React from 'react'

export default class Popular extends React.Component {
    render() {
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
        return (

        <ul className='flex-center'>
            {languages.map((langauge) =>(
            <li key = {langauge}>
                <button className="btn-clear nav-link">
                    {langauge}
                </button>
            </li>
            )) }     
        </ul>
        )
    }
}

