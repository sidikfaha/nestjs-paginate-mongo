import { clone } from "lodash";
import { Query } from "mongoose";

export interface PaginationOptions {
  perPage?: number;
  page?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  metadata: {
    total: number;
    perPage: number;
    page: number;
    lastPage: number;
  };
}

const defaultOptions: PaginationOptions = { perPage: 10, page: 1 };

/**
 * Paginate a mongoose query result
 * @param query The query you want to paginate
 * @param options Pagination options like page number and/or items per page
 * @returns Paginated query with metadata
 */
export const paginate = async <T>(
  query: Query<any, T>,
  options: PaginationOptions = defaultOptions
): Promise<PaginatedResult<T>> => {
  const _query = clone(query);
  const { perPage = 15, page = 1 } = options;

  const total = await _query.countDocuments().exec();
  const lastPage = Math.ceil(total / perPage!);
  const data = await query
    .limit(perPage!)
    .skip(perPage! * (page! - 1))
    .exec();

  return {
    data,
    metadata: { total, perPage, page, lastPage },
  };
};
