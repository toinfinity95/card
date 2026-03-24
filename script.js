const copyBtn = document.getElementById("copyBtn");

if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const contactText = "최지요 | cjy@ggi.co.kr | 010-3139-5416 | Instagram: @jeat_yaker";

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
