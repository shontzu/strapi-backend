module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a5feb42ca2a446e0a371d091a10743f5'),
  },
});
