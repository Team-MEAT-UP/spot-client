interface ContentProps {
  children: React.ReactNode;
}

export const SnapContent = ({ children }: ContentProps) => {
  return (
    <div
      className="flex-1 min-h-0 overflow-y-auto"
      style={{
        WebkitOverflowScrolling: "touch",
        overscrollBehavior: "contain",
        touchAction: "pan-y",
      }}>
      {children}
    </div>
  );
};
