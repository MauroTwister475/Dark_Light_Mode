import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";

export function MediaLinks() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <a 
        href="github.com/users/maurotwister475"
        className="flex items-center justify-center gap-2"
      >
        <img 
          src={githubIcon} 
          alt="github"
          className="w-[2.4rem]" 
        />
        <button className="text-[1.2rem] font-medium ">
          Visitar perfil
        </button>
      </a>
      <a 
        href="linkedin.com/users/maurotwister475"
        className="flex items-center justify-center gap-2"
      >
        <img 
          src={linkedinIcon} 
          alt="linkedin" 
          className="w-[2.4rem]" 
        />
        <button className="text-[1.2rem] font-medium ">
          Visitar perfil
        </button>
      </a>
    </div>
  );
}
