
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

eleventyConfig.addShortcode("test", function(bop) {
  return `
    <p>test ${bop}</p>
`;
});

};