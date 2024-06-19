const pagination = (page, pagesCount, oldPages) => {
  const pages = [...oldPages];
  switch (page) {
    case 1:
    case 2:
    case 3: {
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push("...");
      pages.push(pagesCount);
      break;
    }
    case pagesCount:
    case pagesCount - 1:
    case pagesCount - 2: {
      pages.push(1);
      pages.push("...");
      for (let i = page - 5; i <= page; i++) pages.push(i);
      break;
    }
    default: {
      pages.push(1);
      pages.push("...");
      for (let i = page - 2; i <= page + 2; i++) pages.push(i);
      pages.push("...");
      pages.push(pagesCount);
      break;
    }
  }
  return pages;
};
export default pagination;
