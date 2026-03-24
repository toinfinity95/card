const copyBtn = document.getElementById("copyBtn");
const avatarTrigger = document.getElementById("avatarTrigger");
const voicePreview = document.getElementById("voicePreview");
const qrImage = document.getElementById("qrImage");
const cardUrl = document.getElementById("cardUrl");

const PUBLIC_CARD_URL = "https://toinfinity95.github.io/card/";
const shareUrl = PUBLIC_CARD_URL || window.location.href;
const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(shareUrl)}`;

if (qrImage && cardUrl) {
  qrImage.src = qrApiUrl;
  cardUrl.href = shareUrl;
  cardUrl.textContent = shareUrl;
}

if (avatarTrigger && voicePreview) {
  avatarTrigger.addEventListener("click", async () => {
    try {
      voicePreview.currentTime = 0;
      await voicePreview.play();
    } catch (error) {
      // Autoplay restrictions can block play in some browsers.
      console.error("Audio play failed:", error);
    }
  });
}

if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const contactText =
      "1등분석가 | jiyo9515@gmail.com | 010-0000-0000 | Instagram: @datawizard.lab";

    try {
      await navigator.clipboard.writeText(contactText);
      copyBtn.textContent = "복사 완료!";
      setTimeout(() => {
        copyBtn.textContent = "연락처 복사하기";
      }, 1400);
    } catch (error) {
      copyBtn.textContent = "복사 실패 (수동 복사)";
      setTimeout(() => {
        copyBtn.textContent = "연락처 복사하기";
      }, 1600);
    }
  });
}
