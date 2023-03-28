export const formatPrice = (price) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    price / 100
  );

export const deleteDuplicates = (products, property) => {
  let allPropsSet = new Set();
  products.forEach((el) => {
    allPropsSet.add(...el[property]);
  });

  return ["all", ...allPropsSet];
};

export const generateFilters = (products, company, category, color) => {
  let { procompanies, procategories, procolors } = products.reduce(
    (prev, c) => {
      prev.procompanies.add(c[company]);
      prev.procolors.add(...c[color]);
      prev.procategories.add(c[category]);

      // console.log(p);
      return prev;
    },

    {
      procompanies: new Set(),
      procategories: new Set(),
      procolors: new Set(),
    }
  );
  let [companies, categories, colors] = [
    ["all", ...procompanies],
    ["all", ...procategories],
    ["all", ...procolors],
  ];

  return { companies, categories, colors };
};

export const generate = (products, company, category) => {
  let { companies, categories } = products.reduce(
    (p, c) => {
      p.companies.push(c.company);
      p.categor;
    },
    {
      companies: new Set(),
      categories: new Set(),
    }
  );
};

export const isMAtched = (index1, index2) => {
  return index1 === index2;
};
