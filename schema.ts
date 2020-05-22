
  /* tslint:disable */
  // This file was automatically generated and should not be edited.

  
export interface Query {

  note: (params: {
  id : ID;}) => NotesNode
 
  allNotes: (params: {
  before ?: String;
  after ?: String;
  first ?: Int;
  last ?: Int;
  id ?: ID;
  url_Icontains ?: String;}) => NotesNodeConnection

}
 
export interface NotesNode {

  id: ID;
 
  url: String;
 
  notes?: JSONString;

}
  
export type ID = string;

   
export type String = string;

   
export type JSONString = undefined;

   
export interface NotesNodeConnection {

  pageInfo: PageInfo;
 
  edges: NotesNodeEdge[];

}
 
export interface PageInfo {

  hasNextPage: Boolean;
 
  hasPreviousPage: Boolean;
 
  startCursor?: String;
 
  endCursor?: String;

}
 
export type Boolean = boolean;

   
export interface NotesNodeEdge {

  node?: NotesNode;
 
  cursor: String;

}
 
export type Int = number;

   
export interface Mutation {

  createNotes: (params: {
  input : NotesInput;}) => CreateNotes

}
 
export interface CreateNotes {

  notes?: NotesNode;

}
 export interface NotesInput {
  id ?: ID;
  url ?: String;
  notes ?: JSONString;} 
export interface __Schema {

  types: null[];
 
  queryType: __Type;
 
  mutationType?: __Type;
 
  subscriptionType?: __Type;
 
  directives: null[];

}
 
export interface __Type {

  kind: __TypeKind;
 
  name?: String;
 
  description?: String;
 
  fields: (params: {
  includeDeprecated ?: Boolean;}) => null
 
  interfaces: null[];
 
  possibleTypes: null[];
 
  enumValues: (params: {
  includeDeprecated ?: Boolean;}) => null
 
  inputFields: null[];
 
  ofType?: __Type;

}
 
export enum __TypeKind {
  // Indicates this type is a scalar.
    SCALAR = 'SCALAR',// Indicates this type is an object. `fields` and `interfaces` are valid fields.
    OBJECT = 'OBJECT',// Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.
    INTERFACE = 'INTERFACE',// Indicates this type is a union. `possibleTypes` is a valid field.
    UNION = 'UNION',// Indicates this type is an enum. `enumValues` is a valid field.
    ENUM = 'ENUM',// Indicates this type is an input object. `inputFields` is a valid field.
    INPUT_OBJECT = 'INPUT_OBJECT',// Indicates this type is a list. `ofType` is a valid field.
    LIST = 'LIST',// Indicates this type is a non-null. `ofType` is a valid field.
    NON_NULL = 'NON_NULL'
}
   
export interface __Field {

  name: String;
 
  description?: String;
 
  args: null[];
 
  type: __Type;
 
  isDeprecated: Boolean;
 
  deprecationReason?: String;

}
 
export interface __InputValue {

  name: String;
 
  description?: String;
 
  type: __Type;
 
  defaultValue?: String;

}
 
export interface __EnumValue {

  name: String;
 
  description?: String;
 
  isDeprecated: Boolean;
 
  deprecationReason?: String;

}
 
export interface __Directive {

  name: String;
 
  description?: String;
 
  locations: null[];
 
  args: null[];
 
  onOperation: Boolean;
 
  onFragment: Boolean;
 
  onField: Boolean;

}
 
export enum __DirectiveLocation {
  // Location adjacent to a query operation.
    QUERY = 'QUERY',// Location adjacent to a mutation operation.
    MUTATION = 'MUTATION',// Location adjacent to a subscription operation.
    SUBSCRIPTION = 'SUBSCRIPTION',// Location adjacent to a field.
    FIELD = 'FIELD',// Location adjacent to a fragment definition.
    FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION',// Location adjacent to a fragment spread.
    FRAGMENT_SPREAD = 'FRAGMENT_SPREAD',// Location adjacent to an inline fragment.
    INLINE_FRAGMENT = 'INLINE_FRAGMENT',// Location adjacent to a schema definition.
    SCHEMA = 'SCHEMA',// Location adjacent to a scalar definition.
    SCALAR = 'SCALAR',// Location adjacent to an object definition.
    OBJECT = 'OBJECT',// Location adjacent to a field definition.
    FIELD_DEFINITION = 'FIELD_DEFINITION',// Location adjacent to an argument definition.
    ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION',// Location adjacent to an interface definition.
    INTERFACE = 'INTERFACE',// Location adjacent to a union definition.
    UNION = 'UNION',// Location adjacent to an enum definition.
    ENUM = 'ENUM',// Location adjacent to an enum value definition.
    ENUM_VALUE = 'ENUM_VALUE',// Location adjacent to an input object definition.
    INPUT_OBJECT = 'INPUT_OBJECT',// Location adjacent to an input object field definition.
    INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION'
}
  
