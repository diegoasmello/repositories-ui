import React, { useState, useEffect, useCallback } from "react";
import { useSessionStorage } from "react-use";
import RepositoriesList from "./RepositoriesList";
import "../scss/Home.scss";

//const API_URL = 'https://api.github.com';
const API_URL = "http://localhost:3001";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useSessionStorage("value", "");
  const [repositories, setRepositores] = useSessionStorage("repositories", []);

  const fetchData = useCallback(
    async (value) => {
      setLoading(true);
      const response = await fetch(API_URL + "/search/" + value);
      const data = await response.json();

      if (data.status) {
        setRepositores(data.data);
        setLoading(false);
      }
    },
    [setRepositores]
  );

  async function searchRepositores() {
    if (value) {
      fetchData(value);
    } else {
      if (repositories.total_count > 0) {
        setRepositores([]);
      } else {
        alert("You must type something!");
      }
    }
  }

  function enter(evt) {
    if (evt.key === "Enter") searchRepositores();
  }

  useEffect(() => {
    if (value) {
      fetchData(value);
    } else {
      setRepositores([]);
    }
  }, [fetchData, setRepositores, value]);

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-12 offset-md-0">
            <main className="content">
              <div className="input-container">
                <input
                  value={value}
                  onChange={(evt) => setValue(evt.target.value)}
                  onKeyDown={(evt) => enter(evt)}
                  type="text"
                  placeholder="Search..."
                ></input>

                <button className="btn" onClick={searchRepositores}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill"
                      fillRule="evenodd"
                      d="M12.442 12.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                      clipRule="evenodd"
                    />
                    <path
                      className="fill"
                      fillRule="evenodd"
                      d="M8.5 14a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM15 8.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="card">
                {!loading ? (
                  repositories.total_count > 0 ? (
                    <div className="card-body">
                      <h2>{repositories.total_count} repository results</h2>
                      <RepositoriesList repositories={repositories.items} />
                    </div>
                  ) : (
                    <div className="card-body empty">
                      <p>No repositories found</p>
                    </div>
                  )
                ) : (
                  <div className="card-body loading">
                    <div className="loader"></div>
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
