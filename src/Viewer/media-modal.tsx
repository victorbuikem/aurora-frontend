import React from 'react';

interface MediaModalProps {
  mediaSrc: string;
  isVideo: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const MediaModal: React.FC<MediaModalProps> = ({ mediaSrc, isVideo, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative max-w-4xl w-full p-4">
        <button onClick={onClose} className="absolute top-2 right-2 text-white text-3xl">&times;</button>
        {isVideo ? (
          <video
            src={mediaSrc}
            controls
            autoPlay
            className="w-full h-full max-h-[80vh] object-contain rounded-lg"
          />
        ) : (
          <img
            src={mediaSrc}
            alt="Full screen view"
            className="w-full h-full max-h-[80vh] object-contain rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default MediaModal;
