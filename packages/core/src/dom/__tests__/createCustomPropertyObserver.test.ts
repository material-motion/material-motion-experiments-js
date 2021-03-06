/** @license
 *  Copyright 2016 - present The Material Motion Authors. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"); you may not
 *  use this file except in compliance with the License. You may obtain a copy
 *  of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 *  WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 *  License for the specific language governing permissions and limitations
 *  under the License.
 */

import { expect, use as useInChai } from 'chai';
import * as sinonChai from 'sinon-chai';
useInChai(sinonChai);

import {
  beforeEach,
  describe,
  it,
} from 'mocha-sugar-free';

import {
  stub,
} from 'sinon';

import {
  MemorylessIndefiniteSubject,
} from 'material-motion';

import {
  createCustomPropertyObserver,
} from '../createCustomPropertyObserver';

describe('createCustomPropertyObserver',
  () => {
    let subject;
    let listener;
    let element;

    beforeEach(
      () => {
        subject = new MemorylessIndefiniteSubject();
        element = document.createElement('div');
        listener = stub();
      }
    );

    it('should apply values from the stream to the element',
      () => {
        subject.subscribe(
          createCustomPropertyObserver('opacity', element)
        );

        subject.next(.5);

        // style properties are strings, and styleMap hasn't shipped yet
        expect(element.style.opacity).to.equal('0.5');
      }
    );
  }
);
