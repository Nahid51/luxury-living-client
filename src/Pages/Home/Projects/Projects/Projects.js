import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useGetProjectsQuery } from '../../../../Redux/slices/serviceSlice';
import Project from '../Project/Project';

const Projects = () => {
    const projectsInfo = useGetProjectsQuery() || {};
    return (
        <div id='projects' className='mt-5 text-center'>
            <Container>
                <h6 style={{ color: '#251d58' }}>Projects</h6>
                <h3 className='fw-bold'>Discover the latest Interior <br /> Design available today</h3>

                <div className='mt-3 mb-5'>
                    <Row xs={1} md={3} className="g-4">
                        {projectsInfo?.data?.map((project) => (
                            <Project
                                key={project._id}
                                project={project}
                            ></Project>
                        ))}
                    </Row>
                </div>
            </Container>
        </div >
    );
};

export default Projects;