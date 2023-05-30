import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Contact = {
  __typename?: 'Contact';
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  inn?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactEntityResponseCollection = {
  __typename?: 'ContactEntityResponseCollection';
  data: Array<ContactEntity>;
  meta: ResponseCollectionMeta;
};

export type ContactFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  inn?: InputMaybe<StringFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContactInput = {
  category?: InputMaybe<Scalars['String']>;
  inn?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Contragent = {
  __typename?: 'Contragent';
  contact?: Maybe<ContactEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContragentEntity = {
  __typename?: 'ContragentEntity';
  attributes?: Maybe<Contragent>;
  id?: Maybe<Scalars['ID']>;
};

export type ContragentEntityResponse = {
  __typename?: 'ContragentEntityResponse';
  data?: Maybe<ContragentEntity>;
};

export type ContragentEntityResponseCollection = {
  __typename?: 'ContragentEntityResponseCollection';
  data: Array<ContragentEntity>;
  meta: ResponseCollectionMeta;
};

export type ContragentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContragentFiltersInput>>>;
  contact?: InputMaybe<ContactFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ContragentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContragentFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContragentInput = {
  contact?: InputMaybe<Scalars['ID']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Contact | Contragent | I18NLocale | Invoice | Provider | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  amount?: Maybe<Scalars['Int']>;
  article?: Maybe<Scalars['String']>;
  contragent?: Maybe<ContragentEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delivered?: Maybe<Scalars['Boolean']>;
  deliveryDate?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  provider?: Maybe<ProviderEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InvoiceEntity = {
  __typename?: 'InvoiceEntity';
  attributes?: Maybe<Invoice>;
  id?: Maybe<Scalars['ID']>;
};

export type InvoiceEntityResponse = {
  __typename?: 'InvoiceEntityResponse';
  data?: Maybe<InvoiceEntity>;
};

export type InvoiceEntityResponseCollection = {
  __typename?: 'InvoiceEntityResponseCollection';
  data: Array<InvoiceEntity>;
  meta: ResponseCollectionMeta;
};

export type InvoiceFiltersInput = {
  amount?: InputMaybe<IntFilterInput>;
  and?: InputMaybe<Array<InputMaybe<InvoiceFiltersInput>>>;
  article?: InputMaybe<StringFilterInput>;
  contragent?: InputMaybe<ContragentFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  delivered?: InputMaybe<BooleanFilterInput>;
  deliveryDate?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<InvoiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<InvoiceFiltersInput>>>;
  provider?: InputMaybe<ProviderFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type InvoiceInput = {
  amount?: InputMaybe<Scalars['Int']>;
  article?: InputMaybe<Scalars['String']>;
  contragent?: InputMaybe<Scalars['ID']>;
  delivered?: InputMaybe<Scalars['Boolean']>;
  deliveryDate?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['ID']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createContact?: Maybe<ContactEntityResponse>;
  createContragent?: Maybe<ContragentEntityResponse>;
  createInvoice?: Maybe<InvoiceEntityResponse>;
  createProvider?: Maybe<ProviderEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteContragent?: Maybe<ContragentEntityResponse>;
  deleteInvoice?: Maybe<InvoiceEntityResponse>;
  deleteProvider?: Maybe<ProviderEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateContragent?: Maybe<ContragentEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateInvoice?: Maybe<InvoiceEntityResponse>;
  updateProvider?: Maybe<ProviderEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateContactArgs = {
  data: ContactInput;
};


export type MutationCreateContragentArgs = {
  data: ContragentInput;
};


export type MutationCreateInvoiceArgs = {
  data: InvoiceInput;
};


export type MutationCreateProviderArgs = {
  data: ProviderInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteContactArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteContragentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteInvoiceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProviderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateContactArgs = {
  data: ContactInput;
  id: Scalars['ID'];
};


export type MutationUpdateContragentArgs = {
  data: ContragentInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateInvoiceArgs = {
  data: InvoiceInput;
  id: Scalars['ID'];
};


export type MutationUpdateProviderArgs = {
  data: ProviderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Provider = {
  __typename?: 'Provider';
  contact?: Maybe<ContactEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProviderEntity = {
  __typename?: 'ProviderEntity';
  attributes?: Maybe<Provider>;
  id?: Maybe<Scalars['ID']>;
};

export type ProviderEntityResponse = {
  __typename?: 'ProviderEntityResponse';
  data?: Maybe<ProviderEntity>;
};

export type ProviderEntityResponseCollection = {
  __typename?: 'ProviderEntityResponseCollection';
  data: Array<ProviderEntity>;
  meta: ResponseCollectionMeta;
};

export type ProviderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProviderFiltersInput>>>;
  contact?: InputMaybe<ContactFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ProviderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProviderFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProviderInput = {
  contact?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  contact?: Maybe<ContactEntityResponse>;
  contacts?: Maybe<ContactEntityResponseCollection>;
  contragent?: Maybe<ContragentEntityResponse>;
  contragents?: Maybe<ContragentEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  invoice?: Maybe<InvoiceEntityResponse>;
  invoices?: Maybe<InvoiceEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  provider?: Maybe<ProviderEntityResponse>;
  providers?: Maybe<ProviderEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryContactArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryContactsArgs = {
  filters?: InputMaybe<ContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContragentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryContragentsArgs = {
  filters?: InputMaybe<ContragentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryInvoiceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryInvoicesArgs = {
  filters?: InputMaybe<InvoiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProviderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProvidersArgs = {
  filters?: InputMaybe<ProviderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword?: { __typename?: 'UsersPermissionsPasswordPayload', ok: boolean } | null };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me?: { __typename?: 'UsersPermissionsMe', id: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null, role?: { __typename?: 'UsersPermissionsMeRole', name: string } | null } | null };

export type ResetPasswordMutationVariables = Exact<{
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword?: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null, role?: { __typename?: 'UsersPermissionsMeRole', name: string } | null } } | null };

export type SignInMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null, role?: { __typename?: 'UsersPermissionsMeRole', name: string } | null } } };

export type CreateContactMutationVariables = Exact<{
  data: ContactInput;
}>;


export type CreateContactMutation = { __typename?: 'Mutation', createContact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', id?: string | null } | null } | null };

export type UpdateContactMutationVariables = Exact<{
  id: Scalars['ID'];
  data: ContactInput;
}>;


export type UpdateContactMutation = { __typename?: 'Mutation', updateContact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', id?: string | null } | null } | null };

export type CreateContragentMutationVariables = Exact<{
  data: ContragentInput;
}>;


export type CreateContragentMutation = { __typename?: 'Mutation', createContragent?: { __typename?: 'ContragentEntityResponse', data?: { __typename?: 'ContragentEntity', id?: string | null } | null } | null };

export type DeleteContragentMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteContragentMutation = { __typename?: 'Mutation', deleteContragent?: { __typename?: 'ContragentEntityResponse', data?: { __typename?: 'ContragentEntity', id?: string | null } | null } | null };

export type GetContragentsQueryVariables = Exact<{
  filters: ContragentFiltersInput;
  pag?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type GetContragentsQuery = { __typename?: 'Query', contragents?: { __typename?: 'ContragentEntityResponseCollection', data: Array<{ __typename?: 'ContragentEntity', id?: string | null, attributes?: { __typename?: 'Contragent', contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', id?: string | null, attributes?: { __typename?: 'Contact', name?: string | null, category?: string | null, location?: string | null, inn?: string | null, createdAt?: any | null, updatedAt?: any | null } | null } | null } | null } | null }> } | null };

export type UpdateContragentMutationVariables = Exact<{
  id: Scalars['ID'];
  data: ContragentInput;
}>;


export type UpdateContragentMutation = { __typename?: 'Mutation', updateContragent?: { __typename?: 'ContragentEntityResponse', data?: { __typename?: 'ContragentEntity', id?: string | null } | null } | null };

export type UserFragmentFragment = { __typename?: 'UsersPermissionsMe', id: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null, role?: { __typename?: 'UsersPermissionsMeRole', name: string } | null };

export type CreateInvoiceMutationVariables = Exact<{
  data: InvoiceInput;
}>;


export type CreateInvoiceMutation = { __typename?: 'Mutation', createInvoice?: { __typename?: 'InvoiceEntityResponse', data?: { __typename?: 'InvoiceEntity', id?: string | null } | null } | null };

export type DeleteInvoiceMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteInvoiceMutation = { __typename?: 'Mutation', deleteInvoice?: { __typename?: 'InvoiceEntityResponse', data?: { __typename?: 'InvoiceEntity', id?: string | null } | null } | null };

export type GetInvoicesQueryVariables = Exact<{
  filters: InvoiceFiltersInput;
  pag?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type GetInvoicesQuery = { __typename?: 'Query', invoices?: { __typename?: 'InvoiceEntityResponseCollection', data: Array<{ __typename?: 'InvoiceEntity', id?: string | null, attributes?: { __typename?: 'Invoice', amount?: number | null, article?: string | null, delivered?: boolean | null, createdAt?: any | null, deliveryDate?: any | null, name?: string | null, provider?: { __typename?: 'ProviderEntityResponse', data?: { __typename?: 'ProviderEntity', id?: string | null, attributes?: { __typename?: 'Provider', contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', name?: string | null } | null } | null } | null } | null } | null } | null, contragent?: { __typename?: 'ContragentEntityResponse', data?: { __typename?: 'ContragentEntity', id?: string | null, attributes?: { __typename?: 'Contragent', contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', name?: string | null } | null } | null } | null } | null } | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', page: number, pageSize: number, pageCount: number, total: number } } } | null };

export type UpdateInvoiceMutationVariables = Exact<{
  id: Scalars['ID'];
  data: InvoiceInput;
}>;


export type UpdateInvoiceMutation = { __typename?: 'Mutation', updateInvoice?: { __typename?: 'InvoiceEntityResponse', data?: { __typename?: 'InvoiceEntity', id?: string | null } | null } | null };

export type CreateProviderMutationVariables = Exact<{
  data: ProviderInput;
}>;


export type CreateProviderMutation = { __typename?: 'Mutation', createProvider?: { __typename?: 'ProviderEntityResponse', data?: { __typename?: 'ProviderEntity', id?: string | null } | null } | null };

export type DeleteProviderMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteProviderMutation = { __typename?: 'Mutation', deleteProvider?: { __typename?: 'ProviderEntityResponse', data?: { __typename?: 'ProviderEntity', id?: string | null } | null } | null };

export type GetProvidersQueryVariables = Exact<{
  filters: ProviderFiltersInput;
  pag?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type GetProvidersQuery = { __typename?: 'Query', providers?: { __typename?: 'ProviderEntityResponseCollection', data: Array<{ __typename?: 'ProviderEntity', id?: string | null, attributes?: { __typename?: 'Provider', contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', id?: string | null, attributes?: { __typename?: 'Contact', name?: string | null, category?: string | null, location?: string | null, inn?: string | null, createdAt?: any | null, updatedAt?: any | null } | null } | null } | null } | null }> } | null };

export type UpdateProviderMutationVariables = Exact<{
  id: Scalars['ID'];
  data: ProviderInput;
}>;


export type UpdateProviderMutation = { __typename?: 'Mutation', updateProvider?: { __typename?: 'ProviderEntityResponse', data?: { __typename?: 'ProviderEntity', id?: string | null } | null } | null };

export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on UsersPermissionsMe {
  id
  username
  email
  confirmed
  blocked
  role {
    name
  }
}
    `;
export const ForgotPasswordDocument = gql`
    mutation forgotPassword($email: String!) {
  forgotPassword(email: $email) {
    ok
  }
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const GetMeDocument = gql`
    query getMe {
  me {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($password: String!, $passwordConfirmation: String!, $code: String!) {
  resetPassword(
    password: $password
    passwordConfirmation: $passwordConfirmation
    code: $code
  ) {
    jwt
    user {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      passwordConfirmation: // value for 'passwordConfirmation'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SignInDocument = gql`
    mutation signIn($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
    user {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const CreateContactDocument = gql`
    mutation createContact($data: ContactInput!) {
  createContact(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreateContactMutationFn = Apollo.MutationFunction<CreateContactMutation, CreateContactMutationVariables>;

/**
 * __useCreateContactMutation__
 *
 * To run a mutation, you first call `useCreateContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContactMutation, { data, loading, error }] = useCreateContactMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateContactMutation(baseOptions?: Apollo.MutationHookOptions<CreateContactMutation, CreateContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateContactMutation, CreateContactMutationVariables>(CreateContactDocument, options);
      }
export type CreateContactMutationHookResult = ReturnType<typeof useCreateContactMutation>;
export type CreateContactMutationResult = Apollo.MutationResult<CreateContactMutation>;
export type CreateContactMutationOptions = Apollo.BaseMutationOptions<CreateContactMutation, CreateContactMutationVariables>;
export const UpdateContactDocument = gql`
    mutation updateContact($id: ID!, $data: ContactInput!) {
  updateContact(id: $id, data: $data) {
    data {
      id
    }
  }
}
    `;
export type UpdateContactMutationFn = Apollo.MutationFunction<UpdateContactMutation, UpdateContactMutationVariables>;

/**
 * __useUpdateContactMutation__
 *
 * To run a mutation, you first call `useUpdateContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContactMutation, { data, loading, error }] = useUpdateContactMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateContactMutation(baseOptions?: Apollo.MutationHookOptions<UpdateContactMutation, UpdateContactMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateContactMutation, UpdateContactMutationVariables>(UpdateContactDocument, options);
      }
export type UpdateContactMutationHookResult = ReturnType<typeof useUpdateContactMutation>;
export type UpdateContactMutationResult = Apollo.MutationResult<UpdateContactMutation>;
export type UpdateContactMutationOptions = Apollo.BaseMutationOptions<UpdateContactMutation, UpdateContactMutationVariables>;
export const CreateContragentDocument = gql`
    mutation createContragent($data: ContragentInput!) {
  createContragent(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreateContragentMutationFn = Apollo.MutationFunction<CreateContragentMutation, CreateContragentMutationVariables>;

/**
 * __useCreateContragentMutation__
 *
 * To run a mutation, you first call `useCreateContragentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContragentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContragentMutation, { data, loading, error }] = useCreateContragentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateContragentMutation(baseOptions?: Apollo.MutationHookOptions<CreateContragentMutation, CreateContragentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateContragentMutation, CreateContragentMutationVariables>(CreateContragentDocument, options);
      }
export type CreateContragentMutationHookResult = ReturnType<typeof useCreateContragentMutation>;
export type CreateContragentMutationResult = Apollo.MutationResult<CreateContragentMutation>;
export type CreateContragentMutationOptions = Apollo.BaseMutationOptions<CreateContragentMutation, CreateContragentMutationVariables>;
export const DeleteContragentDocument = gql`
    mutation deleteContragent($id: ID!) {
  deleteContragent(id: $id) {
    data {
      id
    }
  }
}
    `;
export type DeleteContragentMutationFn = Apollo.MutationFunction<DeleteContragentMutation, DeleteContragentMutationVariables>;

/**
 * __useDeleteContragentMutation__
 *
 * To run a mutation, you first call `useDeleteContragentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContragentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteContragentMutation, { data, loading, error }] = useDeleteContragentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteContragentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteContragentMutation, DeleteContragentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteContragentMutation, DeleteContragentMutationVariables>(DeleteContragentDocument, options);
      }
export type DeleteContragentMutationHookResult = ReturnType<typeof useDeleteContragentMutation>;
export type DeleteContragentMutationResult = Apollo.MutationResult<DeleteContragentMutation>;
export type DeleteContragentMutationOptions = Apollo.BaseMutationOptions<DeleteContragentMutation, DeleteContragentMutationVariables>;
export const GetContragentsDocument = gql`
    query getContragents($filters: ContragentFiltersInput!, $pag: PaginationArg = {}, $sort: [String] = []) {
  contragents(filters: $filters, pagination: $pag, sort: $sort) {
    data {
      id
      attributes {
        contact {
          data {
            id
            attributes {
              name
              category
              location
              inn
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetContragentsQuery__
 *
 * To run a query within a React component, call `useGetContragentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContragentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContragentsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pag: // value for 'pag'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetContragentsQuery(baseOptions: Apollo.QueryHookOptions<GetContragentsQuery, GetContragentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContragentsQuery, GetContragentsQueryVariables>(GetContragentsDocument, options);
      }
export function useGetContragentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContragentsQuery, GetContragentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContragentsQuery, GetContragentsQueryVariables>(GetContragentsDocument, options);
        }
export type GetContragentsQueryHookResult = ReturnType<typeof useGetContragentsQuery>;
export type GetContragentsLazyQueryHookResult = ReturnType<typeof useGetContragentsLazyQuery>;
export type GetContragentsQueryResult = Apollo.QueryResult<GetContragentsQuery, GetContragentsQueryVariables>;
export const UpdateContragentDocument = gql`
    mutation updateContragent($id: ID!, $data: ContragentInput!) {
  updateContragent(id: $id, data: $data) {
    data {
      id
    }
  }
}
    `;
export type UpdateContragentMutationFn = Apollo.MutationFunction<UpdateContragentMutation, UpdateContragentMutationVariables>;

/**
 * __useUpdateContragentMutation__
 *
 * To run a mutation, you first call `useUpdateContragentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContragentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContragentMutation, { data, loading, error }] = useUpdateContragentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateContragentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateContragentMutation, UpdateContragentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateContragentMutation, UpdateContragentMutationVariables>(UpdateContragentDocument, options);
      }
export type UpdateContragentMutationHookResult = ReturnType<typeof useUpdateContragentMutation>;
export type UpdateContragentMutationResult = Apollo.MutationResult<UpdateContragentMutation>;
export type UpdateContragentMutationOptions = Apollo.BaseMutationOptions<UpdateContragentMutation, UpdateContragentMutationVariables>;
export const CreateInvoiceDocument = gql`
    mutation createInvoice($data: InvoiceInput!) {
  createInvoice(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreateInvoiceMutationFn = Apollo.MutationFunction<CreateInvoiceMutation, CreateInvoiceMutationVariables>;

/**
 * __useCreateInvoiceMutation__
 *
 * To run a mutation, you first call `useCreateInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInvoiceMutation, { data, loading, error }] = useCreateInvoiceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateInvoiceMutation(baseOptions?: Apollo.MutationHookOptions<CreateInvoiceMutation, CreateInvoiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInvoiceMutation, CreateInvoiceMutationVariables>(CreateInvoiceDocument, options);
      }
export type CreateInvoiceMutationHookResult = ReturnType<typeof useCreateInvoiceMutation>;
export type CreateInvoiceMutationResult = Apollo.MutationResult<CreateInvoiceMutation>;
export type CreateInvoiceMutationOptions = Apollo.BaseMutationOptions<CreateInvoiceMutation, CreateInvoiceMutationVariables>;
export const DeleteInvoiceDocument = gql`
    mutation deleteInvoice($id: ID!) {
  deleteInvoice(id: $id) {
    data {
      id
    }
  }
}
    `;
export type DeleteInvoiceMutationFn = Apollo.MutationFunction<DeleteInvoiceMutation, DeleteInvoiceMutationVariables>;

/**
 * __useDeleteInvoiceMutation__
 *
 * To run a mutation, you first call `useDeleteInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteInvoiceMutation, { data, loading, error }] = useDeleteInvoiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteInvoiceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteInvoiceMutation, DeleteInvoiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteInvoiceMutation, DeleteInvoiceMutationVariables>(DeleteInvoiceDocument, options);
      }
export type DeleteInvoiceMutationHookResult = ReturnType<typeof useDeleteInvoiceMutation>;
export type DeleteInvoiceMutationResult = Apollo.MutationResult<DeleteInvoiceMutation>;
export type DeleteInvoiceMutationOptions = Apollo.BaseMutationOptions<DeleteInvoiceMutation, DeleteInvoiceMutationVariables>;
export const GetInvoicesDocument = gql`
    query getInvoices($filters: InvoiceFiltersInput!, $pag: PaginationArg = {}, $sort: [String] = []) {
  invoices(filters: $filters, pagination: $pag, sort: $sort) {
    data {
      id
      attributes {
        amount
        article
        delivered
        provider {
          data {
            id
            attributes {
              contact {
                data {
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
        contragent {
          data {
            id
            attributes {
              contact {
                data {
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
        createdAt
        deliveryDate
        name
      }
    }
    meta {
      pagination {
        page
        pageSize
        pageCount
        total
      }
    }
  }
}
    `;

/**
 * __useGetInvoicesQuery__
 *
 * To run a query within a React component, call `useGetInvoicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInvoicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInvoicesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pag: // value for 'pag'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetInvoicesQuery(baseOptions: Apollo.QueryHookOptions<GetInvoicesQuery, GetInvoicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInvoicesQuery, GetInvoicesQueryVariables>(GetInvoicesDocument, options);
      }
export function useGetInvoicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInvoicesQuery, GetInvoicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInvoicesQuery, GetInvoicesQueryVariables>(GetInvoicesDocument, options);
        }
export type GetInvoicesQueryHookResult = ReturnType<typeof useGetInvoicesQuery>;
export type GetInvoicesLazyQueryHookResult = ReturnType<typeof useGetInvoicesLazyQuery>;
export type GetInvoicesQueryResult = Apollo.QueryResult<GetInvoicesQuery, GetInvoicesQueryVariables>;
export const UpdateInvoiceDocument = gql`
    mutation updateInvoice($id: ID!, $data: InvoiceInput!) {
  updateInvoice(id: $id, data: $data) {
    data {
      id
    }
  }
}
    `;
export type UpdateInvoiceMutationFn = Apollo.MutationFunction<UpdateInvoiceMutation, UpdateInvoiceMutationVariables>;

/**
 * __useUpdateInvoiceMutation__
 *
 * To run a mutation, you first call `useUpdateInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInvoiceMutation, { data, loading, error }] = useUpdateInvoiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateInvoiceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateInvoiceMutation, UpdateInvoiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateInvoiceMutation, UpdateInvoiceMutationVariables>(UpdateInvoiceDocument, options);
      }
export type UpdateInvoiceMutationHookResult = ReturnType<typeof useUpdateInvoiceMutation>;
export type UpdateInvoiceMutationResult = Apollo.MutationResult<UpdateInvoiceMutation>;
export type UpdateInvoiceMutationOptions = Apollo.BaseMutationOptions<UpdateInvoiceMutation, UpdateInvoiceMutationVariables>;
export const CreateProviderDocument = gql`
    mutation createProvider($data: ProviderInput!) {
  createProvider(data: $data) {
    data {
      id
    }
  }
}
    `;
export type CreateProviderMutationFn = Apollo.MutationFunction<CreateProviderMutation, CreateProviderMutationVariables>;

/**
 * __useCreateProviderMutation__
 *
 * To run a mutation, you first call `useCreateProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProviderMutation, { data, loading, error }] = useCreateProviderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProviderMutation(baseOptions?: Apollo.MutationHookOptions<CreateProviderMutation, CreateProviderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProviderMutation, CreateProviderMutationVariables>(CreateProviderDocument, options);
      }
export type CreateProviderMutationHookResult = ReturnType<typeof useCreateProviderMutation>;
export type CreateProviderMutationResult = Apollo.MutationResult<CreateProviderMutation>;
export type CreateProviderMutationOptions = Apollo.BaseMutationOptions<CreateProviderMutation, CreateProviderMutationVariables>;
export const DeleteProviderDocument = gql`
    mutation deleteProvider($id: ID!) {
  deleteProvider(id: $id) {
    data {
      id
    }
  }
}
    `;
export type DeleteProviderMutationFn = Apollo.MutationFunction<DeleteProviderMutation, DeleteProviderMutationVariables>;

/**
 * __useDeleteProviderMutation__
 *
 * To run a mutation, you first call `useDeleteProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProviderMutation, { data, loading, error }] = useDeleteProviderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProviderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProviderMutation, DeleteProviderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProviderMutation, DeleteProviderMutationVariables>(DeleteProviderDocument, options);
      }
export type DeleteProviderMutationHookResult = ReturnType<typeof useDeleteProviderMutation>;
export type DeleteProviderMutationResult = Apollo.MutationResult<DeleteProviderMutation>;
export type DeleteProviderMutationOptions = Apollo.BaseMutationOptions<DeleteProviderMutation, DeleteProviderMutationVariables>;
export const GetProvidersDocument = gql`
    query getProviders($filters: ProviderFiltersInput!, $pag: PaginationArg = {}, $sort: [String] = []) {
  providers(filters: $filters, pagination: $pag, sort: $sort) {
    data {
      id
      attributes {
        contact {
          data {
            id
            attributes {
              name
              category
              location
              inn
              createdAt
              updatedAt
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetProvidersQuery__
 *
 * To run a query within a React component, call `useGetProvidersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProvidersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProvidersQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pag: // value for 'pag'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetProvidersQuery(baseOptions: Apollo.QueryHookOptions<GetProvidersQuery, GetProvidersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProvidersQuery, GetProvidersQueryVariables>(GetProvidersDocument, options);
      }
export function useGetProvidersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProvidersQuery, GetProvidersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProvidersQuery, GetProvidersQueryVariables>(GetProvidersDocument, options);
        }
export type GetProvidersQueryHookResult = ReturnType<typeof useGetProvidersQuery>;
export type GetProvidersLazyQueryHookResult = ReturnType<typeof useGetProvidersLazyQuery>;
export type GetProvidersQueryResult = Apollo.QueryResult<GetProvidersQuery, GetProvidersQueryVariables>;
export const UpdateProviderDocument = gql`
    mutation updateProvider($id: ID!, $data: ProviderInput!) {
  updateProvider(id: $id, data: $data) {
    data {
      id
    }
  }
}
    `;
export type UpdateProviderMutationFn = Apollo.MutationFunction<UpdateProviderMutation, UpdateProviderMutationVariables>;

/**
 * __useUpdateProviderMutation__
 *
 * To run a mutation, you first call `useUpdateProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProviderMutation, { data, loading, error }] = useUpdateProviderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProviderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProviderMutation, UpdateProviderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProviderMutation, UpdateProviderMutationVariables>(UpdateProviderDocument, options);
      }
export type UpdateProviderMutationHookResult = ReturnType<typeof useUpdateProviderMutation>;
export type UpdateProviderMutationResult = Apollo.MutationResult<UpdateProviderMutation>;
export type UpdateProviderMutationOptions = Apollo.BaseMutationOptions<UpdateProviderMutation, UpdateProviderMutationVariables>;