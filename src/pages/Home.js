import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <Hero hero="defaultHero">
            <Banner title="PARADISE PERFECT" subtitle="You Truly Can Have It All At Our All Inclusive Resort">
                <Link to='/rooms' className="btn-primary">
                    Check Our Rooms
                </Link>    
            </Banner>
        </Hero>
    )
}

export default Home