import React from "react";
import { Button, Wraper } from "./todo-action.styled";
import { CustomCheckbox } from "../../../../components/checkbox/checkbox.component";

export const TodoAction = ({ isTrue, onDelete, id, onView }) => (
  <Wraper>
    <CustomCheckbox isTrue={isTrue} />
    <Button
      type="button"
      onClick={() => {
        onView(id);
      }}
    >
      View
    </Button>
    <Button
      type="button"
      onClick={() => {
        onDelete(id);
      }}
    >
      Delete
    </Button>
  </Wraper>
);
