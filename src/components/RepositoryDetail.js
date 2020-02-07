import React, { useState, useEffect, useCallback } from "react";
import "../scss/RepositoryDetail.scss";

const API_URL = "https://api.github.com/repos";

export default function RepositoryDetail({ match }) {
  const [repository, setRepository] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetch(
      API_URL + "/" + match.params.owner + "/" + match.params.repo
    );
    const data = await response.json();
    console.log(data);
    setRepository(data);
  }, [match.params.owner, match.params.repo]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="repository-detail">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-12 offset-md-0">
            <main className="content">
              <div className="card card-about">
                <div className="card-body">
                  <h1>
                    {match.params.owner} / <span>{repository.name}</span>
                  </h1>

                  {repository.description && (
                    <p className="description">{repository.description}</p>
                  )}

                  <a href={repository.html_url} className="btn">
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
