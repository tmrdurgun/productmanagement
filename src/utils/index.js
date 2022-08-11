export const generateId = () => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let id = '';
  for (let i = 14; i > 0; --i) { id += chars[Math.floor(Math.random() * chars.length)]; }
  return id;
};

export const dateToStr = (date) => new Date(date).toLocaleDateString([], { day: '2-digit', year: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });