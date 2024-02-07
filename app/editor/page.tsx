import React from 'react';
import {Room} from "@/app/Room";
import {CollaborativeEditor} from "@/app/components/editor-components/collaborative-editor/CollaborativeEditor";

const MyComponent = () => {
  return (
    <div>
      <Room>
        <CollaborativeEditor/>
      </Room>
    </div>
  );
};

export default MyComponent;
