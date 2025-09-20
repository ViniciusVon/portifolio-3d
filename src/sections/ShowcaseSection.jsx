import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const projectsRef = useRef([]);

    useGSAP(() => {
        projectsRef.current.forEach((project, index) => {
            gsap.fromTo(
                project,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: project,
                        start: "top bottom-=100",
                    },
                }
            );
        });

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );
    }, []);

    return (
        <section id="trabalho" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <a
                            key={project.id}
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            ref={(el) => (projectsRef.current[index] = el)}
                            className="project block cursor-pointer transition-transform hover:scale-105"
                        >
                            <div
                                className="image-wrapper rounded-2xl overflow-hidden"
                                style={{ backgroundColor: project.bg }}
                            >
                                <img src={project.image} alt={project.title} />
                            </div>
                            <h2 className="mt-3 font-semibold">{project.title}</h2>
                            {project.description && (
                                <p className="text-white-50 md:text-base">{project.description}</p>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
