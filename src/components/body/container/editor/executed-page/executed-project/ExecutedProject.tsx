import React, { useState } from 'react';
import Modal from '../../../../../common/modal';
import Project from './Project';

const ExecutedProject = ({
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
        children={<Project key={refreshKey} />}
        onclose={() => setIsRunClicked(false)}
        onRefresh={handleRefresh}
      />
    </div>
  );
};

export default ExecutedProject;
