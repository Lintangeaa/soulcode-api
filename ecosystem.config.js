module.exports = {
  apps: [
    {
      name: 'soulcode-api', // Nama aplikasi kamu
      script: './index.js', // Path ke file utama aplikasi kamu
      instances: 1, // Jumlah instance (set ke 'max' untuk memanfaatkan jumlah core CPU)
      autorestart: true, // Mengatur aplikasi untuk restart otomatis jika crash
      watch: false, // Mengaktifkan pemantauan file untuk restart aplikasi otomatis (set ke true untuk memantau perubahan file)
      max_memory_restart: '1G', // Restart aplikasi jika menggunakan lebih dari 1GB memory
      env: {
        NODE_ENV: 'development', // Environment variable untuk environment development
      },
      env_production: {
        NODE_ENV: 'production', // Environment variable untuk production
      },
    },
  ],
};
