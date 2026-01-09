/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** ISO8601 Date values */
  Date: { input: string; output: string; }
  /** BigInt value */
  GraphQLBigInt: { input: string; output: string; }
  /** A Float or a String */
  GraphQLStringOrFloat: { input: string; output: string; }
  /** Hashed string values */
  Hash: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Mutation = {
  create_contact_form_home_files_item?: Maybe<Contact_Form_Home_Files>;
  create_contact_form_home_files_items: Array<Contact_Form_Home_Files>;
  create_contact_form_home_item?: Maybe<Contact_Form_Home>;
  create_contact_form_home_items: Array<Contact_Form_Home>;
  create_contact_form_item?: Maybe<Contact_Form>;
  create_contact_form_items: Array<Contact_Form>;
  create_cv_apply_item?: Maybe<Cv_Apply>;
  create_cv_apply_items: Array<Cv_Apply>;
  create_job_item?: Maybe<Job>;
  create_job_items: Array<Job>;
  create_posts_item?: Maybe<Posts>;
  create_posts_items: Array<Posts>;
  create_seo_item?: Maybe<Seo>;
  create_seo_items: Array<Seo>;
  create_seo_section_item?: Maybe<Seo_Section>;
  create_seo_section_items: Array<Seo_Section>;
  create_testimonials_item?: Maybe<Testimonials>;
  create_testimonials_items: Array<Testimonials>;
  delete_posts_item?: Maybe<Delete_One>;
  delete_posts_items?: Maybe<Delete_Many>;
  delete_seo_section_item?: Maybe<Delete_One>;
  delete_seo_section_items?: Maybe<Delete_Many>;
  update_cv_apply_batch: Array<Cv_Apply>;
  update_cv_apply_item?: Maybe<Cv_Apply>;
  update_cv_apply_items: Array<Cv_Apply>;
  update_job_batch: Array<Job>;
  update_job_item?: Maybe<Job>;
  update_job_items: Array<Job>;
  update_seo_batch: Array<Seo>;
  update_seo_item?: Maybe<Seo>;
  update_seo_items: Array<Seo>;
  update_seo_section_batch: Array<Seo_Section>;
  update_seo_section_item?: Maybe<Seo_Section>;
  update_seo_section_items: Array<Seo_Section>;
  update_testimonials_batch: Array<Testimonials>;
  update_testimonials_item?: Maybe<Testimonials>;
  update_testimonials_items: Array<Testimonials>;
};


export type MutationCreate_Contact_Form_Home_Files_ItemArgs = {
  data: Create_Contact_Form_Home_Files_Input;
};


