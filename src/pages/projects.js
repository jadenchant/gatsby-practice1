import React from "react"
import Navbar from "../components/Navbar.tsx"
import "../css/projects.css"

export default function Projects() {
  return (
    <div className="projects">
      <Navbar current="projects" />
      <h1>Projects</h1>
    </div>
  )
}
