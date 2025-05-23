import React from "react";
import LanguageColors from "../utils/languageColors";
import "../scss/RepositoriesList.scss";

function formatDateTime(date) {
  return (
    date.getDate().toString().padStart(2, "0") +
    "/" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours().toString().padStart(2, "0") +
    ":" +
    date.getMinutes().toString().padStart(2, "0")
  );
}

export default function RepositoriesList({ repositories }) {
  return (
    <ul className="repositories-list">
      {repositories.map((repo) => (
        <li key={repo.id} className="repository-item">
          <a
            href={"/view/" + repo.owner.login + "/" + repo.name}
            className="repository-link"
          >
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
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>

            <div className="repository-content">
              <h3 className="repository-title">
                {repo.owner.login}/<span>{repo.name}</span>
              </h3>

              {repo.description && (
                <p className="repository-description">{repo.description}</p>
              )}

              <ul className="repository-info">
                <li className="stargazers">
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
                      d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                    ></path>
                  </svg>

                  {repo.stargazers_count}
                </li>

                {repo.language && (
                  <li className="language">
                    <div
                      className="language-color"
                      style={{ background: LanguageColors[repo.language] }}
                    ></div>

                    {repo.language}
                  </li>
                )}

                <li className="updated">
                  Updated at {formatDateTime(new Date(repo.updated_at))}
                </li>
              </ul>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
