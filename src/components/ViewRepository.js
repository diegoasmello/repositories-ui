import React from "react";
import "../scss/ViewRepository.scss";

export default function ViewRepository() {
  return (
    <div className="view-repository">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-12 offset-md-0">
            <main className="content">
              <div className="card card-about">
                <div className="card-body">
                  <h1>
                    angular / <span>angular-cli</span>
                  </h1>

                  <p className="description">
                    One framework. Mobile & desktop.
                  </p>

                  <a href="" className="btn">
                    View on Github
                  </a>
                </div>
              </div>

              <div className="card card-from-author">
                <div className="card-header">From author</div>

                <div className="card-body"></div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
