import { useThemeContext } from "../hooks/useTheme";
import sun from "../assets/sun.svg";

export function LightButton() {
  const { setTheme } = useThemeContext();

  return (
    <button 
      onClick={() => setTheme('light')}
      className="w-[4rem] h-[4rem] flex justify-center items-center rounded-full bg-white cursor-pointer"
    >
      <img 
        src={sun} 
        alt='Light mode' 
        className="w-[2rem]"
      />
    </button>
  )
}