export type MutationCreate_Contact_Form_Home_Files_ItemsArgs = {
  data?: InputMaybe<Array<Create_Contact_Form_Home_Files_Input>>;
  filter?: InputMaybe<Contact_Form_Home_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Contact_Form_Home_ItemArgs = {
  data: Create_Contact_Form_Home_Input;
};


export type MutationCreate_Contact_Form_Home_ItemsArgs = {
  data?: InputMaybe<Array<Create_Contact_Form_Home_Input>>;
  filter?: InputMaybe<Contact_Form_Home_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Contact_Form_ItemArgs = {
  data: Create_Contact_Form_Input;
};


export type MutationCreate_Contact_Form_ItemsArgs = {
  data?: InputMaybe<Array<Create_Contact_Form_Input>>;
  filter?: InputMaybe<Contact_Form_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Cv_Apply_ItemArgs = {
  data: Create_Cv_Apply_Input;
};


export type MutationCreate_Cv_Apply_ItemsArgs = {
  data?: InputMaybe<Array<Create_Cv_Apply_Input>>;
  filter?: InputMaybe<Cv_Apply_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Job_ItemArgs = {
  data: Create_Job_Input;
};


export type MutationCreate_Job_ItemsArgs = {
  data?: InputMaybe<Array<Create_Job_Input>>;
  filter?: InputMaybe<Job_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Posts_ItemArgs = {
  data: Create_Posts_Input;
};


export type MutationCreate_Posts_ItemsArgs = {
  data?: InputMaybe<Array<Create_Posts_Input>>;
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Seo_ItemArgs = {
  data: Create_Seo_Input;
};


export type MutationCreate_Seo_ItemsArgs = {
  data?: InputMaybe<Array<Create_Seo_Input>>;
  filter?: InputMaybe<Seo_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Seo_Section_ItemArgs = {
  data: Create_Seo_Section_Input;
};


export type MutationCreate_Seo_Section_ItemsArgs = {
  data?: InputMaybe<Array<Create_Seo_Section_Input>>;
  filter?: InputMaybe<Seo_Section_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Testimonials_ItemArgs = {
  data: Create_Testimonials_Input;
};


export type MutationCreate_Testimonials_ItemsArgs = {
  data?: InputMaybe<Array<Create_Testimonials_Input>>;
  filter?: InputMaybe<Testimonials_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationDelete_Posts_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Posts_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Seo_Section_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Seo_Section_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationUpdate_Cv_Apply_BatchArgs = {
  data?: InputMaybe<Array<Update_Cv_Apply_Input>>;
  filter?: InputMaybe<Cv_Apply_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Cv_Apply_ItemArgs = {
  data: Update_Cv_Apply_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Cv_Apply_ItemsArgs = {
  data: Update_Cv_Apply_Input;
  filter?: InputMaybe<Cv_Apply_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Job_BatchArgs = {
  data?: InputMaybe<Array<Update_Job_Input>>;
  filter?: InputMaybe<Job_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Job_ItemArgs = {
  data: Update_Job_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Job_ItemsArgs = {
  data: Update_Job_Input;
  filter?: InputMaybe<Job_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Seo_BatchArgs = {
  data?: InputMaybe<Array<Update_Seo_Input>>;
  filter?: InputMaybe<Seo_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Seo_ItemArgs = {
  data: Update_Seo_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Seo_ItemsArgs = {
  data: Update_Seo_Input;
  filter?: InputMaybe<Seo_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Seo_Section_BatchArgs = {
  data?: InputMaybe<Array<Update_Seo_Section_Input>>;
  filter?: InputMaybe<Seo_Section_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Seo_Section_ItemArgs = {
  data: Update_Seo_Section_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Seo_Section_ItemsArgs = {
  data: Update_Seo_Section_Input;
  filter?: InputMaybe<Seo_Section_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Testimonials_BatchArgs = {
  data?: InputMaybe<Array<Update_Testimonials_Input>>;
  filter?: InputMaybe<Testimonials_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Testimonials_ItemArgs = {
  data: Update_Testimonials_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Testimonials_ItemsArgs = {
  data: Update_Testimonials_Input;
  filter?: InputMaybe<Testimonials_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Query = {
  block_gallery_files: Array<Block_Gallery_Files>;
  block_gallery_files_aggregated: Array<Block_Gallery_Files_Aggregated>;
  block_gallery_files_by_id?: Maybe<Block_Gallery_Files>;
  block_gallery_files_by_version?: Maybe<Version_Block_Gallery_Files>;
  block_team: Array<Block_Team>;
  block_team_aggregated: Array<Block_Team_Aggregated>;
  block_team_by_id?: Maybe<Block_Team>;
  block_team_by_version?: Maybe<Version_Block_Team>;
  categories: Array<Categories>;
  categories_aggregated: Array<Categories_Aggregated>;
  categories_by_id?: Maybe<Categories>;
  categories_by_version?: Maybe<Version_Categories>;
  category_post_detail: Array<Category_Post_Detail>;
  category_post_detail_aggregated: Array<Category_Post_Detail_Aggregated>;
  category_post_detail_by_id?: Maybe<Category_Post_Detail>;
  category_post_detail_by_version?: Maybe<Version_Category_Post_Detail>;
  category_post_detail_posts_tags: Array<Category_Post_Detail_Posts_Tags>;
  category_post_detail_posts_tags_aggregated: Array<Category_Post_Detail_Posts_Tags_Aggregated>;
  category_post_detail_posts_tags_by_id?: Maybe<Category_Post_Detail_Posts_Tags>;
  category_post_detail_posts_tags_by_version?: Maybe<Version_Category_Post_Detail_Posts_Tags>;
  contact_form: Array<Contact_Form>;
  contact_form_aggregated: Array<Contact_Form_Aggregated>;
  contact_form_by_id?: Maybe<Contact_Form>;
  contact_form_by_version?: Maybe<Version_Contact_Form>;
  contact_form_home: Array<Contact_Form_Home>;
  contact_form_home_aggregated: Array<Contact_Form_Home_Aggregated>;
  contact_form_home_by_id?: Maybe<Contact_Form_Home>;
  contact_form_home_by_version?: Maybe<Version_Contact_Form_Home>;
  contact_form_home_files: Array<Contact_Form_Home_Files>;
  contact_form_home_files_aggregated: Array<Contact_Form_Home_Files_Aggregated>;
  contact_form_home_files_by_id?: Maybe<Contact_Form_Home_Files>;
  contact_form_home_files_by_version?: Maybe<Version_Contact_Form_Home_Files>;
  cv_apply: Array<Cv_Apply>;
  cv_apply_aggregated: Array<Cv_Apply_Aggregated>;
  cv_apply_by_id?: Maybe<Cv_Apply>;
  cv_apply_by_version?: Maybe<Version_Cv_Apply>;
  job: Array<Job>;
  job_aggregated: Array<Job_Aggregated>;
  job_by_id?: Maybe<Job>;
  job_by_version?: Maybe<Version_Job>;
  pages: Array<Pages>;
  pages_aggregated: Array<Pages_Aggregated>;
  pages_blog?: Maybe<Pages_Blog>;
  pages_blog_by_version?: Maybe<Version_Pages_Blog>;
  pages_by_id?: Maybe<Pages>;
  pages_by_version?: Maybe<Version_Pages>;
  post_gallery_items: Array<Post_Gallery_Items>;
  post_gallery_items_aggregated: Array<Post_Gallery_Items_Aggregated>;
  post_gallery_items_by_id?: Maybe<Post_Gallery_Items>;
  post_gallery_items_by_version?: Maybe<Version_Post_Gallery_Items>;
  posts: Array<Posts>;
  posts_aggregated: Array<Posts_Aggregated>;
  posts_by_id?: Maybe<Posts>;
  posts_by_version?: Maybe<Version_Posts>;
  posts_category_post_detail: Array<Posts_Category_Post_Detail>;
  posts_category_post_detail_aggregated: Array<Posts_Category_Post_Detail_Aggregated>;
  posts_category_post_detail_by_id?: Maybe<Posts_Category_Post_Detail>;
  posts_category_post_detail_by_version?: Maybe<Version_Posts_Category_Post_Detail>;
  posts_posts_tags: Array<Posts_Posts_Tags>;
  posts_posts_tags_aggregated: Array<Posts_Posts_Tags_Aggregated>;
  posts_posts_tags_by_id?: Maybe<Posts_Posts_Tags>;
  posts_posts_tags_by_version?: Maybe<Version_Posts_Posts_Tags>;
  posts_tags: Array<Posts_Tags>;
  posts_tags_aggregated: Array<Posts_Tags_Aggregated>;
  posts_tags_by_id?: Maybe<Posts_Tags>;
  posts_tags_by_version?: Maybe<Version_Posts_Tags>;
  redirects: Array<Redirects>;
  redirects_aggregated: Array<Redirects_Aggregated>;
  redirects_by_id?: Maybe<Redirects>;
  redirects_by_version?: Maybe<Version_Redirects>;
  seo: Array<Seo>;
  seo_aggregated: Array<Seo_Aggregated>;
  seo_by_id?: Maybe<Seo>;
  seo_by_version?: Maybe<Version_Seo>;
  seo_section: Array<Seo_Section>;
  seo_section_aggregated: Array<Seo_Section_Aggregated>;
  seo_section_by_id?: Maybe<Seo_Section>;
  seo_section_by_version?: Maybe<Version_Seo_Section>;
  team: Array<Team>;
  team_aggregated: Array<Team_Aggregated>;
  team_by_id?: Maybe<Team>;
  team_by_version?: Maybe<Version_Team>;
  testimonials: Array<Testimonials>;
  testimonials_aggregated: Array<Testimonials_Aggregated>;
  testimonials_by_id?: Maybe<Testimonials>;
  testimonials_by_version?: Maybe<Version_Testimonials>;
};


export type QueryBlock_Gallery_FilesArgs = {
  filter?: InputMaybe<Block_Gallery_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Gallery_Files_AggregatedArgs = {
  filter?: InputMaybe<Block_Gallery_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Gallery_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Gallery_Files_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryBlock_TeamArgs = {
  filter?: InputMaybe<Block_Team_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Team_AggregatedArgs = {
  filter?: InputMaybe<Block_Team_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlock_Team_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBlock_Team_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryCategoriesArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategories_AggregatedArgs = {
  filter?: InputMaybe<Categories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategories_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategories_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryCategory_Post_DetailArgs = {
  filter?: InputMaybe<Category_Post_Detail_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategory_Post_Detail_AggregatedArgs = {
  filter?: InputMaybe<Category_Post_Detail_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategory_Post_Detail_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategory_Post_Detail_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryCategory_Post_Detail_Posts_TagsArgs = {
  filter?: InputMaybe<Category_Post_Detail_Posts_Tags_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategory_Post_Detail_Posts_Tags_AggregatedArgs = {
  filter?: InputMaybe<Category_Post_Detail_Posts_Tags_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategory_Post_Detail_Posts_Tags_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCategory_Post_Detail_Posts_Tags_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryContact_FormArgs = {
  filter?: InputMaybe<Contact_Form_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContact_Form_AggregatedArgs = {
  filter?: InputMaybe<Contact_Form_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContact_Form_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContact_Form_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryContact_Form_HomeArgs = {
  filter?: InputMaybe<Contact_Form_Home_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContact_Form_Home_AggregatedArgs = {
  filter?: InputMaybe<Contact_Form_Home_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContact_Form_Home_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContact_Form_Home_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryContact_Form_Home_FilesArgs = {
  filter?: InputMaybe<Contact_Form_Home_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContact_Form_Home_Files_AggregatedArgs = {
  filter?: InputMaybe<Contact_Form_Home_Files_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContact_Form_Home_Files_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContact_Form_Home_Files_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryCv_ApplyArgs = {
  filter?: InputMaybe<Cv_Apply_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCv_Apply_AggregatedArgs = {
  filter?: InputMaybe<Cv_Apply_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCv_Apply_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCv_Apply_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryJobArgs = {
  filter?: InputMaybe<Job_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryJob_AggregatedArgs = {
  filter?: InputMaybe<Job_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryJob_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryJob_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPagesArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_AggregatedArgs = {
  filter?: InputMaybe<Pages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPages_BlogArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPages_Blog_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryPages_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPages_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPost_Gallery_ItemsArgs = {
  filter?: InputMaybe<Post_Gallery_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPost_Gallery_Items_AggregatedArgs = {
  filter?: InputMaybe<Post_Gallery_Items_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPost_Gallery_Items_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPost_Gallery_Items_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPostsArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPosts_AggregatedArgs = {
  filter?: InputMaybe<Posts_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPosts_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPosts_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPosts_Category_Post_DetailArgs = {
  filter?: InputMaybe<Posts_Category_Post_Detail_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPosts_Category_Post_Detail_AggregatedArgs = {
  filter?: InputMaybe<Posts_Category_Post_Detail_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPosts_Category_Post_Detail_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPosts_Category_Post_Detail_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPosts_Posts_TagsArgs = {
  filter?: InputMaybe<Posts_Posts_Tags_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPosts_Posts_Tags_AggregatedArgs = {
  filter?: InputMaybe<Posts_Posts_Tags_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPosts_Posts_Tags_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPosts_Posts_Tags_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryPosts_TagsArgs = {
  filter?: InputMaybe<Posts_Tags_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPosts_Tags_AggregatedArgs = {
  filter?: InputMaybe<Posts_Tags_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPosts_Tags_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPosts_Tags_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryRedirectsArgs = {
  filter?: InputMaybe<Redirects_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRedirects_AggregatedArgs = {
  filter?: InputMaybe<Redirects_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRedirects_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRedirects_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QuerySeoArgs = {
  filter?: InputMaybe<Seo_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySeo_AggregatedArgs = {
  filter?: InputMaybe<Seo_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySeo_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySeo_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QuerySeo_SectionArgs = {
  filter?: InputMaybe<Seo_Section_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySeo_Section_AggregatedArgs = {
  filter?: InputMaybe<Seo_Section_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySeo_Section_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySeo_Section_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryTeamArgs = {
  filter?: InputMaybe<Team_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeam_AggregatedArgs = {
  filter?: InputMaybe<Team_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTeam_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTeam_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryTestimonialsArgs = {
  filter?: InputMaybe<Testimonials_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTestimonials_AggregatedArgs = {
  filter?: InputMaybe<Testimonials_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTestimonials_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTestimonials_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  block_gallery_files_mutated?: Maybe<Block_Gallery_Files_Mutated>;
  block_team_mutated?: Maybe<Block_Team_Mutated>;
  categories_mutated?: Maybe<Categories_Mutated>;
  category_post_detail_mutated?: Maybe<Category_Post_Detail_Mutated>;
  category_post_detail_posts_tags_mutated?: Maybe<Category_Post_Detail_Posts_Tags_Mutated>;
  contact_form_home_files_mutated?: Maybe<Contact_Form_Home_Files_Mutated>;
  contact_form_home_mutated?: Maybe<Contact_Form_Home_Mutated>;
  contact_form_mutated?: Maybe<Contact_Form_Mutated>;
  cv_apply_mutated?: Maybe<Cv_Apply_Mutated>;
  directus_access_mutated?: Maybe<Directus_Access_Mutated>;
  directus_files_mutated?: Maybe<Directus_Files_Mutated>;
  directus_flows_mutated?: Maybe<Directus_Flows_Mutated>;
  directus_folders_mutated?: Maybe<Directus_Folders_Mutated>;
  directus_roles_mutated?: Maybe<Directus_Roles_Mutated>;
  directus_shares_mutated?: Maybe<Directus_Shares_Mutated>;
  directus_users_mutated?: Maybe<Directus_Users_Mutated>;
  job_mutated?: Maybe<Job_Mutated>;
  pages_blog_mutated?: Maybe<Pages_Blog_Mutated>;
  pages_mutated?: Maybe<Pages_Mutated>;
  post_gallery_items_mutated?: Maybe<Post_Gallery_Items_Mutated>;
  posts_category_post_detail_mutated?: Maybe<Posts_Category_Post_Detail_Mutated>;
  posts_mutated?: Maybe<Posts_Mutated>;
  posts_posts_tags_mutated?: Maybe<Posts_Posts_Tags_Mutated>;
  posts_tags_mutated?: Maybe<Posts_Tags_Mutated>;
  redirects_mutated?: Maybe<Redirects_Mutated>;
  seo_mutated?: Maybe<Seo_Mutated>;
  seo_section_mutated?: Maybe<Seo_Section_Mutated>;
  team_mutated?: Maybe<Team_Mutated>;
  testimonials_mutated?: Maybe<Testimonials_Mutated>;
};


export type SubscriptionBlock_Gallery_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionBlock_Team_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionCategories_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionCategory_Post_Detail_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionCategory_Post_Detail_Posts_Tags_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionContact_Form_Home_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionContact_Form_Home_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionContact_Form_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionCv_Apply_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Access_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Flows_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Folders_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Roles_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Shares_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Users_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionJob_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPages_Blog_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPost_Gallery_Items_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPosts_Category_Post_Detail_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPosts_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPosts_Posts_Tags_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPosts_Tags_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionRedirects_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionSeo_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionSeo_Section_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionTeam_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionTestimonials_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Big_Int_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Block_Gallery_Files = {
  block_gallery_id?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  directus_files_id?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Block_Gallery_FilesDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_Gallery_FilesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Block_Gallery_FilesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Block_Gallery_Files_Aggregated = {
  avg?: Maybe<Block_Gallery_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Block_Gallery_Files_Aggregated_Fields>;
  count?: Maybe<Block_Gallery_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Gallery_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Block_Gallery_Files_Aggregated_Fields>;
  min?: Maybe<Block_Gallery_Files_Aggregated_Fields>;
  sum?: Maybe<Block_Gallery_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Block_Gallery_Files_Aggregated_Fields>;
};

export type Block_Gallery_Files_Aggregated_Count = {
  block_gallery_id?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  directus_files_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Block_Gallery_Files_Aggregated_Fields = {
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Block_Gallery_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Gallery_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Gallery_Files_Filter>>>;
  block_gallery_id?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Block_Gallery_Files_Mutated = {
  data?: Maybe<Block_Gallery_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Block_Team = {
  content?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Block_Team_Aggregated = {
  count?: Maybe<Block_Team_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Block_Team_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Block_Team_Aggregated_Count = {
  content?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Block_Team_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Block_Team_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Block_Team_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Block_Team_Mutated = {
  data?: Maybe<Block_Team>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Categories = {
  color?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  tag_name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type CategoriesSeoArgs = {
  filter?: InputMaybe<Seo_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Categories_Aggregated = {
  avg?: Maybe<Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<Categories_Aggregated_Fields>;
  count?: Maybe<Categories_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Categories_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Categories_Aggregated_Fields>;
  min?: Maybe<Categories_Aggregated_Fields>;
  sum?: Maybe<Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<Categories_Aggregated_Fields>;
};

export type Categories_Aggregated_Count = {
  color?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  seo?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  tag_name?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Categories_Aggregated_Fields = {
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Categories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  seo?: InputMaybe<Seo_Filter>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  tag_name?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Categories_Mutated = {
  data?: Maybe<Categories>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Category_Post_Detail = {
  categories_post_detail_tags?: Maybe<Array<Maybe<Category_Post_Detail_Posts_Tags>>>;
  categories_post_detail_tags_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  seo?: Maybe<Seo>;
  slugs?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Category_Post_DetailCategories_Post_Detail_TagsArgs = {
  filter?: InputMaybe<Category_Post_Detail_Posts_Tags_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Category_Post_DetailSeoArgs = {
  filter?: InputMaybe<Seo_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Category_Post_DetailUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Category_Post_DetailUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_Post_Detail_Aggregated = {
  avg?: Maybe<Category_Post_Detail_Aggregated_Fields>;
  avgDistinct?: Maybe<Category_Post_Detail_Aggregated_Fields>;
  count?: Maybe<Category_Post_Detail_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Category_Post_Detail_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Category_Post_Detail_Aggregated_Fields>;
  min?: Maybe<Category_Post_Detail_Aggregated_Fields>;
  sum?: Maybe<Category_Post_Detail_Aggregated_Fields>;
  sumDistinct?: Maybe<Category_Post_Detail_Aggregated_Fields>;
};

export type Category_Post_Detail_Aggregated_Count = {
  categories_post_detail_tags?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  seo?: Maybe<Scalars['Int']['output']>;
  slugs?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Category_Post_Detail_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Category_Post_Detail_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Category_Post_Detail_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Category_Post_Detail_Filter>>>;
  categories_post_detail_tags?: InputMaybe<Category_Post_Detail_Posts_Tags_Filter>;
  categories_post_detail_tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  seo?: InputMaybe<Seo_Filter>;
  slugs?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Category_Post_Detail_Mutated = {
  data?: Maybe<Category_Post_Detail>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Category_Post_Detail_Posts_Tags = {
  category_post_detail_id?: Maybe<Category_Post_Detail>;
  id: Scalars['ID']['output'];
  posts_tags_id?: Maybe<Posts_Tags>;
};


export type Category_Post_Detail_Posts_TagsCategory_Post_Detail_IdArgs = {
  filter?: InputMaybe<Category_Post_Detail_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Category_Post_Detail_Posts_TagsPosts_Tags_IdArgs = {
  filter?: InputMaybe<Posts_Tags_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_Post_Detail_Posts_Tags_Aggregated = {
  avg?: Maybe<Category_Post_Detail_Posts_Tags_Aggregated_Fields>;
  avgDistinct?: Maybe<Category_Post_Detail_Posts_Tags_Aggregated_Fields>;
  count?: Maybe<Category_Post_Detail_Posts_Tags_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Category_Post_Detail_Posts_Tags_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Category_Post_Detail_Posts_Tags_Aggregated_Fields>;
  min?: Maybe<Category_Post_Detail_Posts_Tags_Aggregated_Fields>;
  sum?: Maybe<Category_Post_Detail_Posts_Tags_Aggregated_Fields>;
  sumDistinct?: Maybe<Category_Post_Detail_Posts_Tags_Aggregated_Fields>;
};

export type Category_Post_Detail_Posts_Tags_Aggregated_Count = {
  category_post_detail_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  posts_tags_id?: Maybe<Scalars['Int']['output']>;
};

export type Category_Post_Detail_Posts_Tags_Aggregated_Fields = {
  category_post_detail_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  posts_tags_id?: Maybe<Scalars['Float']['output']>;
};

export type Category_Post_Detail_Posts_Tags_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Category_Post_Detail_Posts_Tags_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Category_Post_Detail_Posts_Tags_Filter>>>;
  category_post_detail_id?: InputMaybe<Category_Post_Detail_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  posts_tags_id?: InputMaybe<Posts_Tags_Filter>;
};

export type Category_Post_Detail_Posts_Tags_Mutated = {
  data?: Maybe<Category_Post_Detail_Posts_Tags>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Contact_Form = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  messages?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_name?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Directus_Users>;
};


export type Contact_FormUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Contact_FormUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contact_Form_Aggregated = {
  avg?: Maybe<Contact_Form_Aggregated_Fields>;
  avgDistinct?: Maybe<Contact_Form_Aggregated_Fields>;
  count?: Maybe<Contact_Form_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Contact_Form_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Contact_Form_Aggregated_Fields>;
  min?: Maybe<Contact_Form_Aggregated_Fields>;
  sum?: Maybe<Contact_Form_Aggregated_Fields>;
  sumDistinct?: Maybe<Contact_Form_Aggregated_Fields>;
};

export type Contact_Form_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  messages?: Maybe<Scalars['Int']['output']>;
  phone_number?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_name?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Contact_Form_Aggregated_Fields = {
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Contact_Form_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Contact_Form_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Contact_Form_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  messages?: InputMaybe<String_Filter_Operators>;
  phone_number?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_name?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Contact_Form_Home = {
  category?: Maybe<Categories>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  list_image?: Maybe<Array<Maybe<Contact_Form_Home_Files>>>;
  list_image_func?: Maybe<Count_Functions>;
  list_link_share?: Maybe<Scalars['JSON']['output']>;
  list_link_share_func?: Maybe<Count_Functions>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
  utm_source?: Maybe<Scalars['String']['output']>;
};


export type Contact_Form_HomeCategoryArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Contact_Form_HomeList_ImageArgs = {
  filter?: InputMaybe<Contact_Form_Home_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Contact_Form_HomeUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Contact_Form_HomeUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contact_Form_Home_Aggregated = {
  avg?: Maybe<Contact_Form_Home_Aggregated_Fields>;
  avgDistinct?: Maybe<Contact_Form_Home_Aggregated_Fields>;
  count?: Maybe<Contact_Form_Home_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Contact_Form_Home_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Contact_Form_Home_Aggregated_Fields>;
  min?: Maybe<Contact_Form_Home_Aggregated_Fields>;
  sum?: Maybe<Contact_Form_Home_Aggregated_Fields>;
  sumDistinct?: Maybe<Contact_Form_Home_Aggregated_Fields>;
};

export type Contact_Form_Home_Aggregated_Count = {
  category?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  list_image?: Maybe<Scalars['Int']['output']>;
  list_link_share?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  phone_number?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  utm_source?: Maybe<Scalars['Int']['output']>;
};

export type Contact_Form_Home_Aggregated_Fields = {
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Contact_Form_Home_Files = {
  contact_form_home_id?: Maybe<Contact_Form_Home>;
  directus_files_id?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
};


export type Contact_Form_Home_FilesContact_Form_Home_IdArgs = {
  filter?: InputMaybe<Contact_Form_Home_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Contact_Form_Home_FilesDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Contact_Form_Home_Files_Aggregated = {
  avg?: Maybe<Contact_Form_Home_Files_Aggregated_Fields>;
  avgDistinct?: Maybe<Contact_Form_Home_Files_Aggregated_Fields>;
  count?: Maybe<Contact_Form_Home_Files_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Contact_Form_Home_Files_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Contact_Form_Home_Files_Aggregated_Fields>;
  min?: Maybe<Contact_Form_Home_Files_Aggregated_Fields>;
  sum?: Maybe<Contact_Form_Home_Files_Aggregated_Fields>;
  sumDistinct?: Maybe<Contact_Form_Home_Files_Aggregated_Fields>;
};

export type Contact_Form_Home_Files_Aggregated_Count = {
  contact_form_home_id?: Maybe<Scalars['Int']['output']>;
  directus_files_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type Contact_Form_Home_Files_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Contact_Form_Home_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Contact_Form_Home_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Contact_Form_Home_Files_Filter>>>;
  contact_form_home_id?: InputMaybe<Contact_Form_Home_Filter>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Contact_Form_Home_Files_Mutated = {
  data?: Maybe<Contact_Form_Home_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Contact_Form_Home_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Contact_Form_Home_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Contact_Form_Home_Filter>>>;
  category?: InputMaybe<Categories_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  list_image?: InputMaybe<Contact_Form_Home_Files_Filter>;
  list_image_func?: InputMaybe<Count_Function_Filter_Operators>;
  list_link_share?: InputMaybe<String_Filter_Operators>;
  list_link_share_func?: InputMaybe<Count_Function_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  phone_number?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  utm_source?: InputMaybe<String_Filter_Operators>;
};

export type Contact_Form_Home_Mutated = {
  data?: Maybe<Contact_Form_Home>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Contact_Form_Mutated = {
  data?: Maybe<Contact_Form>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  count?: Maybe<Scalars['Int']['output']>;
};

export type Create_Contact_Form_Home_Files_Input = {
  contact_form_home_id?: InputMaybe<Create_Contact_Form_Home_Input>;
  directus_files_id?: InputMaybe<Create_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Create_Contact_Form_Home_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  list_image?: InputMaybe<Array<InputMaybe<Create_Contact_Form_Home_Files_Input>>>;
  list_link_share?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Scalars['String']['input']>;
  utm_source?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Contact_Form_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  messages?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Scalars['String']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Cv_Apply_Input = {
  cv_file?: InputMaybe<Create_Directus_Files_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  job_apply?: InputMaybe<Array<InputMaybe<Create_Job_Input>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']['input']>;
  created_on?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  embed?: InputMaybe<Scalars['String']['input']>;
  filename_disk?: InputMaybe<Scalars['String']['input']>;
  filename_download: Scalars['String']['input'];
  filesize?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  focal_point_x?: InputMaybe<Scalars['Int']['input']>;
  focal_point_y?: InputMaybe<Scalars['Int']['input']>;
  folder?: InputMaybe<Create_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  modified_by?: InputMaybe<Scalars['String']['input']>;
  modified_on?: InputMaybe<Scalars['Date']['input']>;
  storage: Scalars['String']['input'];
  tags?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tus_data?: InputMaybe<Scalars['JSON']['input']>;
  tus_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<Scalars['String']['input']>;
  uploaded_on?: InputMaybe<Scalars['Date']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Create_Directus_Folders_Input>;
};

export type Create_Job_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  job_apply_id?: InputMaybe<Create_Cv_Apply_Input>;
  job_description?: InputMaybe<Scalars['String']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Posts_Input = {
  author?: InputMaybe<Scalars['String']['input']>;
  built_with?: InputMaybe<Scalars['JSON']['input']>;
  categories_post_detail?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  client?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  /** Use a range */
  cost?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_published?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  gallery?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  is_visible?: InputMaybe<Scalars['Boolean']['input']>;
  json_schema?: InputMaybe<Scalars['JSON']['input']>;
  order_blog?: InputMaybe<Scalars['Int']['input']>;
  posts_tags?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<Create_Seo_Input>;
  show_top_post?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** What type of post is this? Determines the template used to display the post on the frontend. */
  type?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Scalars['String']['input']>;
  video_url?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Seo_Input = {
  /** Where should the canonical URL for this entry point to. */
  canonical_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** This entries meta description. Max 160 characters. */
  meta_description?: InputMaybe<Scalars['String']['input']>;
  /** Instruct crawlers not to follow links on this page. */
  no_follow?: InputMaybe<Scalars['Boolean']['input']>;
  /** Instruct crawlers not to index this entry. */
  no_index?: InputMaybe<Scalars['Boolean']['input']>;
  /** How often to instruct search engines to crawl. */
  sitemap_change_frequency?: InputMaybe<Scalars['String']['input']>;
  /** Valid values range from 0.0 to 1.0. This value does not affect how your pages are compared to pages on other sites, it only lets the search engines know which pages you deem most important for the crawlers. */
  sitemap_priority?: InputMaybe<Scalars['Float']['input']>;
  /** This entries title, defaults to title. Max 70 characters including the site name. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Seo_Section_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_seo_content_visible?: InputMaybe<Scalars['Boolean']['input']>;
  keywords?: InputMaybe<Scalars['JSON']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Testimonials_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  company_logo?: InputMaybe<Create_Directus_Files_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  link?: InputMaybe<Scalars['String']['input']>;
  order_id?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  star?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Scalars['String']['input']>;
};

export type Cv_Apply = {
  cv_file?: Maybe<Directus_Files>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  job_apply?: Maybe<Array<Maybe<Job>>>;
  job_apply_func?: Maybe<Count_Functions>;
  name?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Cv_ApplyCv_FileArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Cv_ApplyJob_ApplyArgs = {
  filter?: InputMaybe<Job_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Cv_ApplyUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Cv_ApplyUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Cv_Apply_Aggregated = {
  count?: Maybe<Cv_Apply_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Cv_Apply_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Cv_Apply_Aggregated_Count = {
  cv_file?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  job_apply?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Cv_Apply_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Cv_Apply_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Cv_Apply_Filter>>>;
  cv_file?: InputMaybe<Directus_Files_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  job_apply?: InputMaybe<Job_Filter>;
  job_apply_func?: InputMaybe<Count_Function_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Cv_Apply_Mutated = {
  data?: Maybe<Cv_Apply>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  day?: Maybe<Scalars['Int']['output']>;
  hour?: Maybe<Scalars['Int']['output']>;
  minute?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  second?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Delete_Many = {
  ids: Array<Maybe<Scalars['ID']['output']>>;
};

export type Delete_One = {
  id: Scalars['ID']['output'];
};

export type Directus_Access = {
  id: Scalars['ID']['output'];
  policy: Scalars['String']['output'];
  role?: Maybe<Directus_Roles>;
  sort?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Directus_Users>;
};


export type Directus_AccessRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_AccessUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Access_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Access_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Access_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
  policy?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Access_Mutated = {
  data?: Maybe<Directus_Access>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Files = {
  charset?: Maybe<Scalars['String']['output']>;
  created_on?: Maybe<Scalars['Date']['output']>;
  created_on_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize?: Maybe<Scalars['GraphQLBigInt']['output']>;
  focal_point_x?: Maybe<Scalars['Int']['output']>;
  focal_point_y?: Maybe<Scalars['Int']['output']>;
  folder?: Maybe<Directus_Folders>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Directus_Users>;
  modified_on?: Maybe<Scalars['Date']['output']>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  tus_data?: Maybe<Scalars['JSON']['output']>;
  tus_data_func?: Maybe<Count_Functions>;
  tus_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<Directus_Users>;
  uploaded_on?: Maybe<Scalars['Date']['output']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type Directus_FilesFolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  created_on?: InputMaybe<Date_Filter_Operators>;
  created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Big_Int_Filter_Operators>;
  focal_point_x?: InputMaybe<Number_Filter_Operators>;
  focal_point_y?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<Directus_Folders_Filter>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_Users_Filter>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  tus_data?: InputMaybe<String_Filter_Operators>;
  tus_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  tus_id?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<Directus_Users_Filter>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  data?: Maybe<Directus_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Flows = {
  accountability?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  operation?: Maybe<Scalars['String']['output']>;
  operations?: Maybe<Scalars['String']['output']>;
  operations_func?: Maybe<Count_Functions>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  trigger?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_FlowsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Flows_Mutated = {
  data?: Maybe<Directus_Flows>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Folders = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Directus_Folders>;
};


export type Directus_FoldersParentArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Folders_Mutated = {
  data?: Maybe<Directus_Folders>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Roles = {
  children?: Maybe<Array<Maybe<Directus_Roles>>>;
  children_func?: Maybe<Count_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Directus_Roles>;
  policies?: Maybe<Array<Maybe<Directus_Access>>>;
  policies_func?: Maybe<Count_Functions>;
  users?: Maybe<Array<Maybe<Directus_Users>>>;
  users_func?: Maybe<Count_Functions>;
};


export type Directus_RolesChildrenArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RolesParentArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RolesPoliciesArgs = {
  filter?: InputMaybe<Directus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RolesUsersArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Roles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  children?: InputMaybe<Directus_Roles_Filter>;
  children_func?: InputMaybe<Count_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Roles_Filter>;
  policies?: InputMaybe<Directus_Access_Filter>;
  policies_func?: InputMaybe<Count_Function_Filter_Operators>;
  users?: InputMaybe<Directus_Users_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Roles_Mutated = {
  data?: Maybe<Directus_Roles>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Shares = {
  collection: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: Maybe<Scalars['Date']['output']>;
  date_end_func?: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: Maybe<Scalars['Date']['output']>;
  date_start_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** $t:shared_leave_blank_for_passwordless_access */
  password?: Maybe<Scalars['Hash']['output']>;
  role?: Maybe<Directus_Roles>;
  times_used?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_SharesRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SharesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Shares_Mutated = {
  data?: Maybe<Directus_Shares>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Users = {
  appearance?: Maybe<Scalars['String']['output']>;
  auth_data?: Maybe<Scalars['JSON']['output']>;
  auth_data_func?: Maybe<Count_Functions>;
  avatar?: Maybe<Directus_Files>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_notifications?: Maybe<Scalars['Boolean']['output']>;
  external_identifier?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  last_access?: Maybe<Scalars['Date']['output']>;
  last_access_func?: Maybe<Datetime_Functions>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_page?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['Hash']['output']>;
  policies?: Maybe<Array<Maybe<Directus_Access>>>;
  policies_func?: Maybe<Count_Functions>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Directus_Roles>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  tfa_secret?: Maybe<Scalars['Hash']['output']>;
  theme_dark?: Maybe<Scalars['String']['output']>;
  theme_dark_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_dark_overrides_func?: Maybe<Count_Functions>;
  theme_light?: Maybe<Scalars['String']['output']>;
  theme_light_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_light_overrides_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['Hash']['output']>;
};


export type Directus_UsersAvatarArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_UsersPoliciesArgs = {
  filter?: InputMaybe<Directus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_UsersRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  appearance?: InputMaybe<String_Filter_Operators>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<Hash_Filter_Operators>;
  policies?: InputMaybe<Directus_Access_Filter>;
  policies_func?: InputMaybe<Count_Function_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  tfa_secret?: InputMaybe<Hash_Filter_Operators>;
  theme_dark?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  theme_light?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<Hash_Filter_Operators>;
};

export type Directus_Users_Mutated = {
  data?: Maybe<Directus_Users>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Hash_Filter_Operators = {
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Job = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  job_apply_id?: Maybe<Cv_Apply>;
  job_description?: Maybe<Scalars['String']['output']>;
  job_title?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type JobJob_Apply_IdArgs = {
  filter?: InputMaybe<Cv_Apply_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type JobUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type JobUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Job_Aggregated = {
  avg?: Maybe<Job_Aggregated_Fields>;
  avgDistinct?: Maybe<Job_Aggregated_Fields>;
  count?: Maybe<Job_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Job_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Job_Aggregated_Fields>;
  min?: Maybe<Job_Aggregated_Fields>;
  sum?: Maybe<Job_Aggregated_Fields>;
  sumDistinct?: Maybe<Job_Aggregated_Fields>;
};

export type Job_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  job_apply_id?: Maybe<Scalars['Int']['output']>;
  job_description?: Maybe<Scalars['Int']['output']>;
  job_title?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Job_Aggregated_Fields = {
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Job_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Job_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Job_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  job_apply_id?: InputMaybe<Cv_Apply_Filter>;
  job_description?: InputMaybe<String_Filter_Operators>;
  job_title?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Job_Mutated = {
  data?: Maybe<Job>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Pages = {
  blocks?: Maybe<Scalars['String']['output']>;
  blocks_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  /** Start with a slash (/page) and do NOT add a trailing slash (/page/) */
  permalink?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<Seo>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};


export type PagesSeoArgs = {
  filter?: InputMaybe<Seo_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pages_Aggregated = {
  avg?: Maybe<Pages_Aggregated_Fields>;
  avgDistinct?: Maybe<Pages_Aggregated_Fields>;
  count?: Maybe<Pages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Pages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Pages_Aggregated_Fields>;
  min?: Maybe<Pages_Aggregated_Fields>;
  sum?: Maybe<Pages_Aggregated_Fields>;
  sumDistinct?: Maybe<Pages_Aggregated_Fields>;
};

export type Pages_Aggregated_Count = {
  blocks?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Start with a slash (/page) and do NOT add a trailing slash (/page/) */
  permalink?: Maybe<Scalars['Int']['output']>;
  seo?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Pages_Aggregated_Fields = {
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Pages_Blog = {
  featured_post?: Maybe<Posts>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  seo?: Maybe<Seo>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Pages_BlogFeatured_PostArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Pages_BlogSeoArgs = {
  filter?: InputMaybe<Seo_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Pages_Blog_Mutated = {
  data?: Maybe<Pages_Blog>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  blocks?: InputMaybe<String_Filter_Operators>;
  blocks_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  permalink?: InputMaybe<String_Filter_Operators>;
  seo?: InputMaybe<Seo_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Pages_Mutated = {
  data?: Maybe<Pages>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Post_Gallery_Items = {
  directus_files_id?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  posts_id?: Maybe<Posts>;
  sort?: Maybe<Scalars['Int']['output']>;
};


export type Post_Gallery_ItemsDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Post_Gallery_ItemsPosts_IdArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Gallery_Items_Aggregated = {
  avg?: Maybe<Post_Gallery_Items_Aggregated_Fields>;
  avgDistinct?: Maybe<Post_Gallery_Items_Aggregated_Fields>;
  count?: Maybe<Post_Gallery_Items_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Post_Gallery_Items_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Post_Gallery_Items_Aggregated_Fields>;
  min?: Maybe<Post_Gallery_Items_Aggregated_Fields>;
  sum?: Maybe<Post_Gallery_Items_Aggregated_Fields>;
  sumDistinct?: Maybe<Post_Gallery_Items_Aggregated_Fields>;
};

export type Post_Gallery_Items_Aggregated_Count = {
  directus_files_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  posts_id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Post_Gallery_Items_Aggregated_Fields = {
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Post_Gallery_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Post_Gallery_Items_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Post_Gallery_Items_Filter>>>;
  directus_files_id?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<String_Filter_Operators>;
  posts_id?: InputMaybe<Posts_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
};

export type Post_Gallery_Items_Mutated = {
  data?: Maybe<Post_Gallery_Items>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Posts = {
  author?: Maybe<Team>;
  built_with?: Maybe<Scalars['JSON']['output']>;
  built_with_func?: Maybe<Count_Functions>;
  categories_post_detail?: Maybe<Array<Maybe<Posts_Category_Post_Detail>>>;
  categories_post_detail_func?: Maybe<Count_Functions>;
  category?: Maybe<Categories>;
  client?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  /** Use a range */
  cost?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_published?: Maybe<Scalars['Date']['output']>;
  date_published_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  gallery?: Maybe<Array<Maybe<Post_Gallery_Items>>>;
  gallery_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  is_visible?: Maybe<Scalars['Boolean']['output']>;
  json_schema?: Maybe<Scalars['JSON']['output']>;
  json_schema_func?: Maybe<Count_Functions>;
  order_blog?: Maybe<Scalars['Int']['output']>;
  posts_tags?: Maybe<Array<Maybe<Posts_Posts_Tags>>>;
  posts_tags_func?: Maybe<Count_Functions>;
  seo?: Maybe<Seo>;
  show_top_post?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  /** What type of post is this? Determines the template used to display the post on the frontend. */
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
  video_url?: Maybe<Scalars['String']['output']>;
};


export type PostsAuthorArgs = {
  filter?: InputMaybe<Team_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostsCategories_Post_DetailArgs = {
  filter?: InputMaybe<Posts_Category_Post_Detail_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostsCategoryArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostsGalleryArgs = {
  filter?: InputMaybe<Post_Gallery_Items_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostsImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostsPosts_TagsArgs = {
  filter?: InputMaybe<Posts_Posts_Tags_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostsSeoArgs = {
  filter?: InputMaybe<Seo_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Posts_Aggregated = {
  avg?: Maybe<Posts_Aggregated_Fields>;
  avgDistinct?: Maybe<Posts_Aggregated_Fields>;
  count?: Maybe<Posts_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Posts_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Posts_Aggregated_Fields>;
  min?: Maybe<Posts_Aggregated_Fields>;
  sum?: Maybe<Posts_Aggregated_Fields>;
  sumDistinct?: Maybe<Posts_Aggregated_Fields>;
};

export type Posts_Aggregated_Count = {
  author?: Maybe<Scalars['Int']['output']>;
  built_with?: Maybe<Scalars['Int']['output']>;
  categories_post_detail?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<Scalars['Int']['output']>;
  client?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['Int']['output']>;
  /** Use a range */
  cost?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_published?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  gallery?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  is_visible?: Maybe<Scalars['Int']['output']>;
  json_schema?: Maybe<Scalars['Int']['output']>;
  order_blog?: Maybe<Scalars['Int']['output']>;
  posts_tags?: Maybe<Scalars['Int']['output']>;
  seo?: Maybe<Scalars['Int']['output']>;
  show_top_post?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  summary?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  /** What type of post is this? Determines the template used to display the post on the frontend. */
  type?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
  video_url?: Maybe<Scalars['Int']['output']>;
};

export type Posts_Aggregated_Fields = {
  order_blog?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Posts_Category_Post_Detail = {
  category_post_detail_id?: Maybe<Category_Post_Detail>;
  id: Scalars['ID']['output'];
  posts_id?: Maybe<Posts>;
};


export type Posts_Category_Post_DetailCategory_Post_Detail_IdArgs = {
  filter?: InputMaybe<Category_Post_Detail_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Posts_Category_Post_DetailPosts_IdArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Posts_Category_Post_Detail_Aggregated = {
  avg?: Maybe<Posts_Category_Post_Detail_Aggregated_Fields>;
  avgDistinct?: Maybe<Posts_Category_Post_Detail_Aggregated_Fields>;
  count?: Maybe<Posts_Category_Post_Detail_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Posts_Category_Post_Detail_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Posts_Category_Post_Detail_Aggregated_Fields>;
  min?: Maybe<Posts_Category_Post_Detail_Aggregated_Fields>;
  sum?: Maybe<Posts_Category_Post_Detail_Aggregated_Fields>;
  sumDistinct?: Maybe<Posts_Category_Post_Detail_Aggregated_Fields>;
};

export type Posts_Category_Post_Detail_Aggregated_Count = {
  category_post_detail_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  posts_id?: Maybe<Scalars['Int']['output']>;
};

export type Posts_Category_Post_Detail_Aggregated_Fields = {
  category_post_detail_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Posts_Category_Post_Detail_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posts_Category_Post_Detail_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Posts_Category_Post_Detail_Filter>>>;
  category_post_detail_id?: InputMaybe<Category_Post_Detail_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  posts_id?: InputMaybe<Posts_Filter>;
};

export type Posts_Category_Post_Detail_Mutated = {
  data?: Maybe<Posts_Category_Post_Detail>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Posts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posts_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Posts_Filter>>>;
  author?: InputMaybe<Team_Filter>;
  built_with?: InputMaybe<String_Filter_Operators>;
  built_with_func?: InputMaybe<Count_Function_Filter_Operators>;
  categories_post_detail?: InputMaybe<Posts_Category_Post_Detail_Filter>;
  categories_post_detail_func?: InputMaybe<Count_Function_Filter_Operators>;
  category?: InputMaybe<Categories_Filter>;
  client?: InputMaybe<String_Filter_Operators>;
  content?: InputMaybe<String_Filter_Operators>;
  cost?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_published?: InputMaybe<Date_Filter_Operators>;
  date_published_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  gallery?: InputMaybe<Post_Gallery_Items_Filter>;
  gallery_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  is_visible?: InputMaybe<Boolean_Filter_Operators>;
  json_schema?: InputMaybe<String_Filter_Operators>;
  json_schema_func?: InputMaybe<Count_Function_Filter_Operators>;
  order_blog?: InputMaybe<Number_Filter_Operators>;
  posts_tags?: InputMaybe<Posts_Posts_Tags_Filter>;
  posts_tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  seo?: InputMaybe<Seo_Filter>;
  show_top_post?: InputMaybe<Boolean_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  summary?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
  video_url?: InputMaybe<String_Filter_Operators>;
};

export type Posts_Mutated = {
  data?: Maybe<Posts>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Posts_Posts_Tags = {
  id: Scalars['ID']['output'];
  posts_id?: Maybe<Posts>;
  posts_tags_id?: Maybe<Posts_Tags>;
};


export type Posts_Posts_TagsPosts_IdArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Posts_Posts_TagsPosts_Tags_IdArgs = {
  filter?: InputMaybe<Posts_Tags_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Posts_Posts_Tags_Aggregated = {
  avg?: Maybe<Posts_Posts_Tags_Aggregated_Fields>;
  avgDistinct?: Maybe<Posts_Posts_Tags_Aggregated_Fields>;
  count?: Maybe<Posts_Posts_Tags_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Posts_Posts_Tags_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Posts_Posts_Tags_Aggregated_Fields>;
  min?: Maybe<Posts_Posts_Tags_Aggregated_Fields>;
  sum?: Maybe<Posts_Posts_Tags_Aggregated_Fields>;
  sumDistinct?: Maybe<Posts_Posts_Tags_Aggregated_Fields>;
};

export type Posts_Posts_Tags_Aggregated_Count = {
  id?: Maybe<Scalars['Int']['output']>;
  posts_id?: Maybe<Scalars['Int']['output']>;
  posts_tags_id?: Maybe<Scalars['Int']['output']>;
};

export type Posts_Posts_Tags_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  posts_tags_id?: Maybe<Scalars['Float']['output']>;
};

export type Posts_Posts_Tags_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posts_Posts_Tags_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Posts_Posts_Tags_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  posts_id?: InputMaybe<Posts_Filter>;
  posts_tags_id?: InputMaybe<Posts_Tags_Filter>;
};

export type Posts_Posts_Tags_Mutated = {
  data?: Maybe<Posts_Posts_Tags>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Posts_Tags = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image_tag?: Maybe<Directus_Files>;
  seo?: Maybe<Seo>;
  slugs?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  tag_name?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Posts_TagsImage_TagArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Posts_TagsSeoArgs = {
  filter?: InputMaybe<Seo_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Posts_TagsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Posts_TagsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Posts_Tags_Aggregated = {
  avg?: Maybe<Posts_Tags_Aggregated_Fields>;
  avgDistinct?: Maybe<Posts_Tags_Aggregated_Fields>;
  count?: Maybe<Posts_Tags_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Posts_Tags_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Posts_Tags_Aggregated_Fields>;
  min?: Maybe<Posts_Tags_Aggregated_Fields>;
  sum?: Maybe<Posts_Tags_Aggregated_Fields>;
  sumDistinct?: Maybe<Posts_Tags_Aggregated_Fields>;
};

export type Posts_Tags_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image_tag?: Maybe<Scalars['Int']['output']>;
  seo?: Maybe<Scalars['Int']['output']>;
  slugs?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  tag_name?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Posts_Tags_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Posts_Tags_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posts_Tags_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Posts_Tags_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image_tag?: InputMaybe<Directus_Files_Filter>;
  seo?: InputMaybe<Seo_Filter>;
  slugs?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  tag_name?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Posts_Tags_Mutated = {
  data?: Maybe<Posts_Tags>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Redirects = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  response_code?: Maybe<Scalars['Int']['output']>;
  url_new?: Maybe<Scalars['String']['output']>;
  url_old?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type RedirectsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type RedirectsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Redirects_Aggregated = {
  avg?: Maybe<Redirects_Aggregated_Fields>;
  avgDistinct?: Maybe<Redirects_Aggregated_Fields>;
  count?: Maybe<Redirects_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Redirects_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Redirects_Aggregated_Fields>;
  min?: Maybe<Redirects_Aggregated_Fields>;
  sum?: Maybe<Redirects_Aggregated_Fields>;
  sumDistinct?: Maybe<Redirects_Aggregated_Fields>;
};

export type Redirects_Aggregated_Count = {
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  response_code?: Maybe<Scalars['Int']['output']>;
  url_new?: Maybe<Scalars['Int']['output']>;
  url_old?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Redirects_Aggregated_Fields = {
  response_code?: Maybe<Scalars['Float']['output']>;
};

export type Redirects_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Redirects_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Redirects_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  response_code?: InputMaybe<Number_Filter_Operators>;
  url_new?: InputMaybe<String_Filter_Operators>;
  url_old?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Redirects_Mutated = {
  data?: Maybe<Redirects>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Seo = {
  /** Where should the canonical URL for this entry point to. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** This entries meta description. Max 160 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** Instruct crawlers not to follow links on this page. */
  no_follow?: Maybe<Scalars['Boolean']['output']>;
  /** Instruct crawlers not to index this entry. */
  no_index?: Maybe<Scalars['Boolean']['output']>;
  /** How often to instruct search engines to crawl. */
  sitemap_change_frequency?: Maybe<Scalars['String']['output']>;
  /** Valid values range from 0.0 to 1.0. This value does not affect how your pages are compared to pages on other sites, it only lets the search engines know which pages you deem most important for the crawlers. */
  sitemap_priority?: Maybe<Scalars['Float']['output']>;
  /** This entries title, defaults to title. Max 70 characters including the site name. */
  title?: Maybe<Scalars['String']['output']>;
};

export type Seo_Aggregated = {
  avg?: Maybe<Seo_Aggregated_Fields>;
  avgDistinct?: Maybe<Seo_Aggregated_Fields>;
  count?: Maybe<Seo_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Seo_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Seo_Aggregated_Fields>;
  min?: Maybe<Seo_Aggregated_Fields>;
  sum?: Maybe<Seo_Aggregated_Fields>;
  sumDistinct?: Maybe<Seo_Aggregated_Fields>;
};

export type Seo_Aggregated_Count = {
  /** Where should the canonical URL for this entry point to. */
  canonical_url?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** This entries meta description. Max 160 characters. */
  meta_description?: Maybe<Scalars['Int']['output']>;
  /** Instruct crawlers not to follow links on this page. */
  no_follow?: Maybe<Scalars['Int']['output']>;
  /** Instruct crawlers not to index this entry. */
  no_index?: Maybe<Scalars['Int']['output']>;
  /** How often to instruct search engines to crawl. */
  sitemap_change_frequency?: Maybe<Scalars['Int']['output']>;
  /** Valid values range from 0.0 to 1.0. This value does not affect how your pages are compared to pages on other sites, it only lets the search engines know which pages you deem most important for the crawlers. */
  sitemap_priority?: Maybe<Scalars['Int']['output']>;
  /** This entries title, defaults to title. Max 70 characters including the site name. */
  title?: Maybe<Scalars['Int']['output']>;
};

export type Seo_Aggregated_Fields = {
  /** Valid values range from 0.0 to 1.0. This value does not affect how your pages are compared to pages on other sites, it only lets the search engines know which pages you deem most important for the crawlers. */
  sitemap_priority?: Maybe<Scalars['Float']['output']>;
};

export type Seo_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Seo_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Seo_Filter>>>;
  canonical_url?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  meta_description?: InputMaybe<String_Filter_Operators>;
  no_follow?: InputMaybe<Boolean_Filter_Operators>;
  no_index?: InputMaybe<Boolean_Filter_Operators>;
  sitemap_change_frequency?: InputMaybe<String_Filter_Operators>;
  sitemap_priority?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Seo_Mutated = {
  data?: Maybe<Seo>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Seo_Section = {
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  is_seo_content_visible?: Maybe<Scalars['Boolean']['output']>;
  keywords?: Maybe<Scalars['JSON']['output']>;
  keywords_func?: Maybe<Count_Functions>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Seo_SectionUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Seo_SectionUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Seo_Section_Aggregated = {
  avg?: Maybe<Seo_Section_Aggregated_Fields>;
  avgDistinct?: Maybe<Seo_Section_Aggregated_Fields>;
  count?: Maybe<Seo_Section_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Seo_Section_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Seo_Section_Aggregated_Fields>;
  min?: Maybe<Seo_Section_Aggregated_Fields>;
  sum?: Maybe<Seo_Section_Aggregated_Fields>;
  sumDistinct?: Maybe<Seo_Section_Aggregated_Fields>;
};

export type Seo_Section_Aggregated_Count = {
  content?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  is_seo_content_visible?: Maybe<Scalars['Int']['output']>;
  keywords?: Maybe<Scalars['Int']['output']>;
  meta_description?: Maybe<Scalars['Int']['output']>;
  meta_title?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Seo_Section_Aggregated_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Seo_Section_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Seo_Section_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Seo_Section_Filter>>>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  is_seo_content_visible?: InputMaybe<Boolean_Filter_Operators>;
  keywords?: InputMaybe<String_Filter_Operators>;
  keywords_func?: InputMaybe<Count_Function_Filter_Operators>;
  meta_description?: InputMaybe<String_Filter_Operators>;
  meta_title?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Seo_Section_Mutated = {
  data?: Maybe<Seo_Section>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _icontains?: InputMaybe<Scalars['String']['input']>;
  _iends_with?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['String']['input']>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _niends_with?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['String']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Team = {
  bio?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  job_title?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Maybe<Posts>>>;
  posts_func?: Maybe<Count_Functions>;
  slug?: Maybe<Scalars['String']['output']>;
  social_media?: Maybe<Scalars['JSON']['output']>;
  social_media_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type TeamImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TeamPostsArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TeamUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TeamUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Team_Aggregated = {
  avg?: Maybe<Team_Aggregated_Fields>;
  avgDistinct?: Maybe<Team_Aggregated_Fields>;
  count?: Maybe<Team_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Team_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Team_Aggregated_Fields>;
  min?: Maybe<Team_Aggregated_Fields>;
  sum?: Maybe<Team_Aggregated_Fields>;
  sumDistinct?: Maybe<Team_Aggregated_Fields>;
};

export type Team_Aggregated_Count = {
  bio?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  job_title?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  posts?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  social_media?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Team_Aggregated_Fields = {
  sort?: Maybe<Scalars['Float']['output']>;
};

export type Team_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Team_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Team_Filter>>>;
  bio?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  job_title?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  posts?: InputMaybe<Posts_Filter>;
  posts_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  social_media?: InputMaybe<String_Filter_Operators>;
  social_media_func?: InputMaybe<Count_Function_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Team_Mutated = {
  data?: Maybe<Team>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Testimonials = {
  category?: Maybe<Categories>;
  company?: Maybe<Scalars['String']['output']>;
  company_logo?: Maybe<Directus_Files>;
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Directus_Files>;
  link?: Maybe<Scalars['String']['output']>;
  order_id?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  star?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type TestimonialsCategoryArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TestimonialsCompany_LogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TestimonialsImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TestimonialsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type TestimonialsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Testimonials_Aggregated = {
  avg?: Maybe<Testimonials_Aggregated_Fields>;
  avgDistinct?: Maybe<Testimonials_Aggregated_Fields>;
  count?: Maybe<Testimonials_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Testimonials_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Testimonials_Aggregated_Fields>;
  min?: Maybe<Testimonials_Aggregated_Fields>;
  sum?: Maybe<Testimonials_Aggregated_Fields>;
  sumDistinct?: Maybe<Testimonials_Aggregated_Fields>;
};

export type Testimonials_Aggregated_Count = {
  category?: Maybe<Scalars['Int']['output']>;
  company?: Maybe<Scalars['Int']['output']>;
  company_logo?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['Int']['output']>;
  date_created?: Maybe<Scalars['Int']['output']>;
  date_updated?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['Int']['output']>;
  order_id?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  star?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  subtitle?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['Int']['output']>;
  user_updated?: Maybe<Scalars['Int']['output']>;
};

export type Testimonials_Aggregated_Fields = {
  sort?: Maybe<Scalars['Float']['output']>;
  star?: Maybe<Scalars['Float']['output']>;
};

export type Testimonials_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Testimonials_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Testimonials_Filter>>>;
  category?: InputMaybe<Categories_Filter>;
  company?: InputMaybe<String_Filter_Operators>;
  company_logo?: InputMaybe<Directus_Files_Filter>;
  content?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  link?: InputMaybe<String_Filter_Operators>;
  order_id?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  star?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  subtitle?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Testimonials_Mutated = {
  data?: Maybe<Testimonials>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Update_Cv_Apply_Input = {
  cv_file?: InputMaybe<Update_Directus_Files_Input>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  job_apply?: InputMaybe<Array<InputMaybe<Update_Job_Input>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']['input']>;
  created_on?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  embed?: InputMaybe<Scalars['String']['input']>;
  filename_disk?: InputMaybe<Scalars['String']['input']>;
  filename_download?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  focal_point_x?: InputMaybe<Scalars['Int']['input']>;
  focal_point_y?: InputMaybe<Scalars['Int']['input']>;
  folder?: InputMaybe<Update_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  modified_by?: InputMaybe<Scalars['String']['input']>;
  modified_on?: InputMaybe<Scalars['Date']['input']>;
  storage?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tus_data?: InputMaybe<Scalars['JSON']['input']>;
  tus_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<Scalars['String']['input']>;
  uploaded_on?: InputMaybe<Scalars['Date']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Update_Directus_Folders_Input>;
};

export type Update_Job_Input = {
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  job_apply_id?: InputMaybe<Update_Cv_Apply_Input>;
  job_description?: InputMaybe<Scalars['String']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Seo_Input = {
  /** Where should the canonical URL for this entry point to. */
  canonical_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** This entries meta description. Max 160 characters. */
  meta_description?: InputMaybe<Scalars['String']['input']>;
  /** Instruct crawlers not to follow links on this page. */
  no_follow?: InputMaybe<Scalars['Boolean']['input']>;
  /** Instruct crawlers not to index this entry. */
  no_index?: InputMaybe<Scalars['Boolean']['input']>;
  /** How often to instruct search engines to crawl. */
  sitemap_change_frequency?: InputMaybe<Scalars['String']['input']>;
  /** Valid values range from 0.0 to 1.0. This value does not affect how your pages are compared to pages on other sites, it only lets the search engines know which pages you deem most important for the crawlers. */
  sitemap_priority?: InputMaybe<Scalars['Float']['input']>;
  /** This entries title, defaults to title. Max 70 characters including the site name. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Seo_Section_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_seo_content_visible?: InputMaybe<Scalars['Boolean']['input']>;
  keywords?: InputMaybe<Scalars['JSON']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Testimonials_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  company_logo?: InputMaybe<Update_Directus_Files_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  date_created?: InputMaybe<Scalars['Date']['input']>;
  date_updated?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Update_Directus_Files_Input>;
  link?: InputMaybe<Scalars['String']['input']>;
  order_id?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  star?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_created?: InputMaybe<Scalars['String']['input']>;
  user_updated?: InputMaybe<Scalars['String']['input']>;
};

export type Version_Block_Gallery_Files = {
  block_gallery_id?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  directus_files_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Block_Team = {
  content?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Categories = {
  color?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  seo?: Maybe<Scalars['JSON']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  tag_name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Category_Post_Detail = {
  categories_post_detail_tags?: Maybe<Scalars['JSON']['output']>;
  categories_post_detail_tags_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  seo?: Maybe<Scalars['JSON']['output']>;
  slugs?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Category_Post_Detail_Posts_Tags = {
  category_post_detail_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  posts_tags_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Contact_Form = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  messages?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_name?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Contact_Form_Home = {
  category?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  list_image?: Maybe<Scalars['JSON']['output']>;
  list_link_share?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
  utm_source?: Maybe<Scalars['String']['output']>;
};

export type Version_Contact_Form_Home_Files = {
  contact_form_home_id?: Maybe<Scalars['JSON']['output']>;
  directus_files_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type Version_Cv_Apply = {
  cv_file?: Maybe<Scalars['JSON']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  job_apply?: Maybe<Scalars['JSON']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Job = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  job_apply_id?: Maybe<Scalars['JSON']['output']>;
  job_description?: Maybe<Scalars['String']['output']>;
  job_title?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Pages = {
  blocks?: Maybe<Scalars['String']['output']>;
  blocks_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  /** Start with a slash (/page) and do NOT add a trailing slash (/page/) */
  permalink?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Pages_Blog = {
  featured_post?: Maybe<Scalars['JSON']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  seo?: Maybe<Scalars['JSON']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Post_Gallery_Items = {
  directus_files_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  posts_id?: Maybe<Scalars['JSON']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type Version_Posts = {
  author?: Maybe<Scalars['String']['output']>;
  built_with?: Maybe<Scalars['JSON']['output']>;
  categories_post_detail?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  client?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  /** Use a range */
  cost?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_published?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  gallery?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['JSON']['output']>;
  is_visible?: Maybe<Scalars['Boolean']['output']>;
  json_schema?: Maybe<Scalars['JSON']['output']>;
  order_blog?: Maybe<Scalars['Int']['output']>;
  posts_tags?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<Scalars['JSON']['output']>;
  show_top_post?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  /** What type of post is this? Determines the template used to display the post on the frontend. */
  type?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
  video_url?: Maybe<Scalars['String']['output']>;
};

export type Version_Posts_Category_Post_Detail = {
  category_post_detail_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  posts_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Posts_Posts_Tags = {
  id: Scalars['ID']['output'];
  posts_id?: Maybe<Scalars['JSON']['output']>;
  posts_tags_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Posts_Tags = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image_tag?: Maybe<Scalars['JSON']['output']>;
  seo?: Maybe<Scalars['JSON']['output']>;
  slugs?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  tag_name?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Redirects = {
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  response_code?: Maybe<Scalars['Int']['output']>;
  url_new?: Maybe<Scalars['String']['output']>;
  url_old?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Seo = {
  /** Where should the canonical URL for this entry point to. */
  canonical_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** This entries meta description. Max 160 characters. */
  meta_description?: Maybe<Scalars['String']['output']>;
  /** Instruct crawlers not to follow links on this page. */
  no_follow?: Maybe<Scalars['Boolean']['output']>;
  /** Instruct crawlers not to index this entry. */
  no_index?: Maybe<Scalars['Boolean']['output']>;
  /** How often to instruct search engines to crawl. */
  sitemap_change_frequency?: Maybe<Scalars['String']['output']>;
  /** Valid values range from 0.0 to 1.0. This value does not affect how your pages are compared to pages on other sites, it only lets the search engines know which pages you deem most important for the crawlers. */
  sitemap_priority?: Maybe<Scalars['Float']['output']>;
  /** This entries title, defaults to title. Max 70 characters including the site name. */
  title?: Maybe<Scalars['String']['output']>;
};

export type Version_Seo_Section = {
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  is_seo_content_visible?: Maybe<Scalars['Boolean']['output']>;
  keywords?: Maybe<Scalars['JSON']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type Version_Team = {
  bio?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['JSON']['output']>;
  job_title?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Scalars['JSON']['output']>;
  posts_func?: Maybe<Count_Functions>;
  slug?: Maybe<Scalars['String']['output']>;
  social_media?: Maybe<Scalars['JSON']['output']>;
  social_media_func?: Maybe<Count_Functions>;
  sort?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['JSON']['output']>;
  user_updated?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Testimonials = {
  category?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  company_logo?: Maybe<Scalars['JSON']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['JSON']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  order_id?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  star?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Scalars['String']['output']>;
  user_updated?: Maybe<Scalars['String']['output']>;
};

export type GetPostDetailQueryQueryVariables = Exact<{
  filter?: InputMaybe<Posts_Filter>;
}>;


export type GetPostDetailQueryQuery = { posts: Array<{ id: string, slug?: string | null, content?: string | null, title?: string | null, date_created?: string | null, summary?: string | null, is_visible?: boolean | null, order_blog?: number | null, image?: { id: string } | null, category?: { title?: string | null, id: string } | null, author?: { id: string, name?: string | null, slug?: string | null, social_media?: unknown | null, job_title?: string | null, bio?: string | null, image?: { id: string } | null } | null }>, postNew: Array<{ id: string, title?: string | null, slug?: string | null, date_created?: string | null, image?: { id: string } | null }> };

export type GetPostRelatedQueryQueryVariables = Exact<{
  filter?: InputMaybe<Posts_Filter>;
}>;


export type GetPostRelatedQueryQuery = { posts: Array<{ id: string, slug?: string | null, title?: string | null, date_created?: string | null, summary?: string | null, image?: { id: string } | null, category?: { title?: string | null, id: string } | null, author?: { id: string, name?: string | null, bio?: string | null } | null }> };

export type GetListBlogsByAuthorQueryVariables = Exact<{
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetListBlogsByAuthorQuery = { posts: Array<{ id: string, title?: string | null, slug?: string | null, date_created?: string | null, summary?: string | null, image?: { id: string } | null, category?: { title?: string | null, id: string } | null, author?: { id: string, name?: string | null, bio?: string | null } | null }> };

export type CountPostsByAuthorQueryVariables = Exact<{
  filter?: InputMaybe<Posts_Filter>;
}>;


export type CountPostsByAuthorQuery = { posts_aggregated: Array<{ count?: { id?: number | null } | null }> };

export type GetAuthorBySlugQueryVariables = Exact<{
  filter?: InputMaybe<Team_Filter>;
}>;


export type GetAuthorBySlugQuery = { team: Array<{ id: string, bio?: string | null, job_title?: string | null, social_media?: unknown | null, name?: string | null, image?: { id: string } | null }> };

export type GetListBlogsQueryVariables = Exact<{
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetListBlogsQuery = { posts: Array<{ id: string, title?: string | null, slug?: string | null, date_created?: string | null, summary?: string | null, image?: { id: string } | null, category?: { title?: string | null, id: string } | null, author?: { id: string, name?: string | null, bio?: string | null } | null }> };

export type GetListBlogsByCategoriesQueryVariables = Exact<{
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetListBlogsByCategoriesQuery = { posts: Array<{ id: string, title?: string | null, slug?: string | null, date_created?: string | null, summary?: string | null, image?: { id: string } | null, categories_post_detail?: Array<{ id: string, category_post_detail_id?: { id: string, title?: string | null } | null } | null> | null, category?: { title?: string | null, id: string } | null, author?: { id: string, name?: string | null, bio?: string | null } | null }> };

export type CountPostsQueryVariables = Exact<{
  filter?: InputMaybe<Posts_Filter>;
}>;


export type CountPostsQuery = { posts_aggregated: Array<{ count?: { id?: number | null } | null }> };

export type GetListBlogsByCategorySlugQueryVariables = Exact<{
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetListBlogsByCategorySlugQuery = { posts: Array<{ id: string, title?: string | null, slug?: string | null, date_created?: string | null, summary?: string | null, is_visible?: boolean | null, order_blog?: number | null, image?: { id: string } | null, category?: { title?: string | null, id: string } | null, author?: { id: string, name?: string | null, bio?: string | null } | null }> };

export type GetSeoBlogsQueryVariables = Exact<{
  filter?: InputMaybe<Posts_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetSeoBlogsQuery = { posts: Array<{ id: string, title?: string | null, slug?: string | null, date_created?: string | null, summary?: string | null, is_visible?: boolean | null, order_blog?: number | null, image?: { id: string } | null, category?: { title?: string | null, id: string } | null, author?: { id: string, name?: string | null, bio?: string | null } | null }> };

export type GetDataTestimonialsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<Testimonials_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetDataTestimonialsQuery = { testimonials: Array<{ id: string, content?: string | null, title?: string | null, star?: number | null, image?: { id: string } | null, category?: { id: string, title?: string | null } | null }> };

export type CreateFormContactMutationVariables = Exact<{
  data: Create_Contact_Form_Input;
}>;


export type CreateFormContactMutation = { create_contact_form_item?: { id: string } | null };

export type GetListServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListServicesQuery = { categories: Array<{ id: string, title?: string | null, color?: string | null, slug?: string | null }> };

export type GetListBlogsHomeQueryVariables = Exact<{
  filter?: InputMaybe<Posts_Filter>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type GetListBlogsHomeQuery = { posts: Array<{ id: string, slug?: string | null, title?: string | null, date_created?: string | null, summary?: string | null, image?: { id: string } | null, category?: { title?: string | null, id: string } | null, author?: { id: string, name?: string | null, bio?: string | null } | null }> };

export type DataContactFormQueryVariables = Exact<{
  filter?: InputMaybe<Contact_Form_Home_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type DataContactFormQuery = { contact_form_home: Array<{ id: string, name?: string | null, email?: string | null, phone_number?: string | null, description?: string | null, list_link_share?: unknown | null, date_created?: string | null, category?: { id: string, title?: string | null } | null, list_image?: Array<{ id: string, directus_files_id?: { id: string } | null } | null> | null }> };


export const GetPostDetailQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostDetailQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"social_media"}},{"kind":"Field","name":{"kind":"Name","value":"job_title"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"order_blog"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"postNew"},"name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"published","block":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"show_top_post"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"is_visible"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"6"}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"order_blog","block":false},{"kind":"StringValue","value":"-date_created","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}}]}}]}}]} as unknown as DocumentNode<GetPostDetailQueryQuery, GetPostDetailQueryQueryVariables>;
export const GetPostRelatedQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostRelatedQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"4"}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"-date_created","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"}}]}}]}}]} as unknown as DocumentNode<GetPostRelatedQueryQuery, GetPostRelatedQueryQueryVariables>;
export const GetListBlogsByAuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListBlogsByAuthor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_filter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"}}]}}]}}]} as unknown as DocumentNode<GetListBlogsByAuthorQuery, GetListBlogsByAuthorQueryVariables>;
export const CountPostsByAuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CountPostsByAuthor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts_aggregated"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CountPostsByAuthorQuery, CountPostsByAuthorQueryVariables>;
export const GetAuthorBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAuthorBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"team_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"job_title"}},{"kind":"Field","name":{"kind":"Name","value":"social_media"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAuthorBySlugQuery, GetAuthorBySlugQueryVariables>;
export const GetListBlogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListBlogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_filter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"}}]}}]}}]} as unknown as DocumentNode<GetListBlogsQuery, GetListBlogsQueryVariables>;
export const GetListBlogsByCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListBlogsByCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_filter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"categories_post_detail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"category_post_detail_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"}}]}}]}}]} as unknown as DocumentNode<GetListBlogsByCategoriesQuery, GetListBlogsByCategoriesQueryVariables>;
export const CountPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CountPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts_aggregated"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CountPostsQuery, CountPostsQueryVariables>;
export const GetListBlogsByCategorySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListBlogsByCategorySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_filter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"order_blog"}}]}}]}}]} as unknown as DocumentNode<GetListBlogsByCategorySlugQuery, GetListBlogsByCategorySlugQueryVariables>;
export const GetSeoBlogsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSeoBlogs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_filter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"is_visible"}},{"kind":"Field","name":{"kind":"Name","value":"order_blog"}}]}}]}}]} as unknown as DocumentNode<GetSeoBlogsQuery, GetSeoBlogsQueryVariables>;
export const GetDataTestimonialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDataTestimonials"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"testimonials_filter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testimonials"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"star"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetDataTestimonialsQuery, GetDataTestimonialsQueryVariables>;
export const CreateFormContactDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFormContact"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"create_contact_form_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"create_contact_form_item"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateFormContactMutation, CreateFormContactMutationVariables>;
export const GetListServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListServices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetListServicesQuery, GetListServicesQueryVariables>;
export const GetListBlogsHomeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetListBlogsHome"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"posts_filter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"Field","name":{"kind":"Name","value":"summary"}}]}}]}}]} as unknown as DocumentNode<GetListBlogsHomeQuery, GetListBlogsHomeQueryVariables>;
export const DataContactFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DataContactForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"contact_form_home_filter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contact_form_home"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"list_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"directus_files_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"list_link_share"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date_created"}}]}}]}}]} as unknown as DocumentNode<DataContactFormQuery, DataContactFormQueryVariables>;