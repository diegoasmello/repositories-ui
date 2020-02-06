import React from "react";
import { Link } from "react-router-dom";
import "../scss/Home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-12 offset-md-0">
            <main className="content">
              <input type="text" placeholder="Search to..."></input>

              <div className="card">
                <div className="card-body">
                  <h2>600,228 repository results</h2>

                  <ul className="repositories">
                    <li className="repository-item">
                      <Link to={"/view/1"} className="repository-link">
                        <svg
                          width="12"
                          height="16"
                          viewBox="0 0 12 16"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            class="fill"
                            fill-rule="evenodd"
                            d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                          ></path>
                        </svg>

                        <div class="repository-content">
                          <h3 className="repository-title">
                            angular/<span>angular-cli</span>
                          </h3>

                          <p className="repository-description">
                            One framework. Mobile & desktop.
                          </p>

                          <ul className="repository-info">
                            <li>57,3 k</li>

                            <li>57,3 k</li>

                            <li>57,3 k</li>

                            <li>57,3 k</li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
