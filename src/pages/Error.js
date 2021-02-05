import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Error() {
    return (
        <Hero>
            <Banner title="Page Not Found" subtitle="Sorry, but the page you are looking for might have moved or you might have mistyped the address. Check the URL and try again.">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
    )
}
