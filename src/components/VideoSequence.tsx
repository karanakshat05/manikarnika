
// 'use client';
// import React, { useRef, useState } from 'react';

// interface VideoSequenceProps {
//   videos: string[];
// }

// const VideoSequence: React.FC<VideoSequenceProps> = ({ videos }) => {
//   const [current, setCurrent] = useState(0);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const handleEnded = () => {
//     setCurrent((prev) => (prev + 1) % videos.length);
//   };

//   return (
//     <video
//       ref={videoRef}
//       src={videos[current]}
//       autoPlay
//       loop={false}
//       muted
//       playsInline
//       onEnded={handleEnded}
//       className="relative inset-0 w-full h-full object-cover"
//     />
//   );
// };

// export default VideoSequence;
'use client';
import React from 'react';

type VideoSequenceProps = { videos: string[] };
const VideoSequence: React.FC<VideoSequenceProps> = ({ videos }) => (
  <>
    {videos.map((src, i) => (
      <video
        key={src}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ zIndex: i }}
      />
    ))}
  </>
);

export default VideoSequence;