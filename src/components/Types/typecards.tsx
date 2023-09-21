import React from 'react';
import ReadMore from './readmore';
import Image from 'next/image';

type Props = {
    name: string;
    imgSrc: string;
    type: string;
    description: string;
    link: string;
};

const AutoWashCard: React.FC<Props> = ({ name, imgSrc, type, description, link }) => {
    return (
        <div className="mx-4 mb-20 border-2 border-black overflow-hidden max-w-md bg-white">
            {/* Image */}
            <img src={imgSrc} alt={name} className="w-full object-cover" />

            {/* Content */}
            <div className="p-4">
                {/* Name */}
                <h2 className="text-2xl text-black font-bold mb-2">{name}</h2>

                {/* Type */}
                <span className="block text-atlantic-red text-xl mb-2">{type}</span>

                {/* Description */}
                <ReadMore content={description} limit={50} className="text-gray-600  mb-4" />
                {/* Link */}
            </div>
        </div>
    );
};

export default AutoWashCard;
