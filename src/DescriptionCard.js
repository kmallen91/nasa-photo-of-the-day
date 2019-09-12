import React from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';


export default function DescriptButton (props) {
  return (
    <div>
      <Button id="UncontrolledPopover" type="button">
        Description
      </Button>
      <UncontrolledPopover className="popover" placement="bottom" target="UncontrolledPopover">
        <PopoverHeader>{props.title}</PopoverHeader>
        <PopoverBody>{props.explanation}</PopoverBody>
      </UncontrolledPopover>
    </div>
  );
}