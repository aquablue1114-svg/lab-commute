// Firebase 설정 (여러 명이 함께 접속하기 위한 Realtime Database 연결 정보)
// 이 값은 웹페이지에 공개되는 정보라 GitHub에 올려도 괜찮아요.
// 데이터 접근은 Firebase 콘솔의 Realtime Database "규칙"(database.rules.json)이 막아 줘요.
// null로 바꾸면 혼자 노는 모드로 동작해요.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCumusCUMXM7tiYUTN5SwGj7yU9xaLeoCs",
  authDomain: "my-lab-18e00.firebaseapp.com",
  databaseURL: "https://my-lab-18e00-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-lab-18e00",
  storageBucket: "my-lab-18e00.firebasestorage.app",
  messagingSenderId: "458338431173",
  appId: "1:458338431173:web:da5075594e1ddfa4aec0ac"
};
