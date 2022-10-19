import React from "react";
import SkillTech from "./Tools-Source/SkillTech";

function Tools({title, tech}){
  return (
 <>
      <div className="container min-h-[300px] mt-[-50px] mb-10 mx-auto">
        <div>
          <h2 className="text-center text-5xl text-[#1a58a4] font-bold">{title}</h2>
        </div>
        <div className="grid mobile:grid-none mobile:flex grid-cols-4 mobile:flex-col  align-center justify-center max-w-xl mx-auto mt-10">
      {tech.map((skills, index) => {
        return (
          <SkillTech
          key={index}
          shref={skills.skillLink} 
          sname={skills.skillName} 
          sicon={skills.skillIcon}
          />
        );
      })}
    </div>
      </div>
  </>
  );
}

export default Tools;