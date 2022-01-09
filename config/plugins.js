module.exports = ({ env }) => {
  console.log("module env", env, env("CLOUDINARY_NAME"), env("CLOUDINARY_KEY"));
  return {
    upload: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  };
};
