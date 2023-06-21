import React from 'react';
import './Widget.css';

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.intervalId = null;
    this.state = {
      data: this.props.data,
    };
  }

  componentDidMount() {
    this.startRealTimeUpdates();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ data: this.props.data });
    }
  }

  componentWillUnmount() {
    this.stopRealTimeUpdates();
  }

  startRealTimeUpdates() {
    this.intervalId = setInterval(() => {
      const updatedData = this.generateRandomData();
      this.setState({ data: updatedData });
    }, 5000); 
  }

  stopRealTimeUpdates() {
    clearInterval(this.intervalId);
  }

  generateRandomData() {
    
    const { datasets } = this.props.data;
    const updatedData = {
      ...this.props.data,
      datasets: datasets.map(dataset => {
        const { data } = dataset;
        const updatedDataset = { ...dataset };
        updatedDataset.data = data.map(value => value + Math.floor(Math.random() * 100));
        return updatedDataset;
      }),
    };
    return updatedData;
  }

  renderTable() {
    const { labels, datasets } = this.state.data;
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            {labels.map((label, index) => (
              <th key={index}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datasets.map((dataset, index) => (
            <tr key={index}>
              <td>{dataset.label}</td>
              {dataset.data.map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className={`widget ${this.props.active ? 'active' : ''}`}>
        <h3>{this.props.title}</h3>
        {this.renderTable()}
        <div className="widget-content">
          <p>Some additional content here...</p>
        </div>
      </div>
    );
  }
}

export default Widget;
