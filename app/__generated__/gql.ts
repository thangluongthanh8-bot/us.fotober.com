/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query GetPostDetailQuery($filter: posts_filter) {\n    posts(filter: $filter) {\n      id\n      slug\n      content\n      title\n      image {\n        id\n      }\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        image {\n          id\n        }\n        slug\n        social_media\n        job_title\n        bio\n      }\n      summary\n      is_visible\n      order_blog\n    }\n    postNew: posts(\n      filter: { status: { _eq: \"published\" }, show_top_post: { _eq: true }, is_visible: { _eq: true } }\n      limit: 6\n      sort: [\"order_blog\", \"-date_created\"]\n    ) {\n      id\n      title\n      slug\n      image {\n        id\n      }\n      date_created\n    }\n  }\n": types.GetPostDetailQueryDocument,
    "\n  query GetPostRelatedQuery($filter: posts_filter) {\n    posts(filter: $filter, limit: 4, sort: [\"-date_created\"]) {\n      id\n      slug\n      title\n      image {\n        id\n      }\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n    }\n  }\n": types.GetPostRelatedQueryDocument,
    "\n  query GetListBlogsByAuthor($filter: posts_filter, $limit: Int, $page: Int, $sort: [String]) {\n    posts(filter: $filter, limit: $limit, page: $page, sort: $sort) {\n      id\n      title\n      image {\n        id\n      }\n      slug\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n    }\n  }\n": types.GetListBlogsByAuthorDocument,
    "\n  query CountPostsByAuthor($filter: posts_filter) {\n    posts_aggregated(filter: $filter) {\n      count {\n        id\n      }\n    }\n  }\n": types.CountPostsByAuthorDocument,
    "\n  query GetAuthorBySlug($filter: team_filter) {\n    team(filter: $filter) {\n      id\n      image {\n        id\n      }\n      bio\n      job_title\n      social_media\n      name\n    }\n  }\n": types.GetAuthorBySlugDocument,
    "\n  query GetListBlogs($filter: posts_filter, $limit: Int, $page: Int, $sort: [String]) {\n    posts(filter: $filter, limit: $limit, page: $page, sort: $sort) {\n      id\n      title\n      image {\n        id\n      }\n      slug\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n    }\n  }\n": types.GetListBlogsDocument,
    "\n  query GetListBlogsByCategories($filter: posts_filter, $limit: Int, $page: Int, $sort: [String]) {\n    posts(filter: $filter, limit: $limit, page: $page, sort: $sort) {\n      id\n      title\n      image {\n        id\n      }\n      slug\n      categories_post_detail {\n        id\n        category_post_detail_id {\n          id\n          title\n        }\n      }\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n    }\n  }\n": types.GetListBlogsByCategoriesDocument,
    "\n  query CountPosts($filter: posts_filter) {\n    posts_aggregated(filter: $filter) {\n      count {\n        id\n      }\n    }\n  }\n": types.CountPostsDocument,
    "\n  query GetListBlogsByCategorySlug($filter: posts_filter, $limit: Int, $page: Int, $sort: [String]) {\n    posts(filter: $filter, limit: $limit, page: $page, sort: $sort) {\n      id\n      title\n      image {\n        id\n      }\n      slug\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n      is_visible\n      order_blog\n    }\n  }\n": types.GetListBlogsByCategorySlugDocument,
    "\n  query GetSeoBlogs($filter: posts_filter, $sort: [String]) {\n    posts(filter: $filter, sort: $sort) {\n      id\n      title\n      image {\n        id\n      }\n      slug\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n      is_visible\n      order_blog\n    }\n  }\n": types.GetSeoBlogsDocument,
    "\n  query GetDataTestimonials($limit: Int, $filter: testimonials_filter, $sort: [String]) {\n    testimonials(filter: $filter, limit: $limit, sort: $sort) {\n      id\n      content\n      title\n      star\n      image {\n        id\n      }\n      category {\n        id\n        title\n      }\n    }\n  }\n": types.GetDataTestimonialsDocument,
    "\n  mutation CreateFormContact($data: create_contact_form_input!) {\n    create_contact_form_item(data: $data) {\n      id\n    }\n  }\n": types.CreateFormContactDocument,
    "\n  query GetListServices {\n    categories {\n      id\n      title\n      color\n      slug\n    }\n  }\n": types.GetListServicesDocument,
    "\n  query GetListBlogsHome($filter: posts_filter, $sort: [String]) {\n    posts(filter: $filter, sort: $sort) {\n      id\n      slug\n      title\n      image {\n        id\n      }\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n    }\n  }\n": types.GetListBlogsHomeDocument,
    "\n  query DataContactForm(\n    $filter: contact_form_home_filter\n    $limit: Int\n    $page: Int\n    $sort: [String]\n  ) {\n    contact_form_home(filter: $filter, limit: $limit, page: $page, sort: $sort) {\n      id\n      name\n      email\n      phone_number\n      category {\n        id\n        title\n      }\n      description\n      list_image {\n        id\n        directus_files_id {\n          id\n        }\n      }\n      list_link_share\n      category {\n        title\n        id\n      }\n      date_created\n    }\n  }\n": types.DataContactFormDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPostDetailQuery($filter: posts_filter) {\n    posts(filter: $filter) {\n      id\n      slug\n      content\n      title\n      image {\n        id\n      }\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        image {\n          id\n        }\n        slug\n        social_media\n        job_title\n        bio\n      }\n      summary\n      is_visible\n      order_blog\n    }\n    postNew: posts(\n      filter: { status: { _eq: \"published\" }, show_top_post: { _eq: true }, is_visible: { _eq: true } }\n      limit: 6\n      sort: [\"order_blog\", \"-date_created\"]\n    ) {\n      id\n      title\n      slug\n      image {\n        id\n      }\n      date_created\n    }\n  }\n"): (typeof documents)["\n  query GetPostDetailQuery($filter: posts_filter) {\n    posts(filter: $filter) {\n      id\n      slug\n      content\n      title\n      image {\n        id\n      }\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        image {\n          id\n        }\n        slug\n        social_media\n        job_title\n        bio\n      }\n      summary\n      is_visible\n      order_blog\n    }\n    postNew: posts(\n      filter: { status: { _eq: \"published\" }, show_top_post: { _eq: true }, is_visible: { _eq: true } }\n      limit: 6\n      sort: [\"order_blog\", \"-date_created\"]\n    ) {\n      id\n      title\n      slug\n      image {\n        id\n      }\n      date_created\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPostRelatedQuery($filter: posts_filter) {\n    posts(filter: $filter, limit: 4, sort: [\"-date_created\"]) {\n      id\n      slug\n      title\n      image {\n        id\n      }\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n    }\n  }\n"): (typeof documents)["\n  query GetPostRelatedQuery($filter: posts_filter) {\n    posts(filter: $filter, limit: 4, sort: [\"-date_created\"]) {\n      id\n      slug\n      title\n      image {\n        id\n      }\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetListBlogsByAuthor($filter: posts_filter, $limit: Int, $page: Int, $sort: [String]) {\n    posts(filter: $filter, limit: $limit, page: $page, sort: $sort) {\n      id\n      title\n      image {\n        id\n      }\n      slug\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n    }\n  }\n"): (typeof documents)["\n  query GetListBlogsByAuthor($filter: posts_filter, $limit: Int, $page: Int, $sort: [String]) {\n    posts(filter: $filter, limit: $limit, page: $page, sort: $sort) {\n      id\n      title\n      image {\n        id\n      }\n      slug\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CountPostsByAuthor($filter: posts_filter) {\n    posts_aggregated(filter: $filter) {\n      count {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query CountPostsByAuthor($filter: posts_filter) {\n    posts_aggregated(filter: $filter) {\n      count {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAuthorBySlug($filter: team_filter) {\n    team(filter: $filter) {\n      id\n      image {\n        id\n      }\n      bio\n      job_title\n      social_media\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetAuthorBySlug($filter: team_filter) {\n    team(filter: $filter) {\n      id\n      image {\n        id\n      }\n      bio\n      job_title\n      social_media\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetListBlogs($filter: posts_filter, $limit: Int, $page: Int, $sort: [String]) {\n    posts(filter: $filter, limit: $limit, page: $page, sort: $sort) {\n      id\n      title\n      image {\n        id\n      }\n      slug\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n    }\n  }\n"): (typeof documents)["\n  query GetListBlogs($filter: posts_filter, $limit: Int, $page: Int, $sort: [String]) {\n    posts(filter: $filter, limit: $limit, page: $page, sort: $sort) {\n      id\n      title\n      image {\n        id\n      }\n      slug\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetListBlogsByCategories($filter: posts_filter, $limit: Int, $page: Int, $sort: [String]) {\n    posts(filter: $filter, limit: $limit, page: $page, sort: $sort) {\n      id\n      title\n      image {\n        id\n      }\n      slug\n      categories_post_detail {\n        id\n        category_post_detail_id {\n          id\n          title\n        }\n      }\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n    }\n  }\n"): (typeof documents)["\n  query GetListBlogsByCategories($filter: posts_filter, $limit: Int, $page: Int, $sort: [String]) {\n    posts(filter: $filter, limit: $limit, page: $page, sort: $sort) {\n      id\n      title\n      image {\n        id\n      }\n      slug\n      categories_post_detail {\n        id\n        category_post_detail_id {\n          id\n          title\n        }\n      }\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CountPosts($filter: posts_filter) {\n    posts_aggregated(filter: $filter) {\n      count {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query CountPosts($filter: posts_filter) {\n    posts_aggregated(filter: $filter) {\n      count {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetListBlogsByCategorySlug($filter: posts_filter, $limit: Int, $page: Int, $sort: [String]) {\n    posts(filter: $filter, limit: $limit, page: $page, sort: $sort) {\n      id\n      title\n      image {\n        id\n      }\n      slug\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n      is_visible\n      order_blog\n    }\n  }\n"): (typeof documents)["\n  query GetListBlogsByCategorySlug($filter: posts_filter, $limit: Int, $page: Int, $sort: [String]) {\n    posts(filter: $filter, limit: $limit, page: $page, sort: $sort) {\n      id\n      title\n      image {\n        id\n      }\n      slug\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n      is_visible\n      order_blog\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSeoBlogs($filter: posts_filter, $sort: [String]) {\n    posts(filter: $filter, sort: $sort) {\n      id\n      title\n      image {\n        id\n      }\n      slug\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n      is_visible\n      order_blog\n    }\n  }\n"): (typeof documents)["\n  query GetSeoBlogs($filter: posts_filter, $sort: [String]) {\n    posts(filter: $filter, sort: $sort) {\n      id\n      title\n      image {\n        id\n      }\n      slug\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n      is_visible\n      order_blog\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetDataTestimonials($limit: Int, $filter: testimonials_filter, $sort: [String]) {\n    testimonials(filter: $filter, limit: $limit, sort: $sort) {\n      id\n      content\n      title\n      star\n      image {\n        id\n      }\n      category {\n        id\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetDataTestimonials($limit: Int, $filter: testimonials_filter, $sort: [String]) {\n    testimonials(filter: $filter, limit: $limit, sort: $sort) {\n      id\n      content\n      title\n      star\n      image {\n        id\n      }\n      category {\n        id\n        title\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateFormContact($data: create_contact_form_input!) {\n    create_contact_form_item(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateFormContact($data: create_contact_form_input!) {\n    create_contact_form_item(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetListServices {\n    categories {\n      id\n      title\n      color\n      slug\n    }\n  }\n"): (typeof documents)["\n  query GetListServices {\n    categories {\n      id\n      title\n      color\n      slug\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetListBlogsHome($filter: posts_filter, $sort: [String]) {\n    posts(filter: $filter, sort: $sort) {\n      id\n      slug\n      title\n      image {\n        id\n      }\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n    }\n  }\n"): (typeof documents)["\n  query GetListBlogsHome($filter: posts_filter, $sort: [String]) {\n    posts(filter: $filter, sort: $sort) {\n      id\n      slug\n      title\n      image {\n        id\n      }\n      category {\n        title\n        id\n      }\n      date_created\n      author {\n        id\n        name\n        bio\n      }\n      summary\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query DataContactForm(\n    $filter: contact_form_home_filter\n    $limit: Int\n    $page: Int\n    $sort: [String]\n  ) {\n    contact_form_home(filter: $filter, limit: $limit, page: $page, sort: $sort) {\n      id\n      name\n      email\n      phone_number\n      category {\n        id\n        title\n      }\n      description\n      list_image {\n        id\n        directus_files_id {\n          id\n        }\n      }\n      list_link_share\n      category {\n        title\n        id\n      }\n      date_created\n    }\n  }\n"): (typeof documents)["\n  query DataContactForm(\n    $filter: contact_form_home_filter\n    $limit: Int\n    $page: Int\n    $sort: [String]\n  ) {\n    contact_form_home(filter: $filter, limit: $limit, page: $page, sort: $sort) {\n      id\n      name\n      email\n      phone_number\n      category {\n        id\n        title\n      }\n      description\n      list_image {\n        id\n        directus_files_id {\n          id\n        }\n      }\n      list_link_share\n      category {\n        title\n        id\n      }\n      date_created\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;