const fs = require('fs');
try {
  fs.copyFileSync('C:\\Users\\hd066\\Downloads\\image_20260608.jpg', 'c:\\Users\\hd066\\OneDrive\\Documents\\shoes-wale\\public\\hero-shoe-new.png');
  console.log('SUCCESS');
} catch (e) {
  console.error('ERROR:', e.message);
}
