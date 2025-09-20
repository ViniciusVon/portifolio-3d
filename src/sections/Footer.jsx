import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <p>Termos & Condições</p>
                </div>
                <div className="socials">
                    {socialImgs.map((socialImg, index) => (
                        <div key={index} className="icon">
                            <a
                                href={socialImg.url.startsWith("http") ? socialImg.url : `https://${socialImg.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={socialImg.imgPath} alt={socialImg.name} />
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Vinícius von Glehn. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;