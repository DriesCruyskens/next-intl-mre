const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./next-intl.ts"
);

/** @returns {Promise<import('next').NextConfig>} */
module.exports = async () => {
  return withNextIntl({
    experimental: { appDir: true },
    // Other Next.js configuration ...
  });
};
