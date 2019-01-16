/**
 * Html model
 *
 * @author Mamontov Andrey, 03/2018
 */

import { UFEvent } from './event.model';

interface BaseType {
  id?: string;
  name?: string;
}

/**
 * Html tag description
 */
export interface UFTag {
  id: string;
  name: string;
  isContainer: boolean;
  isContent: boolean;
  isParse: boolean;
  isActive: boolean;
  description?: string;
}

/**
 * Html attribute description
 */
export interface UFAttribute {
  id: string;
  name: string;
  value: string;
  hname: string;
  isActive: boolean;
  description?: string;
  visible?: boolean; // system
  isSystem?: boolean; // system
}

/**
 * Html css property description
 */
export interface UFProperty {
  id: string;
  name: string;
  value: string;
  hname: string;
  isActive: boolean;
  description?: string;
  visible?: boolean; // system
  isSystem?: boolean; // system
}

/**
 * Html element description
 */
export interface UFElement {
  id?: string;    // unique
  type?: UFElementType;
  name?: string;  // unique
  tag: UFTag;     // a html tag
  data?: any;
  attributes: Array<UFAttribute>; // array of html attributes
  properties: Array<UFProperty>;  // array of css properties
  events: Array<UFEvent>;         // array of element's events
  children: Array<UFElement>;     // array of children html elements
  systemId: string;   // system
  parentId: string;   // system
  level?: number;     // system
  count?: number;     // system
  isActive?: boolean;
  createDate?: number;
  updateDate?: number;
  // isParse: boolean; // system for parsing
  notParseChildProperties?: boolean; // system
}

export interface UFElementType extends BaseType {
  isActive: boolean;
}
