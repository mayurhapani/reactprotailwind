import React from "react";
import Style from "../css/ManuComponent/resume.module.css";

export default function Resume() {
  return (
    <div id="resume" className={Style.main_section}>
      <div className={Style.resumeMain}>
        <div className={Style.main_title}>
          <span>Resume</span>
          <h3>
            Combination of Skill <br /> &amp; Experience
          </h3>
        </div>
        <div className={Style.resume_inner}>
          <div className={Style.left}>
            <div className={`${`${Style.info_list} mb-24`} mb-24`}>
              <div className={Style.resume_title}>
                <h3>Education</h3>
                <span className={Style.shape}></span>
              </div>
              <ul>
                <li>
                  <div className={Style.list_inner}>
                    <div className={Style.short}>
                      <div className={Style.job}>
                        <h3>Cognitive Sciences</h3>
                        <span>University of Maine</span>
                      </div>
                      <div className={Style.year}>
                        <span>2018 - 2020</span>
                      </div>
                    </div>
                    <div className={Style.resumeText}>
                      <p>
                        The goal of cognitive science is to understand the principles of intelligence with the hope that this will lead to
                        better comprehension.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={Style.list_inner}>
                    <div className={Style.short}>
                      <div className={Style.job}>
                        <h3>Civil Engineering</h3>
                        <span>University of Texas</span>
                      </div>
                      <div className={Style.year}>
                        <span>2016 - 2017</span>
                      </div>
                    </div>
                    <div className={Style.resumeText}>
                      <p>
                        Civil engineering is arguably the oldest engineering discipline. It deals with the built environment and can be
                        dated to the first time someone placed a roof.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={Style.list_inner}>
                    <div className={Style.short}>
                      <div className={Style.job}>
                        <h3>Bachelor of Science</h3>
                        <span>Univercity of Dhaka</span>
                      </div>
                      <div className={Style.year}>
                        <span>2012 - 2015</span>
                      </div>
                    </div>
                    <div className={Style.resumeText}>
                      <p>
                        This project is called a thesis and is usually presented in front of a group of people, including university
                        professors who will evaluate it and let the student..
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className={`${Style.info_list}`}>
              <div className={Style.resume_title}>
                <h3>Experience</h3>
                <span className={Style.shape}></span>
              </div>
              <ul>
                <li>
                  <div className={Style.list_inner}>
                    <div className={Style.short}>
                      <div className={Style.job}>
                        <h3>UI/UX Designer</h3>
                        <span>Envato Market</span>
                      </div>
                      <div className={Style.year}>
                        <span>2018 - running</span>
                      </div>
                    </div>
                    <div className={Style.resumeText}>
                      <p>
                        Web Developers are build a website’s core structure using coding languages, while designers are more visually
                        creative and user-focused.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={Style.list_inner}>
                    <div className={Style.short}>
                      <div className={Style.job}>
                        <h3>Creative Designer</h3>
                        <span>Bahanno Digital</span>
                      </div>
                      <div className={Style.year}>
                        <span>2015 - 2017</span>
                      </div>
                    </div>
                    <div className={Style.resumeText}>
                      <p>
                        Web Developers are build a website’s core structure using coding languages, while designers are more visually
                        creative and user-focused.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={Style.right}>
            <div className={`${Style.info_list} mb-24`}>
              <div className={Style.resume_title}>
                <h3>Personal Skills</h3>
                <span className={Style.shape}></span>
              </div>
              <div className={Style.personal}>
                <div className={Style.dodo_progress}>
                  <div className={Style.progress_inner} data-value="90">
                    <span>
                      <span className={Style.label}>Time Management</span>
                      <span className={Style.number}>90%</span>
                    </span>
                    <div className={Style.background}>
                      <div className={Style.bar}>
                        <div className={Style.bar_in}></div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.progress_inner} data-value="70">
                    <span>
                      <span className={Style.label}>Effeciency</span>
                      <span className={Style.number}>70%</span>
                    </span>
                    <div className={Style.background}>
                      <div className={Style.bar}>
                        <div className={Style.bar_in}></div>
                      </div>
                    </div>
                  </div>
                  <div className={Style.progress_inner} data-value="80">
                    <span>
                      <span className={Style.label}>Intigrity</span>
                      <span className={Style.number}>80%</span>
                    </span>
                    <div className={Style.background}>
                      <div className={Style.bar}>
                        <div className={Style.bar_in}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${Style.info_list} `}>
              <div className={Style.resume_title}>
                <h3>Software Skills</h3>
                <span className={Style.shape}></span>
              </div>
              <div className={Style.software}>
                <div className={Style.circular_progress_bar}>
                  <ul>
                    <li>
                      <div className={Style.list_inner2}>
                        <div className={Style.myCircle} value="0.8">
                          <canvas width="210" height="210"></canvas>
                          <h3 className={Style.number}>80%</h3>
                        </div>
                        <div className={Style.title}>
                          <h3>Ms Office</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={Style.list_inner2}>
                        <div className={Style.myCircle} data-value="0.75">
                          <canvas width="210" height="210"></canvas>
                          <h3 className={Style.number}>75%</h3>
                        </div>
                        <div className={Style.title}>
                          <h3>Photoshop</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={Style.list_inner2}>
                        <div className={Style.myCircle} data-value="0.9">
                          <canvas width="210" height="210"></canvas>
                          <h3 className={Style.number}>90%</h3>
                        </div>
                        <div className={Style.title}>
                          <h3>Illustrator</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={Style.list_inner2}>
                        <div className={Style.myCircle} data-value="0.65">
                          <canvas width="210" height="210"></canvas>
                          <h3 className={Style.number}>65%</h3>
                        </div>
                        <div className={Style.title}>
                          <h3>Figma</h3>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
