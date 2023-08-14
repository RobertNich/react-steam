import winIcon from "../../assets/icons/os/windows.png";
import macIcon from "../../assets/icons/os/mac.png";
import linIcon from "../../assets/icons/os/linux.png";

interface Props {
  platform: string;
}

type OS = "win" | "mac" | "lin";

const osIconMap: Record<OS, string> = {
  win: winIcon,
  mac: macIcon,
  lin: linIcon,
};

export const PlatformIcon = ({ platform }: Props) => {
  // Move function and osIconMap to another component, possibly a general utils
  // also move the OS type
  function getPlatformIcon(os: string): string | null {
    return osIconMap[os as OS] || null;
  }

  const platformIcon = getPlatformIcon(platform);

  return (
    <>
      {platformIcon !== null ? (
        <img src={platformIcon} alt="platform" className="platform-icon" />
      ) : (
        <></>
      )}
    </>
  );
};
