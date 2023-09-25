import { useThemeContext } from "../hooks/useTheme";
import moon from "../assets/moon.svg";

export function DarkButton() {
  const { setTheme } = useThemeContext();

  return (
    <button 
      onClick={() => setTheme('dark')}
      className="w-[4rem] h-[4rem] flex justify-center items-center rounded-full bg-zinc-900 cursor-pointer"
    >
      <img 
        src={moon} 
        alt='Dark mode' 
        className="w-[2rem]"
      />
    </button>
  )
}
