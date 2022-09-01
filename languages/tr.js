const language = {
loadevent: "Yüklenen player eventi",
loadcmd: "Yüklenen komut",
ready: " başarıyla bağlandı.",
loadslash: "Uygulama [/] komutları başarıyla yeniden yüklendi.",
error1: "Projenize Girdiğiniz Bot Tokeni Yanlış Veya Botunuzun İNTENTLERİ KAPALI!",
error2: "Lütfen projenizdeki bot tokeninizi config.js veya .env dosyanızda ayarlayın!",
loadclientevent: "Yüklenen client eventi",
embed1: "Bu komutu kullanmak için bu sunucuda <@&{djRole}>(DJ) rolünün ayarlanmış olması gerekir. Bu role sahip olmayan kullanıcılar {cmdMAP}'ı kullanamaz",
message1: "Bir ses kanalına bağlı değilsiniz. ❌",
message2: "Benimle aynı ses kanalında değilsiniz. ❌",
message3: "Yetersiz yetki",
msg4: "Bir şeyler ters gitti",
msg5: "Şu anda çalan müzik yok. ❌",
msg6: "Müziki Kaydet",
msg7: "Palylist adını yaz.",
msg8: "Bu şarkı canlı yayın, görüntülenecek süre verisi yok. 🎧",
msg9: "**✅ Başarılı:** veriler güncellendi.",
msg10: "Bu ada sahip bir oynatma listeniz zaten yok. ❌",
msg11: "Bu müzik zaten bu oynatma listesinde var. ❌",
msg12: "müzik çalma listenize eklendi.",
error3: "Uygulama [/] komutları yeniden yüklenirken hata oluştu: ",
error4: "UYARI: Görünüşe göre mongodb url'sini yazmamışsınız? Sorun değil, ancak mongodb url'sini eklemezseniz bazı komutları kullanamazsınız!",
error5: `NOT: EĞER BOT ÇALIŞIYOR KOMUTLARA CEVAP VERİYOR ANCAK SES GELMİYOR İSE ŞU ADIMLARI UYGULAYIN:
replit.com'da açtığınız projenizin sayfasına girin.
sağ altta açılan kutunun üstünde yer alan console ve shell yazan kutucuklardan shell yazana tıklayın.
npm uni discord-player yazın
npm i discord-player@5.3.0-dev.2 yazın
npm uni ytdl-core yazın
npm i ytdl-core@4.10.0 yazın
replit ekranının ortasında bulunan "Stop" yada "Run" yazan butondan botu kapatıp, açın.`,
msg13: `🎵 Şuanda çalan: **{track?.title}** -> Kanal: **{queue?.connection.channel.name}** 🎧`,
msg14: "Kuyruk boş. Biraz daha müzik çalabilirsin, hoşçakal... ✅",
msg15: "Kanalımda kimse kalmadığı için bağlantıyı kestim. ❌",
msg16: "Ses kanalına bağlanmada sorun yaşıyorum. ❌Birinin bağlantımı kesmiş gibi? Çok üzgünüm. 😔",
msg17: "Önceki parça yok! ❌",
msg18: "Şuanda çalan **{queue.previousTracks[1].title}**. ✅",
msg19: " Bot İstatistikleri",
msg20: "Yenile",
msg21: "**Süreniz Doldu!**",
msg22: "**✅ Veriler Gündellendi!**",
msg23: "Çalma kuyruğu boş. ❌",
msg24: "Bütün çalma listesi temizlendi. 🗑️",
error6: "Bu komutu kullanabilmek için lütfen mongodbURL'yi config.js dosyasında ayarlayın.",
msg26: "Bir DJ rolü belirtmezseniz, komutu kullanamazsınız!",
msg25: "DJ rolü başarıyla <@&{role}> olarak ayarlandı.",
msg27: "DJ rolü başarıyla silindi.",
msg28: "DJ rolü henüz belirlenmedi.",
msg29: `Lütfen geçerli bir filtre adı girin. ❌\n\`bassboost, 8D, nightcore, mono, karaoke\``,
msg30: `Lütfen geçerli bir filtre adı girin. ❌\n\`bassboost, 8D, nightcore, mono, karaoke\``,
msg31: `Uygulandı: **{filter}**, Filtre Durumu: **{status}**\n **Unutmayın, müzik uzunsa filtre uygulama süresi buna göre daha uzun olabilir.**`,
msg32: "Tamamen ücretsiz ve gelişmiş bir arayüz ile discord sunucunuzda müzik dinlemenin tam zamanı. Sunucunuzu özel hissettirecek birçok platformda müzik çalmayı destekleyen müzik botu. Kendi müzik botunuzu oluşturun: https://github.com/umutxyp/MusicBot",
msg33: "Bot Komutları",
msg34: "Burada zaten aktif bir komutunuz var. ❌",
msg35: "Kuyruk",
msg36: "Şuan Çalan Müzik",
msg37: "Döngüyü Kapat",
msg38: "Tekrarlama Modu",
msg39: `> **Bir seçim yapmaya ne dersiniz?**
> **Kuyruk:** Kuyruğu döngüye sokar.
> **Şuan Çalan Müzik:** Geçerli şarkıyı döngüye alır.
> **Döngüyü Kapat:** Tekrarlama modunu kapatır.`,
msg40: "Kuyruk Döngü Modu",
msg41: "Bir şeyler yanlış gitti. ❌",
msg42: "Şuan Çalınan Müzik Döngü Modu",
msg43: "Döngü modu zaten etkin değil. ❌",
msg44: `Döngü Modu **Kapalı** 🔁`,
msg45: "Süre doldu",
msg46: "Döngü Modu - Bitti",
msg47: 'Playliste Kaydet',
msg48: "müzik durduruldu! ✅",
msg49: `Mesaj Hızı`,
msg50: `Mesaj Yanıt Hızı`,
msg51: `API Yanıt Hızı`,
msg52: `Oynatma listesi yok. ❌`,
msg53: `Bu oynatma listesini oynatma izniniz yok. ❌`,
msg54: `Zaten bu ada oynatma listesinde müzik yok. ❌`,
msg55: `Ses kanalınıza katılamıyorum. ❌`,
msg56: `Playlist yükleniyor... ✅`,
msg57: `<@{interaction.member.id}>, **{music_filter.length}** müzik kuruğa eklendi. ✅`,
msg58: `Bu ada sahip bir oynatma listesi yok. ❌`,
msg59: `Aramak istediğiniz parçanın adını yazın. ❌`,
msg60: `Arama sonucu bulunamadı! ❌`,
msg61: "isimli liste playliste eklendi. ✅",
msg62: "kuruğa eklendi ✅",
msg63: `Kuruk boş. ❌`,
msg64: "Sunucu Müzik Listesi",
msg65: "Şuanda çalan müzik",
msg66: "İsteyen",
msg67: "Sayfa",
msg68: `Komut iptal edildi. ✅`,
msg69: `Sunucu Müzik Listesi - Süre Doldu`,
msg70: `Bu komutu kullanmak için süreniz doldu, komutu tekrar kullanmak için \`/queue\` yazabilirsiniz.`,
msg71: `Bir şeyler yanlış gitti. ❌ Daha önce müziği durdurmamış gibisin.`,
msg72: "Müzik devam ediyor! ✅",
msg73: `Lütfen geçerli bir şarkı adı girin. ❌`,
msg74: `Arama Sonucu Bulunamadı! ❌`,
msg75: "Aranan Müzik",
msg76: "**1** ile **{maxTracks.length}** arasında bir şarkı seçin ⬇️",
msg77: `Müzik arama isteği iptal edildi. ✅`,
msg78: `Yükleniyor... 🎧`,
msg79: "kuruğa eklendi. ✅",
msg80: `Şarkı arama süresi doldu ❌`,
msg81: "İptal",
msg82: `The number you entered is higher than the amount of songs in the queue. ❌`,
msg83: "Müzik geçildi ✅",
msg84: `Bu şarkı canlı yayın, görüntülenecek süre verisi yok. 🎧`,
msg85: `Müzik kapatıldı. Daha sonra görüşürüz. ✅`,
msg86: "Güncelle",
msg87: `Şuanki Ses Düzeyi: **{queue.volume}** 🔊\n**Sesi değiştirmek için \`1\` ile \`{maxVol}\` arasında bir sayı yazın.**`,
msg88: `Değiştirmek istediğiniz ses seviyesi zaten mevcut ses seviyesi ile aynı ❌`,
msg89: `**Sesi değiştirmek için \`1\` ile \`{maxVol}\` arasında bir sayı yazın.** ❌`,
msg90: "Yeni ses düzeyi:",
msg91: `Oluşturmak istediğiniz çalma listesinin adını yazın. ❌`,
msg92: `Bu ada sahip bir oynatma listesi zaten var. ❌`, 
msg93: `30'dan fazla oynatma listeniz olamaz. ❌`,
msg94: "Oynatma listesi oluşturuluyor... 🎧",
msg95: "Oynatma listesi oluşturuldu! 🎧",
msg96: `Bu ada sahip bir oynatma listeniz zaten yok. ❌`,
msg97: "Oynatma listesi siliniyor... 🎧",
msg98: "Oynatma listesi silindi! 🎧",
msg99: `Aramak istediğiniz parçanın adını yazın. ❌`,
msg100: `Müziği eklemek istediğiniz çalma listesinin adını yazın. ❌`,
msg101: `Bir oynatma listesinde en fazla {max_music} müzik bulunabilir. ❌`,
msg102: "Müzik(ler) yükleniyor... 🎧",
msg103: "Tüm müzikler çalma listenize eklendi! 🎧",
msg104: `Bu müzik zaten bu oynatma listesinde var. ❌`,
msg105: "oynatma listesine eklendi! 🎧",
msg106: `Müziği silmek istediğiniz çalma listesinin adını yazın. ❌`,
msg107: `Zaten bu ada sahip bir müziğiniz yok. ❌`,
msg108: "Müzik siliniyor... 🎧",
msg109: "Müzik silindi. 🎧",
msg110: "Aramak istediğiniz çalma listesinin adını yazın. ❌",
msg111: `Bu oynatma listesinde hiç müziğiniz yok. ❌`,
msg112: "En İyi Herkese Açık Oynatma Listeleri",
msg113: `Bu komutu kullanmak için süreniz doldu, komutu tekrar kullanmak için \`/playlist top\` yazabilirsiniz.`,
msg114: `Hiç herkese açık oynatma listesi yok. ❌`,
msg115: "Senin Oynatma Listelerin",
msg116: `müzik`,
msg117: `Herhangi bir oynatma listeniz yok. ❌`,
msg118: "Bu komutu kullanmak için süreniz doldu, komutu tekrar kullanmak için \`/playlist list {name}\` yazabilirsiniz."
}
module.exports = language;