export const paginator = (totolItems: number, page: number, limit: number) => {
  let offset;
  let pages;
  if (!page || Number.isNaN(page)) {
    page = 1;
  }

  if (!limit || Number.isNaN(limit)) {
    limit = 8;
  }

  if (page < 1) {
    page = 1;
  }

  if (!totolItems) {
    offset = 0;
    pages = 0;
    return { offset, limit, pages };
  }

  pages = Math.ceil(totolItems / limit);
  if (page > pages) {
    page = pages;
  }

  offset = (page - 1) * limit;

  return { offset, pages, limit };
};
