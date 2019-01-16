/**
 * UFForm model
 *
 * @author Mamontov Andrey, 10/2018
 */

import { UFAttribute, UFElement, UFProperty } from './html.model';

export interface UFUserElementAttribute extends UFAttribute {
  idBaseElement: string;
}

export interface UFUserElementProperty extends UFProperty {
  idBaseElement: string;
}

/**
 * UF form element description
 */
export interface UFUserElement extends UFElement {
  userAttributes: Array<UFUserElementAttribute>;
  userProperties: Array<UFUserElementProperty>;
  description?: string;
}
