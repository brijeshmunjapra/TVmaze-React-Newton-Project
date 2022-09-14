import React, { useState, useEffect } from "react";

function Actor() {
  const [inputVal, setInputVal] = useState("");
  const [actorsData, setActorsData] = useState([]);

  let dataUrl = "";
  if (inputVal.length > 0) {
    dataUrl = `https://api.tvmaze.com/search/people?q=${inputVal}`;
  } else {
    dataUrl = `https://api.tvmaze.com/search/people?q=akon`;
  }

  const getActorsData = async () => {
    try {
      let respone = await fetch(dataUrl);
      let resData = await respone.json();
      setActorsData(resData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getActorsData();
  }, [inputVal]);
 
  return (
    <>
      <section className="searchActor mt-4">
        <div className="container">
          
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="form-control"
                placeholder="Search by Actors name, E.g.Akon...."
              />
           
        </div>
      </section>

      <section className="data">
        <div className="container mt-5">
          <div className="row">
            {actorsData.map((element) => {
              return (
                <div className="col-md-3 mb-0 mt-5">
                  <div className="card border border-info">
                    {element.person.image ? (
                      <img 
                        src={element.person.image.medium}
                        style={{ width: "304px", height: "400px" }}
                        class="poster"
                        alt={
                          element.person.name != null
                            ? element.person.name
                            : "Not found"
                        }
                      />
                    ) : (
                      <div className="poster" style={{ height: "400px" }}>
                        <img className="rounded-top"
                          src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                          style={{ width: "304px", height: "400px" }}
                        />
                      </div>
                    )}
                    
                    <div className="card-body">
                      <p
                        className="card-text overflow-hidden"

                      >
                      </p>
                    </div>

                    <h5 className="text-danger text-center">
                      {element.person.name}
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
