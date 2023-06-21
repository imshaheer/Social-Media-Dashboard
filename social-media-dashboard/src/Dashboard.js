import React from 'react';
import Widget from './Widget';
import './Dashboard.css';

class Dashboard extends React.Component {
  render() {
    const twitterAnalyticsData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Followers',
          data: [1200, 1300, 1250, 1400, 1350, 1500, 1450],
        },
        {
          label: 'Tweets',
          data: [10, 12, 8, 15, 11, 13, 9],
        },
        {
          label: 'Likes',
          data: [25, 28, 20, 30, 27, 32, 29],
        },
      ],
    };

    const instagramAnalyticsData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Followers',
          data: [800, 820, 810, 830, 820, 840, 835],
        },
        {
          label: 'Posts',
          data: [5, 7, 4, 6, 8, 6, 5],
        },
        {
          label: 'Likes',
          data: [20, 22, 18, 23, 25, 24, 21],
        },
      ],
    };

    return (
      <div className="dashboard">
        <h2>Social Media Analytics</h2>
        <div className="widgets-container">
          <Widget title="Twitter Analytics" data={twitterAnalyticsData} active={true} />
          <Widget title="Instagram Analytics" data={instagramAnalyticsData} active={false} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
