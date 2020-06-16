
export const convertToImageName = (movieName) => {
  return movieName.toLowerCase().split(` `).join(`-`).split(`:`).join(``);
};

