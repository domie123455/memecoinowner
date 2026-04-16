import { FC } from "react";
import dynamic from "next/dynamic";

// Network is locked to mainnet — no indicator shown
const NetworkSwitcher: FC = () => {
  return null;
};

export default dynamic(() => Promise.resolve(NetworkSwitcher), {
  ssr: false,
});
