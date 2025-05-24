const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-[7px] border-t-transparent border-sub-sub"></div>
    </div>
  );
};

export default LoadingSpinner;
