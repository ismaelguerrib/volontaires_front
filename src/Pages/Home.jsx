import React, { Component } from 'react'
// import HeaderVideo from "./../Components/HeaderVideo"
// import { Link } from "react-router-dom"
// import GridArticles from './../Components/GridArticles';
// import PageTitle from './../Components/PageTitle';
// import Cta from './../Components/Cta'
import Header from "./../Component/Header"

export default class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <h1>hey</h1>
        {/* <PageTitle 
        title="Browse through my articles and learn about my adventure" 
        subTitle=" Etiam eu blandit lorem. Morbi consequat eu quam in tempus. 
        Etiam auctor, magna sed tempus venenatis, arcu ante malesuada lorem, a hendrerit ex massa eu justo." />
        <GridArticles /> */}
      </div>
    )
  }
}
