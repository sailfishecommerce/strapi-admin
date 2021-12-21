module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f9d841ebf543bf9296806293fcaaaee4'),
  },
});
