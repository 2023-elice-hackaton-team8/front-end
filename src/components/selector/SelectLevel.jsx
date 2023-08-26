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
                    value="초급"
                    checked={selectedLevel === '초급'}
                    onChange={handleLevelChange}
                />
                초급
            </label>
            <label>
                <input
                    type="radio"
                    name="levelRadio"
                    value="중급"
                    checked={selectedLevel === '중급'}
                    onChange={handleLevelChange}
                />
                중급
            </label>
            <label>
                <input
                    type="radio"
                    name="levelRadio"
                    value="고급"
                    checked={selectedLevel === '고급'}
                    onChange={handleLevelChange}
                />
                고급
            </label>
        </div>
    );
};

export default SelectLevel;