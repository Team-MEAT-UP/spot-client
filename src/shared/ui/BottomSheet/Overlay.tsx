interface OverlayProps {
  onClick?: () => void;
  isBlur?: boolean;
}

export const Overlay = ({ onClick, isBlur = true }: OverlayProps) => {
  return (
    <div
      className={`fixed inset-0 bg-black/50 duration-200 transition-opacity z-[100] ${isBlur ? "backdrop-blur-sm" : ""}`}
      onClick={onClick}
    />
  );
};
