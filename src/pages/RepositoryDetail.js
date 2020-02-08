import React, { useState, useEffect, useCallback } from "react";
import RepositoriesList from "../components/RepositoriesList";
import LanguageColors from "../utils/languageColors";
import "../scss/RepositoryDetail.scss";

const API_URL = process.env.REACT_APP_API_URL;

function formatDate(date) {
  return (
    date.getDate().toString().padStart(2, "0") +
    "/" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    date.getFullYear()
  );
}

export default function RepositoryDetail({ match }) {
  const [createdAt, setCreatedAt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [repository, setRepository] = useState([]);
  const [repositoriesFromAuthor, setRepositoriesFromAuthor] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        API_URL + "/repository/" + match.params.owner + "/" + match.params.repo
      );
      const data = await response.json();

      if (data.status) {
        setRepository(data.data.respository);
        setRepositoriesFromAuthor(data.data.repositoriesFromAuthor);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      alert("Error: " + e.message);
    }
  }, [match.params.owner, match.params.repo]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setCreatedAt(formatDate(new Date(repository.created_at)));
  }, [repository]);

  return (
    <div className="repository-detail">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-12 offset-md-0">
            {!loading ? (
              <main className="content">
                <div className="card card-about">
                  <div className="card-body">
                    <h1>
                      {match.params.owner} / <span>{repository.name}</span>
                    </h1>

                    {repository.description && (
                      <p className="description">{repository.description}</p>
                    )}

                    <div className="info">
                      <div className="info-row">
                        <div className="info-col">
                          <svg
                            width="14"
                            height="16"
                            viewBox="0 0 14 16"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="fill"
                              fillRule="evenodd"
                              d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
                            ></path>
                          </svg>

                          <span>{repository.issues || "0"} issues</span>
                        </div>

                        <div className="info-col">
                          <svg
                            width="12"
                            height="16"
                            viewBox="0 0 12 16"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="fill"
                              fillRule="evenodd"
                              d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                            ></path>
                          </svg>

                          <span>
                            {repository.pull_requests || "0"} Pull requests
                          </span>
                        </div>
                      </div>

                      <div className="info-row">
                        <div className="info-col">
                          <svg
                            width="14"
                            height="16"
                            viewBox="0 0 14 16"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="fill"
                              fillRule="evenodd"
                              d="M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z"
                            ></path>
                          </svg>

                          <span>{repository.commits || "0"} commits</span>
                        </div>

                        <div className="info-col">
                          <svg
                            width="10"
                            height="16"
                            viewBox="0 0 10 16"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="fill"
                              fillRule="evenodd"
                              d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 00-1-3.72C.88 1 0 1.89 0 3a2 2 0 001 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                            ></path>
                          </svg>

                          <span>{repository.branches || "0"} branch</span>
                        </div>
                      </div>

                      <div className="info-row">
                        {repository.language && (
                          <div className="info-col">
                            <div
                              className="language-color"
                              style={{
                                background: LanguageColors[repository.language],
                              }}
                            ></div>

                            <span>{repository.language}</span>
                          </div>
                        )}

                        <div className="info-col">Created at {createdAt}</div>
                      </div>

                      <a
                        href={repository.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        View on Github
                      </a>

                      <a
                        href={repository.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Author's page
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card card-from-author">
                  <div className="card-header">From author</div>

                  {repositoriesFromAuthor.length ? (
                    <div className="card-body">
                      <RepositoriesList repositories={repositoriesFromAuthor} />
                    </div>
                  ) : (
                    <div className="card-body">
                      <p className="empty">O author não possui repositories;</p>
                    </div>
                  )}
                </div>
              </main>
            ) : (
              <main className="content loading">
                <div className="loader"></div>
              </main>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
