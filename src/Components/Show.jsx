import React, { useState, useEffect } from "react";

function Actor() {
  const [inputVal, setInputVal] = useState("");
  const [showData, setshowData] = useState([]);

  let dataUrl = "";
  if (inputVal.length > 0) {
    dataUrl = `https://api.tvmaze.com/search/shows?q=${inputVal}`;
  } else {
    dataUrl = `https://api.tvmaze.com/search/shows?q=friends`;
  }

  const getshowData = async () => {
    try {
      let respone = await fetch(dataUrl);
      let resData = await respone.json();
      setshowData(resData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getshowData();
  }, [inputVal]);

  return (
    <>
      <section className="searchShow mt-4">
        <div className="container">

          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="form-control"
            placeholder="Search by Show name, E.g.Friends...."
          />

        </div>
      </section>

      <section className="data">
        <div className="container mt-5">
          <div className="row">
            {showData.map((element) => {
              return (
                <div className="col-md-3 mb-0 mt-5">
                  <div className="card border border-info">
                    {element.show.image ? (
                      <img
                        src={element.show.image.medium}
                        class="poster"
                        alt={
                          element.show.name != null
                            ? element.show.name
                            : "Not found"

                        }
                        style={{
                          width: "304px",
                          height: "400px",
                        }}
                      />
                    ) : (
                      <div
                        className="poster"
                        style={{ height: "400px" }}
                      >
                        <img className="rounded-top"
                          src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                          style={{
                            width: "304px",
                            height: "400px",
                          }}
                        />
                      </div>
                    )}
                    <div className="card-body">

                      {/* <span>
                                      <i
                                        class="fa fa-star text-success"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      {element.show.rating.average}
                                    </span> */}
                      <p
                        className="card-text overflow-hidden"

                      >
                      </p>
                    </div>

                    <h5 className="text-danger text-center">
                      {element.show.name}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Actor;
