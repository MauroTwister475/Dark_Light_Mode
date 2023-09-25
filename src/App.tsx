import { useThemeContext } from "./hooks/useTheme";
import { Profile } from "./Components/Profile";
import { MediaLinks } from "./Components/MediaLinks";

export function App() {
  const { theme } = useThemeContext();

  return (
    <div className={`w-screen py-40 h-screen flex flex-col items-center justify-center transition-colors ${theme === 'light' ? 'bg-zinc-200':'bg-zinc-950'}`}>
      <Profile 
        name="Mauro Twister"
        job="Programador"
        gitProfile={<MediaLinks />}
      />
    </div>
  )
}

