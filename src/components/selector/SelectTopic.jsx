import React, { useState } from "react";

function SelectTopic({ topic, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div onClick={toggleOpen}>
                {topic.name} {isOpen ? "▼" : "►"}
            </div>
            {isOpen && Array.isArray(topic.subtopics) && (
                <ul>
                    {
                    topic.subtopics
                    &&
                    topic.subtopics.map((subtopic, index) => (
                        <li key={index} onClick={() => onSelect(subtopic)}>
                            {subtopic.name}
                        </li>
                    ))
                    }
                </ul>
            )}
        </div>
    );
}
export default SelectTopic;