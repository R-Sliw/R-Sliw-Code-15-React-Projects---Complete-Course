import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const mounted = useRef(false);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlSearch = `&query=${search}`;

    if (search) {
      url = `${searchUrl}${clientID}${urlPage}${urlSearch}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }

    try {
      setLoading(true);
      const respons = await fetch(url);
      const data = await respons.json();
      setPhotos((oldPhotos) => {
        if (search && page === 1) {
          return data.results;
        } else if (search) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    console.log(mounted);
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });

    return () => window.removeEventListener("scroll", event);
    // eslint-disable-next-line
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <main>
      <section className="search">
        <form action="" className="search-form">
          <input
            type="text"
            className="form-input"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="submit-btn" onClick={handelSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image, index) => {
            return <Photo key={index} {...image} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
