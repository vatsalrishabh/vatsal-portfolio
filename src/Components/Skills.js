import React from 'react';

const Skills = () => {
  return (
    <div id="Skills">
      <div className="Skills-top">
        <div className="Skills-heading">
          <h1>Skills</h1>
        </div>
      </div>
      <div className="Skills-bottom">
        <table>
          <tbody>
            <tr>
              <td><div className="space-btn-border">Node.js</div></td>
              <td><div className="space-btn-border">React.js</div></td>
            </tr>
            <tr>
              <td><div className="space-btn-border">Express</div></td>
              <td><div className="space-btn-border">MongoDB</div></td>
            </tr>
            <tr>
              <td><div className="space-btn-border">JavaScript</div></td>
              <td><div className="space-btn-border">Python</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Skills;
