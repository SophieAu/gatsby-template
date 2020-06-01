const SITE_TITLE = 'Gatsby Template';
export const buildPageTitle = (title: string) => `${title} | ${SITE_TITLE}`;

export const home = {
  pageTitle: SITE_TITLE,
  pageDescription: '',
};

export const notFound = {
  pageTitle: buildPageTitle('404'),
  pageDescription: '',
};
