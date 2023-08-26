import React, { useState } from 'react';

const SelectLevel = ({ onSelectLevel }) => {
    const [selectedLevel, setSelectedLevel] = useState('');

    const handleLevelChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedLevel(selectedValue);
        onSelectLevel(selectedValue);
    };

    return (
        <div className="radioButtons">
            <label>
                <input
                    type="radio"
                    name="levelRadio"
                    value="BASIC"
                    checked={selectedLevel === 'BASIC'}
                    onChange={handleLevelChange}
                />
                초급
            </label>
            <label>
                <input
                    type="radio"
                    name="levelRadio"
                    value="INTERMEDIATE"
                    checked={selectedLevel === 'INTERMEDIATE'}
                    onChange={handleLevelChange}
                />
                중급
            </label>
            <label>
                <input
                    type="radio"
                    name="levelRadio"
                    value="ADVANCED"
                    checked={selectedLevel === 'ADVANCED'}
                    onChange={handleLevelChange}
                />
                고급
            </label>
        </div>
    );
};

export default SelectLevel;