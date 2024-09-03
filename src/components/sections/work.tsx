"use client";
import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { useState } from 'react';

const WorkSection = () => {
  const [selectedType, setSelectedType] = useState("All");
  const handleFilterChange = (event:any) => {
    setSelectedType(event.target.value);
  };
  const projects = PROJECTS
  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((project) => project.type === selectedType);
  return (
    <Container id="work">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>
      <div>
        <label htmlFor="filter">Filter by Type: </label>
        <select id="filter" value={selectedType} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Power BI">Power BI</option>
          <option value="Looker">Looker</option>
          <option value="Tableau">Tableau</option>
          <option value="Excel">Excel</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {
  filteredProjects?.map((project, index) => (
    <ProjectDetails
      key={index}
      {...project}
      layoutType={index % 2 === 0 ? 'default' : 'reverse'}
    />
  ))
}
      
    </Container>
  );
};

export default WorkSection;
