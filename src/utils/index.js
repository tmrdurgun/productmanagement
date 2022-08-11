export const generateId = () => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let id = '';
  for (let i = 14; i > 0; --i) { id += chars[Math.floor(Math.random() * chars.length)]; }
  return id;
};