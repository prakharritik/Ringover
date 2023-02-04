import React from "react";
import "./Team.scss";
import christiano from "../../assets/christiano.jpg";
import ikercasillas from "../../assets/ikercasillas.jpg";
import james from "../../assets/james.jpg";
import tonikroos from "../../assets/tonikroos.jpg";
import zidane from "../../assets/zidane.jpg";

const Team = () => {
  return (
    <div className="team_container">
      <div class="top">
        <h3>
          Without bonding and coordination, every project is a failure. Look at
          who makes KICKSUP great. ;)
        </h3>
      </div>
      <div class="mid">
        <div class="cards">
          <div class="card">
            <div class="photo">
              <img src={zidane} />
            </div>
            <div class="content">
              <div class="card-heading">
                <div class="card-name">Zidane</div>
                <div class="card-role">Leadership and management</div>
              </div>
              <div class="icons">
                <div class="icon-item">A</div>
                <div class="icon-item">B</div>
                <div class="icon-item">C</div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="photo">
              <img src={tonikroos} />
            </div>
            <div class="content">
              <div class="card-heading">
                <div class="card-name">Toni Kroos</div>
                <div class="card-role">Product Developer</div>
              </div>
              <div class="icons">
                <div class="icon-item">A</div>
                <div class="icon-item">B</div>
                <div class="icon-item">C</div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="photo">
              <img src={ikercasillas} />
            </div>
            <div class="content">
              <div class="card-heading">
                <div class="card-name">Iker Casillas</div>
                <div class="card-role">Marketing Strategy</div>
              </div>
              <div class="icons">
                <div class="icon-item">A</div>
                <div class="icon-item">B</div>
                <div class="icon-item">C</div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="photo">
              <img src={james} />
            </div>
            <div class="content">
              <div class="card-heading">
                <div class="card-name">James </div>
                <div class="card-role">Product Designer</div>
              </div>
              <div class="icons">
                <div class="icon-item">A</div>
                <div class="icon-item">B</div>
                <div class="icon-item">C</div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="photo">
              <img src={christiano} />
            </div>
            <div class="content">
              <div class="card-heading">
                <div class="card-name">Christiano</div>
                <div class="card-role">Financial Operations</div>
              </div>
              <div class="icons">
                <div class="icon-item">A</div>
                <div class="icon-item">B</div>
                <div class="icon-item">C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btm">
        <h2>and You! ;)</h2>
      </div>
    </div>
  );
};

export default Team;
