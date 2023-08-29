export const errorCodes: Record<number, string> = {
  //Auth
  10004: 'Pengguna tidak ditemukan dengan email tersebut',
  10005: 'Password tidak cocok',
  //WithdrawalRequest
  140001: 'Saldo belum mencukupi untuk melakukan permintaan withdrawal',
  140002: 'Terdapat permintaan withdrawal terdahulu dengan status pending',
  //RewardClaim
  150001:
    'Maaf anda belum memiliki point untuk melakukan claim reward ini. Silahkan kumpulkan point terlebih dahulu',
  150002: 'Maaf Point anda tidak mencukupi untuk melakukan claim reward ini',
  // Add more error descriptions here
};
