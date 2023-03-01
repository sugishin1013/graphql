/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  Time: any;
  UUID: any;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']>;
  gt?: InputMaybe<Scalars['BigInt']>;
  gte?: InputMaybe<Scalars['BigInt']>;
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']>;
  lte?: InputMaybe<Scalars['BigInt']>;
  neq?: InputMaybe<Scalars['BigInt']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<Scalars['Date']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']>;
  gt?: InputMaybe<Scalars['Datetime']>;
  gte?: InputMaybe<Scalars['Datetime']>;
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']>;
  lte?: InputMaybe<Scalars['Datetime']>;
  neq?: InputMaybe<Scalars['Datetime']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `hoge` collection */
  deleteFromhogeCollection: HogeDeleteResponse;
  /** Deletes zero or more records from the `todos` collection */
  deleteFromtodosCollection: TodosDeleteResponse;
  /** Adds one or more `hoge` records to the collection */
  insertIntohogeCollection?: Maybe<HogeInsertResponse>;
  /** Adds one or more `todos` records to the collection */
  insertIntotodosCollection?: Maybe<TodosInsertResponse>;
  /** Updates zero or more records in the `hoge` collection */
  updatehogeCollection: HogeUpdateResponse;
  /** Updates zero or more records in the `todos` collection */
  updatetodosCollection: TodosUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromhogeCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<HogeFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtodosCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<TodosFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntohogeCollectionArgs = {
  objects: Array<HogeInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotodosCollectionArgs = {
  objects: Array<TodosInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdatehogeCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<HogeFilter>;
  set: HogeUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetodosCollectionArgs = {
  atMost?: Scalars['Int'];
  filter?: InputMaybe<TodosFilter>;
  set: TodosUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID'];
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `hoge` */
  hogeCollection?: Maybe<HogeConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `todos` */
  todosCollection?: Maybe<TodosConnection>;
};


/** The root type for querying data */
export type QueryHogeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<HogeFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<HogeOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root type for querying data */
export type QueryTodosCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<TodosFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TodosOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<Scalars['Time']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  neq?: InputMaybe<Scalars['Time']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']>;
};

export type Hoge = Node & {
  __typename?: 'hoge';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
};

export type HogeConnection = {
  __typename?: 'hogeConnection';
  edges: Array<HogeEdge>;
  pageInfo: PageInfo;
};

export type HogeDeleteResponse = {
  __typename?: 'hogeDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Hoge>;
};

export type HogeEdge = {
  __typename?: 'hogeEdge';
  cursor: Scalars['String'];
  node: Hoge;
};

export type HogeFilter = {
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type HogeInsertInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type HogeInsertResponse = {
  __typename?: 'hogeInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Hoge>;
};

export type HogeOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type HogeUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type HogeUpdateResponse = {
  __typename?: 'hogeUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Hoge>;
};

export type Todos = Node & {
  __typename?: 'todos';
  id: Scalars['Int'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
};

export type TodosConnection = {
  __typename?: 'todosConnection';
  edges: Array<TodosEdge>;
  pageInfo: PageInfo;
};

export type TodosDeleteResponse = {
  __typename?: 'todosDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Todos>;
};

export type TodosEdge = {
  __typename?: 'todosEdge';
  cursor: Scalars['String'];
  node: Todos;
};

export type TodosFilter = {
  id?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  text?: InputMaybe<StringFilter>;
};

export type TodosInsertInput = {
  id?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
};

export type TodosInsertResponse = {
  __typename?: 'todosInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Todos>;
};

export type TodosOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  text?: InputMaybe<OrderByDirection>;
};

export type TodosUpdateInput = {
  id?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
};

export type TodosUpdateResponse = {
  __typename?: 'todosUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int'];
  /** Array of records impacted by the mutation */
  records: Array<Todos>;
};

export type HogeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HogeQueryQuery = { __typename?: 'Query', todosCollection?: { __typename?: 'todosConnection', edges: Array<{ __typename?: 'todosEdge', node: { __typename?: 'todos', id: number, text?: string | null } }> } | null };


export const HogeQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HogeQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todosCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]}}]} as unknown as DocumentNode<HogeQueryQuery, HogeQueryQueryVariables>;