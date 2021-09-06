import React from "react";
import "./stylesheet/boxHover.css";

const Projects = () => {
  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        <h1
          className="display-8"
          style={{
            fontFamily: "Roboto",
            color: "rgb(92, 117, 173)",
            fontWeight: "lighter",
          }}
        >
          {" "}
          Some Projects I've built
        </h1>
      </div>
      <div className="row row-cols-3">
        <div className="col" id = "projectBox">
          <div
            className="card bg-transparent"
            id="boxHover"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ color: "rgb(183, 205, 255)" }}
              >
                Feedbacker
              </h5>
              <p className="card-text" style={{ color: "rgb(143, 156, 187)" }}>
                Feedback collection app where a user can log in with Google and
                use their credit card to buy credits for creating and sending
                surveys to people
              </p>
              <p style={{ color: "rgb(143, 156, 187)" }}>
                Built with: React, Node and MongoDB
              </p>
              <a
                style={{ textDecoration: "none" }}
                href="https://stark-headland-72911.herokuapp.com/"
              >
                <button className="butts">Take a look</button>
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card bg-transparent"
            id="boxHover"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ color: "rgb(183, 205, 255)" }}
              >
                Chat Room
              </h5>
              <p className="card-text" style={{ color: "rgb(143, 156, 187)" }}>
                Join a chat room using your name and room number. Another user
                can also join the room using the same room number. Multiple
                users can join at the same time
              </p>
              <p style={{ color: "rgb(143, 156, 187)" }}>
                Built with: Node, Express and Socket IO
              </p>
              <a
                style={{ textDecoration: "none" }}
                href="https://murmuring-basin-72718.herokuapp.com/"
              >
                <button className="butts">Take a look</button>
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card bg-transparent"
            id="boxHover"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ color: "rgb(183, 205, 255)" }}
              >
                File Decryptor
              </h5>
              <p className="card-text" style={{ color: "rgb(143, 156, 187)" }}>
                The program reads in a given binary file, decrypts the data
                right after reading a certain amount of bytes, writes the
                encrypted strings to a file or standard output.
              </p>
              <p style={{ color: "rgb(143, 156, 187)" }}>
                Built with: C, Data Structures and File Systems
              </p>
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/muttaki1251998/File_Decryptor"
              >
                <button className="butts">Take a look</button>
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card bg-transparent"
            id="boxHover"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{ color: "rgb(183, 205, 255)" }}
              >
                Git Profile
              </h5>
              <p className="card-text" style={{ color: "rgb(143, 156, 187)" }}>
                A nice and prettier summary of your GitHub profile. Your GitHub
                profile summary along with your join date, profile pictures,
                pinned repos and a lot more!
              </p>
              <p style={{ color: "rgb(143, 156, 187)" }}>
                Built with: Next.js, JSX, CSS and HTML
              </p>
              <a
                style={{ textDecoration: "none" }}
                href="https://vast-garden-88678.herokuapp.com/"
              >
                <button className="butts">Take a look</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
