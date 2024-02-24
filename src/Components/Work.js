import React, { useState, useEffect } from 'react';

const Work = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        // Fetch works from the backend when the component mounts
        fetchWorksFromBackend();
    }, []);

    const fetchWorksFromBackend = async () => {
        // Sample works data
        const sampleWorks = [
            {
                id: 1,
                title: "Project One",
                imageUrl: "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/0d373b57e250525e2556015c5ad6fe84f66f2f632357a97c5de6e73043c0e0d51628682335902.jpg",
                link: "https://example.com/project1"
            },
            {
                id: 2,
                title: "Project Two",
                imageUrl: "https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg",
                link: "https://example.com/project2"
            },
            {
                id: 3,
                title: "Project Three",
                imageUrl: "https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg",
                link: "https://example.com/project3"
            }
        ];

        setWorks(sampleWorks);
    };

    return (
        <div id="Work">
            <div className="Work-top">
                <div className="Work-heading">
                    <h1>Works</h1>
                </div>
            </div>
            <div className="Work-middle">
                {works.map((work) => (
                    <div className="Work-web" key={work.id}>
                        <a href={work.link} target="_blank" rel="noopener noreferrer">
                            <img src={work.imageUrl} alt={work.title} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
