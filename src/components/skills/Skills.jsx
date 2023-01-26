import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle"></span>
      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__title">Frontend developer</h3>

          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__level"></span>
                </div>
              </div>

              <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__level"></span>
                </div>
              </div>

              <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__level"></span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills__name">React</h3>
                  <span className="skills__level"></span>
                </div>
              </div>
              <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills__name">Git</h3>
                  <span className="skills__level"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
