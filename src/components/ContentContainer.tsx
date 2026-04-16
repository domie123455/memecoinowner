import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const ContentContainer: FC<Props> = ({ children }) => {
  return <div className="flex-1">{children}</div>;
};

export default ContentContainer;
