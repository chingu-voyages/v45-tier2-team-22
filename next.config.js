/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three', 'gsap'],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });

    return config;
  },
  typescript: {
    ignoreBuildErrors: true, //Vercel will build with typescript errors
  }
};

module.exports = nextConfig;
