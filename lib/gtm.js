
export const GTM_ID = 'GTM-XXXXXXX'; 

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.dataLayer.push({
    event: action,
    category,
    label,
    value,
  });
};
