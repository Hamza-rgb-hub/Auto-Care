import React from 'react'

const HotspotMarker = ({ direction = "top" }) => {
  const lineConfig = {
    top: {
      position: "bottom-full left-1/2 -translate-x-1/2 mb-0",
      size: "w-[1px] h-10",
      gradient: "bg-gradient-to-t from-white/50 via-white/30 to-transparent"
    },
    bottom: {
      position: "top-full left-1/2 -translate-x-1/2 mt-0",
      size: "w-[1px] h-10",
      gradient: "bg-gradient-to-b from-white/50 via-white/30 to-transparent"
    },
    left: {
      position: "right-full top-1/2 -translate-y-1/2 mr-0",
      size: "h-[1px] w-10",
      gradient: "bg-gradient-to-l from-white/50 via-white/30 to-transparent"
    },
    right: {
      position: "left-full top-1/2 -translate-y-1/2 ml-0",
      size: "h-[1px] w-10",
      gradient: "bg-gradient-to-r from-white/50 via-white/30 to-transparent"
    }
  };

  const config = lineConfig[direction];

  return (
    <div className="relative group cursor-pointer">
      <div className={`absolute ${config.position} ${config.size} ${config.gradient}`} />
      
      <div className="relative w-7 h-7 flex items-center justify-center rounded
            bg-[#421551]/20
            border border-white/20
            hover:bg-[#421551]/30
            transition-all">
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
        
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded transition-all duration-300" />
      </div>
    </div>
  );
};

export default HotspotMarker
