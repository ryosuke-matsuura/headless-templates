import React from 'react';

export default function IndexSectionCustomComponents6() {
    return (
        <React.Fragment>
            <>
                <section className="news">  <div className="inner">    <h2 className="sub_ttl">TOPICS</h2>    {/* &#12371;&#12371;&#12363;&#12425;&#12491;&#12517;&#12540;&#12473;&#35352;&#20107; */}    <ul className="news_list">      <li className="news_list_item">        <a href>          <div className="news_list_date">            <time>2020.05.12</time>                    </div>          <p>サイトリニューアルしました。</p>          <span className="arrow" />      </a>    </li>      <li className="news_list_item">        <a href>          <div className="news_list_date">            <time>2020.05.12</time>                    </div>          <p>記事が更新されました。記事が更新されました。記事が更新されました。記事が更新されました。</p>          <span className="arrow" />      </a>    </li>      <li className="news_list_item">        <a href>          <div className="news_list_date">            <time>2020.05.12</time>                    </div>          <p>サイトリニューアルしました。</p>          <span className="arrow" />      </a>    </li>  </ul></div></section>


            </>
        </React.Fragment>
    );
}

