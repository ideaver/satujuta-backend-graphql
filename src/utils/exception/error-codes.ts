export const errorCodes: Record<number, string> = {
  //Auth
  10004: 'Pengguna tidak ditemukan dengan email tersebut',
  10005: 'Password tidak cocok',
  10006: 'Gagal melakukan permintaan reset password. Hubungi Administrator',
  10007:
    'Pengguna dengan email tersebut telah dihapus dari sistem. Gunakan email lain untuk mendaftar',
  //User
  110001: 'Kode referral tidak ditemukan. Harap periksa kembali',
  //Account
  120001: 'Akun tidak ditemukan',
  //WithdrawalRequest
  140001: 'Saldo belum mencukupi untuk melakukan permintaan withdrawal',
  140002: 'Terdapat permintaan withdrawal terdahulu dengan status pending',
  //RewardClaim
  150001:
    'Maaf anda belum memiliki point untuk melakukan claim reward ini. Silahkan kumpulkan point terlebih dahulu',
  150002: 'Maaf Point anda tidak mencukupi untuk melakukan claim reward ini',

  //Prisma
  123456: 'Prisma Error. Segera Lapor Administrator',
  1000: 'Autentikasi gagal terhadap server basis data di {database_host}, kredensial basis data yang diberikan untuk {database_user} tidak valid. Pastikan untuk memberikan kredensial basis data yang valid untuk server basis data di {database_host}.',
  1001: 'Tidak dapat mencapai server basis data di {database_host}:{database_port}. Pastikan server basis data Anda berjalan di {database_host}:{database_port}.',
  1002: 'Server basis data di {database_host}:{database_port} berhasil dicapai tetapi waktu habis. Silakan coba lagi. Pastikan server basis data Anda berjalan di {database_host}:{database_port}.',
  1003: 'Basis data {database_file_name} tidak ada di {database_file_path}.',
  1008: 'Operasi waktu habis setelah {time}.',
  1009: 'Basis data {database_name} sudah ada di server basis data di {database_host}:{database_port}.',
  1010: 'Pengguna {database_user} ditolak akses pada basis data {database_name}.',
  1011: 'Kesalahan saat membuka koneksi TLS: {message}.',
  1012: 'Catatan: Jika Anda mendapatkan kode kesalahan P1012 setelah mengupgrade Prisma ke versi 4.0.0 atau lebih baru, lihat panduan upgrade versi 4.0.0. Skema yang valid sebelum versi 4.0.0 mungkin tidak valid di versi 4.0.0 dan setelahnya. Panduan upgrade menjelaskan cara memperbarui skema Anda agar valid.',
  1013: 'String basis data yang diberikan tidak valid. {details}.',
  1014: '{kind} dasar data untuk model {model} tidak ada.',
  1015: 'Skema Prisma Anda menggunakan fitur yang tidak didukung oleh versi basis data. Versi basis data: {database_version}. Kesalahan: {errors}.',
  1016: 'Permintaan raw query memiliki jumlah parameter yang salah. Diharapkan: {expected}, aktual: {actual}.',
  1017: 'Server telah menutup koneksi.',
  // ... Prisma Client
  2000: 'Nilai yang diberikan untuk kolom terlalu panjang untuk tipe kolom {column_name}.',
  2001: 'record yang dicari dalam kondisi where ({model_name}.{argument_name} = {argument_value}) tidak ada.',
  2002: 'Gagal constraint unik pada {constraint}.',
  2003: 'Gagal constraint foreign key pada kolom: {field_name}.',
  2004: 'Gagal constraint pada basis data: {database_error}.',
  2005: 'Nilai {field_value} yang disimpan dalam basis data untuk kolom {field_name} tidak valid untuk tipe kolom tersebut.',
  2006: 'Nilai yang diberikan {field_value} untuk kolom {field_name} pada model {model_name} tidak valid.',
  2007: 'Kesalahan validasi data {database_error}.',
  2008: 'Gagal mengurai query {query_parsing_error} pada {query_position}.',
  2009: 'Gagal memvalidasi query: {query_validation_error} pada {query_position}.',
  2010: 'Query raw gagal. Kode: {code}. Pesan: {message}.',
  2011: 'Pelanggaran constraint null pada {constraint}.',
  2012: 'Kehilangan nilai yang diperlukan pada {path}.',
  2013: 'Kehilangan argumen yang diperlukan {argument_name} untuk kolom {field_name} pada {object_name}.',
  2014: "Perubahan yang Anda coba buat akan melanggar hubungan yang diperlukan '{relation_name}' antara model {model_a_name} dan {model_b_name}.",
  2015: 'record terkait tidak dapat ditemukan. {details}.',
  2016: 'Kesalahan interpretasi query. {details}.',
  2017: 'record-record untuk hubungan {relation_name} antara model {parent_name} dan {child_name} tidak terhubung.',
  2018: 'record-record yang terhubung yang diperlukan tidak ditemukan. {details}.',
  2019: 'Kesalahan input. {details}.',
  2020: 'Nilai di luar jangkauan untuk tipe. {details}.',
  2021: 'Tabel {table} tidak ada dalam basis data saat ini.',
  2022: 'Kolom {column} tidak ada dalam basis data saat ini.',
  2023: 'Data kolom yang tidak konsisten: {message}.',
  2024: 'Waktu habis saat mengambil koneksi baru dari pool koneksi. (Info lebih lanjut: http://pris.ly/d/connection-pool (Batas waktu pool koneksi saat ini: {timeout}, batas koneksi: {connection_limit}).',
  2025: 'Operasi gagal karena bergantung pada satu atau lebih record yang diperlukan tetapi tidak ditemukan. {cause}.',
  2026: 'Provider basis data saat ini tidak mendukung fitur yang digunakan oleh query: {feature}.',
  2027: 'Beberapa kesalahan terjadi di basis data selama eksekusi query: {errors}.',
  2028: 'Kesalahan API transaksi: {error}.',
  2030: 'Tidak dapat menemukan indeks fulltext untuk digunakan dalam pencarian, coba tambahkan @@fulltext([Fields...]) ke skema Anda.',
  2031: 'Prisma perlu melakukan transaksi, yang memerlukan server MongoDB Anda berjalan sebagai replica set. Lihat detailnya: https://pris.ly/d/mongodb-replica-set.',
  2033: 'Sebuah angka yang digunakan dalam query tidak cocok dengan integer berukuran 64 bit yang ditandatangani. Pertimbangkan penggunaan tipe BigInt jika Anda mencoba menyimpan integer yang besar.',
  2034: 'Transaksi gagal karena konflik tulis atau deadlock. Silakan coba transaksi Anda lagi.',
  3000: 'Gagal membuat basis data: {database_error}.',
  3001: 'Migrasi mungkin dilakukan dengan perubahan yang merusak dan potensi kehilangan data: {migration_engine_destructive_details}.',
  3002: 'Migrasi yang dicoba dirollback: {database_error}.',
  // ... (lanjutan kode kesalahan migrasi)
  4000: 'Operasi introspeksi gagal menghasilkan file skema: {introspection_error}.',
  4001: 'Basis data yang diintrospeksi kosong.',
  4002: 'Skema basis data yang diintrospeksi tidak konsisten: {explanation}.',
  // ... (lanjutan kode kesalahan Prisma db pull)
  5000: 'Permintaan ini tidak dapat dimengerti oleh server.',
  5001: 'Permintaan ini harus diulang.',
  5002: 'Sumber data yang diberikan tidak valid:',
  //S3 & uploader
  160001: 'Gagal Upload File. Silahkan coba lagi',
  160002: 'Harap upload gambar dengan format .jpg, .jpeg, atau .png',
  170001: 'Invalid bucket name in URL',
  170002: 'Invalid URL format for getting file metadata',
  170003: 'Gagal hapus file di storage',
  170004:
    'Ukuran file tidak boleh lebih dari 10 mb untuk gambar, MP4 100 mb, PDF 30 mb',
  170005: 'File tidak didukung',
  170006: 'Gagal membersihkan file di storage yang tidak terpakai',

  //Payment Gateway
  7999: 'Undefined error',
  71044: 'Bill type param is required when creating bill',
  71045: 'Bill type param is invalid when creating bill',
  71046: 'Maximum amount for the bill is Rp10.000.000',
  71047: 'Bill expired date param is invalid when creating bill',
  71048: 'Bill link has already expired',
  71049: 'Bill link has already used',
  71050: 'Bill link ID is not Found',
  71051: 'Param product_code is required',
  71052: 'Param page should be a number and more than 0',
  71053: 'Param pagination should be a number and more than 0',
  71054: 'Product bill link ID is not found',
  71055: 'Param start_date is invalid',
  71056: 'Param end_date is invalid',
  71057: 'Invalid date range. Param end_date must be greater than start_date',
  71058: 'Minimum transfer amount is Rp10.000',
  71059: 'Param redirect_url is invalid',
  71060: 'Param status is invalid',
  71061: 'Param title is invalid',
  71062: 'Param sort_by is invalid',
  71063: 'Param sort_type is invalid',
  71064: 'Param amount must be a number',
  71067: 'Param amount is exceeding company’s PWF maximum limit amount',
  71001: 'The related attribute should not be empty',
  71002: `Value for the related attribute is considered not clean. Things that considered as not clean is html tag and ?, #, $, ' (single quote), " (double quote), and ; character`,
  71020: 'The related attribute can only contain number',
  71021: 'Transfer amount are less than the minimum amount (Rp10.000)',
  71022: 'Transfer amount are more than the maximum amount',
  71024: 'Max char for the related attribute exceeded',
  71025: 'Invalid bank account number or possibly a virtual account number',
  71026:
    'The recipient bank account is suspected with fraud. You can’t send money to this account',
  71027: 'The account number is closed',
  71032: 'Pagination should be a number more than 0',
  71033: 'Invalid bank code',
  71034: 'Country is invalid. Please see available country code',
  71035: 'Your balance is insufficient for doing this transaction',
  71038:
    'Country/city code is not valid. The difference with 1037 code is: 1037 will occur if the attribute only allows country code while this code will occur if the attribute allows country or city code.',
  71039: 'Date format is invalid',
  71040: 'Date is invalid',
  71041: 'Attribute is invalid',
  71043: 'Bill title param is required when creating bill',
  71070: 'Max Beneficiary Email 20',
  71071: 'Invalid Beneficiary Email value',
  71072: 'Disbursement ID not found',
  71073: 'Disbursement Idempotency Key not found',
  71074: 'Daily limit transaction exceeded',
  71080:
    'You have reached the maximum limit of active transactions. Please complete your previous transactions.',
  71088: 'The beneficiary bank is in severe disturbance',
  71089: `The account number is Flip’s. You can’t send money to Flip account`,
  71090: 'Agent KYC status is not approved',
  71091: 'Agent status is not active',
  71092: 'Agent is not allowed to update',
  71093:
    'Cannot process transaction because bank is in cut off time. Try again later',
  71094:
    'The sent request/transaction is marked as stale request (more than 1 minute than the server time)',
  71095: 'X-TIMESTAMP format is invalid. It should follow the ISO8601 format',
  72001:
    'The related attribute should contain [at least or at most] [number] of characters',
  72002: 'The related attribute is duplicated',
  72003:
    'The related attribute is considered not clean. Only letters (a-z), numbers (0-9), spaces ( ), periods (.), commas (,), apostrophes (‘), and dashes (-) are allowed',
  72004: 'The related attribute contains non-alphanumeric characters',
  72005:
    'Transfer amount are less than the minimum amount set by the respective Bank',
};
