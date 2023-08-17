import React from 'react';
import {
    Card,
    Title,
    Description,
    CheckBoxLabel,
    Wraper,
} from './order-card.styled';
import { CustomCheckbox } from '../../../components/checkbox/checkbox.component';

export const OrderCard =({ card }) => (
  <Card>
    <Title>{card.title}</Title>
    <Description>{card.description}</Description>
    <Wraper>
      <CheckBoxLabel>
        Done
        <CustomCheckbox isTrue={card.isDone} />
      </CheckBoxLabel>
      <CheckBoxLabel>
        Private
        <CustomCheckbox isTrue={card.isPrivate} />
      </CheckBoxLabel>
    </Wraper>
  </Card>
);
