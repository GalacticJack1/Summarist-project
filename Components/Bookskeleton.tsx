function BookSkeleton() {
  return (
    <div className="w-[172px] shrink-0 animate-pulse">
      <div className="w-[172px] h-[172px] bg-gray-200 rounded-md mb-[8px]" />

      <div className="h-[16px] bg-gray-200 rounded mb-[8px]" />

      <div className="h-[12px] w-[70%] bg-gray-200 rounded mb-[8px]" />

      <div className="h-[12px] w-[90%] bg-gray-200 rounded mb-[8px]" />

      <div className="h-[12px] w-[50%] bg-gray-200 rounded" />
    </div>
  );
}

export default BookSkeleton