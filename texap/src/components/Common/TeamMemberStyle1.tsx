"use client";

import React from "react"; 

const TeamMemberStyle1: React.FC = () => {
  return (
    <>
      <div className="team-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR EXPERTS</span>
            <h2>Meet With Our Team Member</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-1"
                    style={{ backgroundImage: `url(/images/team/team1.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>Sarah Taylor</h3>
                  <span>Marketing Lead</span>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-2"
                    style={{ backgroundImage: `url(/images/team/team2.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>Ben Stokes</h3>
                  <span>Art Director</span>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-3"
                    style={{ backgroundImage: `url(/images/team/team3.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>Ellyse Perry</h3>
                  <span>Designer</span>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-4"
                    style={{ backgroundImage: `url(/images/team/team4.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>Steven Smith</h3>
                  <span>Development</span>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-5"
                    style={{ backgroundImage: `url(/images/team/team5.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>Suzie Bates</h3>
                  <span>Front-End Development</span>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
              <div className="single-team-box">
                <div className="image">
                  <div
                    className="bg-6"
                    style={{ backgroundImage: `url(/images/team/team6.jpg)` }}
                  ></div>
                </div>
                <div className="content">
                  <h3>David Warner</h3>
                  <span>Head of Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberStyle1;
