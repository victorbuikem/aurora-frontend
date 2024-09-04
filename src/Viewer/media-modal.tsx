import React from 'react';
import avater from '../assets/content1.png'
import logo from '../assets/aurora.ico'
import { useNavigate } from 'react-router';
interface MediaModalProps {
  mediaSrc: string;
  isVideo: boolean;
  isOpen: boolean;
  onClose: () => void;
}



const MediaModal: React.FC<MediaModalProps> = ({ mediaSrc, isVideo, isOpen, onClose }) => {
  const navigate = useNavigate()
  const handleDonate = () => {
    navigate('/user')
  }

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
      <div className='absolute right-2 rounded-2xl h-96 w-80 overflow-hidden bg-white p-5'>
        <img src={avater} alt="" className='w-full h-2/5 cursor-pointer object-cover hover-scale-110 duration-300 bg-slate-200 rounded-2xl' />
        <p className='font-bold text-slate-950 my-2'>{`CreatorID`}</p>
        <p className='text-sm'>{`Total Donations`}</p>
        <p className='text-xs font-semibold mt-5 ml-2'>Balance</p>
        <button className='w-full rounded-2xl shadow-sm shadow-blue-100 px-4 py-2 flex items-center justify-between'>
          <p>{0.00000000}</p>
          <div className='flex items-center space-x-1'>
            <img src={logo} width={20} height={20} alt="" />
            <p>Aur</p>
          </div>
        </button>
        <button className='w-full my-5 px-4 py-2 bg-black text-white rounded-lg shadow-sm hover:bg-white hover:text-black border border-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default MediaModal;
