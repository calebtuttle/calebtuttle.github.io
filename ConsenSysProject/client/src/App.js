import React, { Component } from "react";
import JobBoardContract from "./contracts/JobBoard.json";
import getWeb3 from "./getWeb3";

import JobPost from "./JobPost";
import "./App.css";

class App extends Component {
  state = { jobPostings: [], web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = JobBoardContract.networks[networkId];
      const instance = new web3.eth.Contract(
        JobBoardContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      const jobCount = await instance.methods.jobCount().call();
      let jobPostings = []
      for (var jobId = 1; jobId < jobCount; jobId++) {
        let job = await instance.methods.getJob(jobId).call();
        job = [jobId, job.poster, job.title, job.description];
        jobPostings.push(job);
      }

      this.setState({ jobPostings, web3, accounts, contract: instance });
    } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
    }
  };

  postJob = async (event) => {
    event.preventDefault();
    const { jobPostings, accounts, contract } = this.state;

    let title = event.target.elements.jobTitle.value;
    let desc = event.target.elements.jobDescription.value;
    let jobId = await contract.methods.jobCount().call();
    await contract.methods.postJob(title, desc).send({ from: accounts[0] });

    let posting = [jobId, accounts[0], title, desc];
    let postings = jobPostings;
    postings.push(posting);

    this.setState({ jobPostings: postings });

    console.log("Posted new job with jobId " + posting[0])
  }

  runExample = async () => {
    const { jobPostings, accounts, contract } = this.state;

    var title = "Solidity Developer";
    var desc = "Write solidity, write tests, etc....";
    await contract.methods.postJob(title, desc).send({ from: accounts[0] });
    let response = await contract.methods.getJob(1).call();
    let posting = [response['poster'], response['title'], response['description']];
    let postings = jobPostings;
    postings.push(posting);

    this.setState({ jobPostings: postings });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    let jobPosts = this.state.jobPostings.map((posting) => 
        <JobPost key={posting[0]} web3={this.state.web3} accounts={this.state.accounts} contract={this.state.contract} 
            jobId={posting[0]} poster={posting[1]} title={posting[2]} description={posting[3]} />
    );

    return (
      <div className="App">
        <h1>A Decentralized Job Board</h1>
        <hr/>
        <form onSubmit={this.postJob}>
            <label>
                Job title: <input type="text" name="jobTitle" required />
            </label>
            <br/>
            <label>
                Job description: <input type="text" name="jobDescription" required />
            </label>
            <br/>
            <input type="submit" value="Post job" />
        </form>
        <br/>
        {jobPosts}
      </div>
    );
  }
}

export default App;
