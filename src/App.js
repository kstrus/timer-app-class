import React from 'react';

const timerStyles = {
    fontFamily: 'sans-serif',
    width: 400,
    height: 200,
    lineHeight: '200px',
    fontSize: 100,
    border: '1px solid #ccc',
    textAlign: 'center',
    margin: '100px auto'
};

class App extends React.Component {
    state = {
        time: 0
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ time: this.state.time + 1 })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <div style={timerStyles}>{this.state.time}</div>;
    }
}

export default App;
