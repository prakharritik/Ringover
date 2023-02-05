import React from "react";
import "./Team.scss";
import christiano from "../../assets/christiano.jpg";
import ikercasillas from "../../assets/ikercasillas.jpg";
import james from "../../assets/james.jpg";
import tonikroos from "../../assets/tonikroos.jpg";
import zidane from "../../assets/zidane.jpg";
import medium from "../../assets/medium.svg";
import dribble from "../../assets/dribble.svg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";

const Team = () => {
  return (
    <div className="team_container">
      <div className="top">
        <h3>
          Without bonding and coordination, every project is a failure. Look at
          who makes KICKSUP great. ;)
        </h3>
      </div>
      <div className="mid">
        <div className="cards">
          <div className="card">
            <div className="photo">
              <img src={zidane} />
            </div>
            <div className="content">
              <div className="card-heading">
                <div className="card-name">Zidane</div>
                <div className="card-role">Leadership and management</div>
              </div>
              <div className="icons">
                <div className="icon-item">
                  <img src={linkedin} />
                </div>
                <div className="icon-item">
                  <img src={medium} />
                </div>
                <div className="icon-item">
                  <img src={facebook} />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="photo">
              <img src={tonikroos} />
            </div>
            <div className="content">
              <div className="card-heading">
                <div className="card-name">Toni Kroos</div>
                <div className="card-role">Product Developer</div>
              </div>
              <div className="icons">
                <div className="icon-item">
                  <img src={linkedin} />
                </div>
                <div className="icon-item">
                  <img src={medium} />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="photo">
              <img src={ikercasillas} />
            </div>
            <div className="content">
              <div className="card-heading">
                <div className="card-name">Iker Casillas</div>
                <div className="card-role">Marketing Strategy</div>
              </div>
              <div className="icons">
                <div className="icon-item">
                  <img src={medium} />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="photo">
              <img src={james} />
            </div>
            <div className="content">
              <div className="card-heading">
                <div className="card-name">James </div>
                <div className="card-role">Product Designer</div>
              </div>
              <div className="icons">
                <div className="icon-item">
                  <img src={dribble} />
                </div>
                <div className="icon-item">
                  <img src={medium} />
                </div>
                <div className="icon-item">
                  <img src={facebook} />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="photo">
              <img src={christiano} />
            </div>
            <div className="content">
              <div className="card-heading">
                <div className="card-name">Christiano</div>
                <div className="card-role">Financial Operations</div>
              </div>
              <div className="icons">
                <div className="icon-item">
                  <img src={linkedin} />
                </div>

                <div className="icon-item">
                  <img src={facebook} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btm">
        <h2>and You! ;)</h2>
      </div>
    </div>
  );
};

export default Team;
