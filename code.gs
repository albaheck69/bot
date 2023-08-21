/**********************************************************
 * Simpan ke file Code.gs
 * FIRST ENCOUNTER GOOGLE APPS SCRIPT DENGAN BOT TELEGRAM *
 * https://telegram-bot-script.blogspot.com/2021/09/telegram-bot-dengan-google-apps-script-the-first-encounter.html
***********************************************************/
const telegramAPIToken = "6528404553:AAFjMFUzr3SQPki_ZdfVTLmGZAERh9-S_cU";
const telegramAPIURL = "https://api.telegram.org/bot" + telegramAPIToken;
const googleWebAppsURL = "GANTI_DENGAN_URL_WEB_APPS_ANDA";

/********************************************************************
 * Fungsi buatan untuk meminta info tentang bot dengan metode getMe *
 * Respon dari Telegram ditampilkan dalam layar Logger Apps Script
*********************************************************************/
const getMe = () => {
  let url = telegramAPIURL + "/getMe";
  let response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

/*************************************************************************************
 * Fungsi buatan untuk membangun koneksi webhook Google Web Apps dengan Telegram API *
 * Respon dari Telegram ditampilkan dalam layar Logger Apps Script
**************************************************************************************/
const setWebhook = () => {
  let url = telegramAPIURL + "/setWebhook?url=" + googleWebAppsURL;
  let response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

/***********************************
 * Fungsi buatan menghapus webhook *
************************************/
const deleteWebhook = () => {
  let url = telegramAPIURL + "/deleteWebhook";
  let response = UrlFetchApp.fetch( url );
  Logger.log( response.getContentText() );
}
