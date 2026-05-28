export const retrieveProducts = async (query) => {

  const products = [
    "Murukku spicy crispy",
    "Banana chips travel snack",
    "Mixture tea snack"
  ];

  return products.filter(item =>
    item.toLowerCase()
      .includes(query.toLowerCase())
  );
};