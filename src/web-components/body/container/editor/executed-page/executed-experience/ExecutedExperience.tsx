import React, { useState } from 'react';
import Modal from '../../../../../../common-component/modal/Modal';
import ExperienceTimeline from './ExperienceTimeLine';

const ExecutedExperience = ({
  setIsRunClicked,
}: {
  setIsRunClicked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };
  return (
    <div>
      <Modal
        children={<ExperienceTimeline key={refreshKey} />}
        onclose={() => setIsRunClicked(false)}
        onRefresh={handleRefresh}
      />
    </div>
  );
};

export default ExecutedExperience;
