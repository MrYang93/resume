import React from 'react';
class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <section className="index">
                    <ul>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>基本信息
                                </dt>
                                <dd>
                                    <span>个人信息:</span>杨丙林 / 男 / 24岁
                                </dd>
                                <dd>
                                    <span>毕业院校:</span>邯郸学院
                                </dd>
                                <dd>
                                    <span>应聘岗位:</span>前端工程师
                                </dd>
                                <dd>
                                    <span>现居住地:</span>北京丰台三环新城
                                </dd>
                                <dd>
                                    <span>目前情况:</span>可随时到岗
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>联系方式
                                </dt>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-phone"></i>
                                        联系电话:
                                    </span>
                                    18330014337
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-weixin"></i>
                                        联系微信:
                                    </span>
                                    786429442
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-QQ"></i>
                                        联系QQ:
                                    </span>
                                    786429442
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-gmail"></i>
                                        联系邮箱:
                                    </span>
                                    786429442@qq.com
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-github"></i>
                                        github:
                                    </span>
                                    <a href="https://github.com/mryang93">https://github.com/mryang93</a>
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-markdown"></i>
                                        Markdown笔记:
                                    </span>
                                    <a href="https://mryang93.github.io/">https://mryang93.github.io/</a>
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-icon"></i>
                                        简历源码:
                                    </span>
                                    <a href="https://github.com/mryang93/resume">https://github.com/mryang93/resume</a>
                                </dd>
                            </dl>
                        </li>

                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>主要技能
                                </dt>
                                <dd className="skill">
                                    <ul>
                                        <li className="primary">HTML5</li>
                                        <li className="primary">CSS3</li>
                                        <li className="primary">Javascript</li>
                                        <li className="primary">jQuery</li>
                                        <li className="secondary">Bootstrap</li>
                                        <li className="secondary">git</li>
                                        <li className="secondary">sass</li>
                                        <li className="secondary">React</li>
                                        <li className="secondary">Redux</li>
                                        <li className="secondary">Ajax</li>
                                        <li className="secondary">JSON</li>
                                        <li className="secondary">ES6</li>
                                        <li className="secondary">HTTP</li>
                                        <li className="know">node.js</li>
                                        <li className="know">MongoDB</li>
                                        <li className="know">express</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>技能详解
                                </dt>
                                <dd className="detail-skill">
                                    <ul>
                                        <li>
                                            <div className="round"></div>
                                            <h4>HTML5 / CSS3 / SCSS</h4>
                                            <p>能够编写语义化的HTML，熟练运用div+css 浮动布局，flexbox 弹性布局,css3动画;</p>
                                            <p>熟悉SCSS书写，gulp，webpack自动化工具的运用，进行模块化开发;</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>Javascript</h4>
                                            <p>熟悉原生的Javascript，对原型，原型链，对象，闭包等都有一定的了解;能脱离jQuery等库编写一些常见的功能，如轮播图，计算器，购物车等等;</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>jQuery</h4>
                                            <p>熟悉jQ的用法，能使用jQuery快速完成常见功能的开发;</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>Bootstrap</h4>
                                            <p>熟悉Bootstrap框架，使用栅格系统，媒体查询，Bootstrap组件，来完成响应式的页面开发;</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>git</h4>
                                            <p>有自己的github账号，能使用git实现代码的上传、分支合并、克隆、版本回滚、等常用的一些操作;</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>React /  Ajax / JSON  / ES6 / Redux / React-Redux / Redux-thunk /</h4>
                                            <p>掌握npm包管理工具的使用，能使用ES6语法和React库进行模块化的开发，能实现基本的页面布局和常见的功能，轮播，TODOMVC等。掌握了 React-router实现页面的无刷新体验 、axios或者fetch 来实现Ajax请求数据实现页面的局部刷新,完成一个SPA页面的开发工作;</p>
                                            <p>
                                              对于比较复杂的单页面应用，使用 Redux 来进行 store数据的统一管理，使用 Redux-thunk 来实现发送 action 的异步操作。
                                            </p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>HTTP / MongoDB / express </h4>
                                            <p>
                                              了解前后端分离和前后端不分离的架构;
                                            </p>
                                            <p>了解HTTP的基础知识，对请求和响应数据数据的一些基本的操作。对于数据库能使用命令行或者express图形化界面进行数据库的建立，增删改查的操作，使用express来制作后台的一些较简单的API。</p>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                          <dl>
                              <dt>
                                  <i className="iconfont icon-biaoti"></i>工作经历
                              </dt>
                              <dd>
                                  <div>
                                    <h3>
                                      商之翼有限公司(2015/03 - 2016/03)
                                    </h3>
                                    <h4>
                                      工作描述：工作描述：
                                    </h4>
                                    <p>
                                      ·  负责公司项目Web前端开发,根据产品需求和UI效果图利用atom编程软件进行div/css标准网页制作，Js逻辑设计与开发、jQuery特效编写，解决主流浏览器兼容性问题，对网站用户体验性能进行优化，完成产品前端展示效果和交互功能，完成线上产品用户体验的改进工作;
                                    </p>
                                  </div>
                                  <div>
                                    <h3>
                                      北京牵引力广告有限公司(2016/03 - 2017/04)
                                    </h3>
                                    <h4>
                                      工作描述：工作描述：
                                    </h4>
                                    <p>
                                      1. 负责公司项目Web前端开发,根据产品需求和UI效果图利用sublime编程软件进行div/css标准网页制作，Js逻辑设计与开发、jQuery特效编写，用swiper和zepto实现微场景应用，解决主流浏览器兼容性问题，对网站用户体验性能进行优化，完成产品前端展示效果和交互功能，完成线上产品用户体验的改进工作;<br/>
                                      2.使用 React+Webpack+React Router + Redux 实现单页面应用。熟练掌握 Webpack 基础功能配置，能够快速搭建开发环境。能够实现react router
                                    </p>
                                  </div>
                              </dd>
                          </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>自我评价
                                </dt>
                                <dd>
                                    <p>   具有两年移动端和PC端开发经验，熟练应用WEB前端常用技术；具有良好的沟通与表达能力，团队合作和逻辑分析能力较强;<br/>
                                    1.熟练html5+css3+js编程；<br/>
                                    2.能够使用bootstrap前端开发框架与jquery等js库；<br/>
                                    3.  熟悉node.js，React+react-router+redux开发；<br/>
                                    4.熟练使用git、photoshop、sublime、atom等前端开发工具；<br/>
                                    5. 熟练使用javaScript，jQuery，实现各种交互功能和Ajax、JSON等相关技术；<br/>
                                    6.使用jquery、ajax与php后台进行数据交互;<br/>
                                    个人比较瞎换逻辑性的东西,所以有志于开发行业长期发展;
                                  </p>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Home;
