import React from 'react'
import {Link} from 'react-router-dom'
import ProjectData from '../dummy-data/ProjectData'
import './style.css'

const ViewProjects = () => {
    return (
        <>  
            <Link to="/create-project" className="createprojectLink">Create a project</Link>
            <h1>Projects</h1>
            <section className="container">
            <table> 
            <tr>   
                <div className="heading_list">  
                    <th>ID</th>
                    <th>Client Name</th>
                    <th>Project Name</th>
                    <th>Project ID</th>
                    <th>Status</th>
                    <th>Actions</th>
                </div>
            </tr>
            <div className="Projects-view">
                <Link to="/:id" className="entryLink">
                {
                    ProjectData.map((currElem)=>{
                        return(
                            <div key={currElem.id} className="main-container" > 
                                <tr> 
                                    <td>
                                        <div className="project_id">
                                            {currElem.id}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="client_name">
                                            {currElem.client_name}
                                        </div>
                                    </td>    
                                    <td>
                                        <div className="project_name">
                                            {currElem.project_name}
                                        </div>
                                    </td>       
                                    <td>                       
                                        <div className="project_id">
                                            {currElem.project_id}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="status">
                                            {
                                                currElem.status===null?".......":currElem.status
                                                }
                                        </div> 
                                    </td>
                                    <td>
                                        <div className="edit">
                                            
                                                <Link to="/edit-projects" className="editlink">
                                                    edit <i class="fas fa-edit"></i>
                                                </Link>
                                        </div>
                                    </td>
                                </tr>
                            </div>
                        )
                    })
                }
                </Link>
            </div>
            </table>
            </section>
        </>
    )
}

export default ViewProjects
