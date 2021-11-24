import React from 'react'
import './SearchPage.css'
import { Button } from '@mui/material'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage_info">
                <p>62 days - 26 August to 30 August - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Felxibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult 
                img="https://clevelandtraveler.com/wp-content/uploads/2020/11/Hingetown-Loft.png"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 gueast - 1 bedroom - 1 bed - 1 ensuite bathroom - Wifi - Kitchen - Free parking - Washing machine"
                star={4.73}
                price="£40/night"
                total="£120 total"
            />

            <SearchResult 
                img="https://clevelandtraveler.com/wp-content/uploads/2020/11/Hingetown-Loft.png"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 gueast - 1 bedroom - 1 bed - 1 ensuite bathroom - Wifi - Kitchen - Free parking - Washing machine"
                star={4.5}
                price="£20/night"
                total="£80 total"
            />

            <SearchResult 
                img="https://clevelandtraveler.com/wp-content/uploads/2020/11/Hingetown-Loft.png"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 gueast - 1 bedroom - 1 bed - 1 ensuite bathroom - Wifi - Kitchen - Free parking - Washing machine"
                star={4.9}
                price="£43/night"
                total="£155 total"
            />
        </div>
    )
}

export default SearchPage
