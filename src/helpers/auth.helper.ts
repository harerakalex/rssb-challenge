import jwt from 'jsonwebtoken';

export const generateToken = () => {
  return jwt.sign(
    {
      id: 1,
      appName: 'RSSB',
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '30d' },
  );
};
