import React from "react";

import { httpGetRewards } from "../requests";

import RewardTable from "./RewardTable"

export default class Rewards extends React.Component {
  state = {
    rewards: [],
    loading: false,
    error: ""
  };

  componentDidMount() {
   this.setState({loading:true})
   try{
    httpGetRewards().then((res) => {
      const rewards = res.data;
      this.setState({ rewards });
    });
   } catch(error){
    this.setState({error:error.message})
   }

   this.setState({loading:false})
 
  }

  render() {
    return (
      <div>
        {this.state.loading && <div>Loading</div>}
        {this.state.error && <div>{this.state.error}</div>}
        {!this.state.loading && <RewardTable rewards={this.state.rewards} />}
      </div>
    )
  }
}
