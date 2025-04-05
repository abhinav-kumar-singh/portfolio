import React, { useState } from 'react';
import Modal from '../../../../../../common-component/modal/Modal';
import Skills from './Skills';

const ExecutedSkills = ({
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
        children={<Skills key={refreshKey} />}
        onclose={() => setIsRunClicked(false)}
        onRefresh={handleRefresh}
      />
    </div>
  );
};

export default ExecutedSkills;
