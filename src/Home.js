import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'


function Home() {
    return (
        <div calssName= 'home'>
            {/* <h1>Home Component</h1> */}
            <Banner />

            <div className='home_section'>
                
            <Card 
                    src="https://cdn.decoist.com/wp-content/uploads/2020/10/Gorgeous-use-of-sliding-glass-doors-connect-the-entire-home-with-the-landscape-outside-it-51813-870x520.jpg"
                    title="Online Experiences"
                    description="Unique activites we can do together, led by a world of hosts."
            />
            <Card 
                    src="https://cdn.decoist.com/wp-content/uploads/2020/10/Gorgeous-use-of-sliding-glass-doors-connect-the-entire-home-with-the-landscape-outside-it-51813-870x520.jpg"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
            />
            <Card 
                    src="https://cdn.decoist.com/wp-content/uploads/2020/10/Gorgeous-use-of-sliding-glass-doors-connect-the-entire-home-with-the-landscape-outside-it-51813-870x520.jpg"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends and family."
            />
            </div>

            <div className='home_section'>
                <Card
                    src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title="Studio apartment"
                    description="Superhost with great amenities and a fabulous shopping complex nearby"
                    price="£130/night" 
                />
                <Card
                    src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse" 
                    price="£250/night" 
                />
                <Card
                    src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title="1 bedroom apartment"
                    description="Superhost with a stunning view of the beachside in Sunny Bournemouth" 
                    price="£175/night" 
                />
            </div>
        </div>
    )
}

export default Home
