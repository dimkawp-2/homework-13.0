import React, { Component } from 'react';
import Preloader from './Preloader';
import TopMenu from './Menu/TopMenu';
import SideMenu from './Menu/SideMenu';
import Active from './Statistics/Active';
import TotalSales from './Statistics/TotalSales';


class Statistics extends Component {

  render() {
    console.log("StatisticsComponents");
    return (
      <div className="wrapper home">
      <Preloader />
      <SideMenu />
      <section id="mainContent">
        <TopMenu />
        <div className="content">
          <div className="statisticsComponents">
            <Active />
            <TotalSales />
          </div>        
        </div>
      </section>  
    </div>
    );
  }
}

export default Statistics;
