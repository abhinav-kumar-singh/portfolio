import React, { useState } from 'react';
import Modal from '../../../../../common/modal';
import About from './About';

const ExecutedAbout = ({
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
        children={<About key={refreshKey} />}
        onclose={() => setIsRunClicked(false)}
        onRefresh={handleRefresh}
      />
    </div>
  );
};

export default ExecutedAbout;
