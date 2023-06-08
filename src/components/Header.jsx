import React from 'react'
import WeatherBtn from './WeatherBtn'

function Header() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let currentDay = (new Date).getDay()
    let index = 0
    let buttons = []
    while (index !== 8) {
        let day = index++ + currentDay
        if (day > 6) {
            day -= 7
        }
        buttons.push(<WeatherBtn date = {days[day]} weather = "sunny" />)
}

    return (
        <nav>
            {buttons}
        </nav>
    )
}

export default Header