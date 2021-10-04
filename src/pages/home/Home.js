import React from 'react';
import { Link } from "react-router-dom";
import List from '../../components/list/List';
import './Home.scss';

export default function Home() {
    return (
        <div className="home">
            <p className="home_heading">Welcome to your dashboard!</p>
            <p className="home_texts">Here are your different labs, here are the different dashboards</p>
            <List />
            <Link to="/Pagetwo">
                <button>
                    next
                </button>
            </Link>
        </div>
    )
}
