import {Models} from '@rematch/core';
import {farmers} from './';

export interface RootModel extends Models<RootModel> {
  farmers: typeof farmers;
}

export const models: RootModel = {farmers};
