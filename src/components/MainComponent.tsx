import React from 'react';
import S3ObjectList from './S3ObjectList';
// import S3BucketList from './S3BuckerList';

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>My S3 Object Listing App</h1>
        <S3ObjectList />
        {/* <S3BucketList /> */}
      </div>
    );
  }
}

export default MainComponent;