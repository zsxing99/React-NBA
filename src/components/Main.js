import React from 'react';
import { DataViewWrapper } from './DataViewWrapper';
import nba from 'nba'
import { Profile } from './Profile';

export class Main extends React.Component {
    state = {
        playerId: nba.findPlayer('Stephen Curry').playerId,
        playerInfo: {},
    };


    componentDidMount() {
        nba.stats.playerInfo({ PlayerID: nba.findPlayer('Stephen Curry').playerId }).then((info) => {
            console.log(info);
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            console.log(playerInfo);
            this.setState({ playerInfo });
        });
    }

    render() {
        return (
            <div className="main">
                <Profile playerInfo={this.state.playerInfo}/>
                <DataViewWrapper playerId={this.state.playerId}/>
            </div>
        );
    }
}
