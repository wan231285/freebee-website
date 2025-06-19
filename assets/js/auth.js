document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const googleLoginBtn = document.getElementById("googleLogin");

    // 회원가입 기능
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;

            auth.createUserWithEmailAndPassword(email, password)
                .then(userCredential => {
                    alert("Signup successful!");
                    window.location.href = "index.html";
                })
                .catch(error => alert(error.message));
        });
    }

    // 이메일/비밀번호 로그인 기능
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            auth.signInWithEmailAndPassword(email, password)
                .then(userCredential => {
                    alert("Login successful!");
                    window.location.href = "index.html";
                })
                .catch(error => alert(error.message));
        });
    }

    // Google 로그인 기능 추가
    if (googleLoginBtn) {
        googleLoginBtn.addEventListener("click", () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider)
                .then((result) => {
                    alert("Google Login Successful! Welcome " + result.user.displayName);
                    window.location.href = "index.html";
                })
                .catch(error => {
                    console.error("Google Login Failed:", error);
                    alert("Google Login Failed: " + error.message);
                });
        });
    }
});
