import React, { useState } from 'react';

type ReadMoreProps = {
    content: string;
    limit?: number;
    className?: string;
};

const ReadMore: React.FC<ReadMoreProps> = ({ content, limit = 100, className }) => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const renderContent = () => {
        if (content.length <= limit) return content;

        if (showMore) {
            return (
                <>
                    {content}
                    <span onClick={toggleShowMore} style={{ color: 'blue', cursor: 'pointer' }}>
                        ...Read Less
                    </span>
                </>
            );
        } else {
            const truncatedContent = `${content.substring(0, limit)}...`;
            return (
                <>
                    {truncatedContent}
                    <span onClick={toggleShowMore} style={{ color: 'blue', cursor: 'pointer' }}>
                        Read More
                    </span>
                </>
            );
        }
    };

    return <div className={className}>{renderContent()}</div>;
};

export default ReadMore;
