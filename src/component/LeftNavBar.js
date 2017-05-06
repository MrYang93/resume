import React from 'react';
import { Link } from "react-router";
class leftNavBar extends React.Component {
    render(){
      return(
        <section className="sidebar">
          <img src="https://mryang93.github.io/images/book-cover.jpg" alt="person img" className="person" />
          <h1>杨丙林的个人{this.props.title}</h1>
          <Link to="/" activeClassName="leftNav-active" onlyActiveOnIndex={true}>
            <i className="iconfont icon-zhuye" ></i>简介
          </Link>
          <Link to="/product" activeClassName="leftNav-active">
            <i className="iconfont icon-zuopinanli"></i>作品
          </Link>
        </section>
      )
    }
}

export default leftNavBar;
