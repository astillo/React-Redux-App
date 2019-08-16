import React from 'react'
import { connect } from 'react-redux'
import { getRockets } from '../actions/index'
import { Card, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const LaunchList = props => {
    const fetchLaunches = e => {
        e.preventDefault();
        props.getRockets();
    }
    console.log(props.rockets)
    return (<Card><Card.Header>Mission Name: {props.rockets.mission_name}</Card.Header>
        <Card.Header>Time Launched: {props.rockets.launch_date_utc}</Card.Header>
        <Card.Header>Fairing Recovered? {props.rockets.rocket && props.rockets.rocket.fairings.recovered.toString()} </Card.Header>
        <Button onClick={fetchLaunches}>Get Recent Launch</Button>
    </Card>)
}
const mapStateToProps = state => ({
    rockets: state.rockets
})
export default connect(mapStateToProps, { getRockets })(LaunchList)