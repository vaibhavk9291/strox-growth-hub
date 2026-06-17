export function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 flex justify-center w-full h-full">
      <div className="w-full h-full max-w-[1600px] px-4 md:px-8 relative opacity-[0.03]">
        <div className="w-full h-full grid grid-cols-4 md:grid-cols-12 gap-x-4 md:gap-x-8 lg:gap-x-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i} 
              className={`h-full border-l border-white relative ${i >= 4 ? 'hidden md:block' : 'block'}`}
            >
              {/* Decorative triangles on intersections (optional but adds to the tech feel) */}
              <div className="absolute top-[20%] -left-[3px] w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-l-transparent border-r-transparent border-b-white opacity-50" />
              <div className="absolute top-[60%] -left-[3px] w-0 h-0 border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-white opacity-50" />
            </div>
          ))}
        </div>
        {/* Rightmost boundary line */}
        <div className="absolute right-4 md:right-8 top-0 h-full border-r border-white" />
      </div>
    </div>
  );
}
