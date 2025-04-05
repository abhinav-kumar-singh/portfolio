import React, { useState } from 'react';
import Modal from '../../../../../../common-component/modal/Modal';
import Contact from './Contact';

const ExecutedContact = ({
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
        children={<Contact key={refreshKey} />}
        onclose={() => setIsRunClicked(false)}
        onRefresh={handleRefresh}
      />
    </div>
  );
};

export default ExecutedContact;
