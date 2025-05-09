import ReactDOM from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot) return null;

  return ReactDOM.createPortal(children, portalRoot);
};
