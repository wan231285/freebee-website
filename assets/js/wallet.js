document.addEventListener("DOMContentLoaded", function() {
    const walletBtn = document.getElementById("walletConnect");
    const balanceBtn = document.getElementById("checkBalance");

    if (!walletBtn) {
        console.error("Wallet Connect button not found!");
        return;
    }

    if (!balanceBtn) {
        console.error("Check Balance button not found!");
        return;
    }

    let userAccount = "";

    // Metamask 지갑 연결
    walletBtn.addEventListener("click", async function() {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                userAccount = accounts[0];

                if (userAccount) {
                    walletBtn.textContent = `Connected: ${userAccount.slice(0, 6)}...${userAccount.slice(-4)}`;
                    walletBtn.style.backgroundColor = "#28a745"; // 버튼 색상 변경
                    walletBtn.disabled = true; // 연결 후 버튼 비활성화
                    console.log("Wallet connected: ", userAccount);
                }

                alert("Wallet Connected: " + userAccount);
            } catch (error) {
                console.error("Wallet connection failed:", error);
                alert("Wallet connection failed: " + error.message);
            }
        } else {
            alert("Metamask not detected. Please install it!");
        }
    });

    // 지갑 잔액 조회 기능
    balanceBtn.addEventListener("click", async function() {
        if (!userAccount) {
            alert("Connect your wallet first!");
            return;
        }

        try {
            console.log("Checking balance for:", userAccount);
            const balance = await window.ethereum.request({
                method: "eth_getBalance",
                params: [userAccount, "latest"],
            });

            const formattedBalance = (parseInt(balance, 16) / 10**18).toFixed(5); // 소수점 5자리까지 표시
            alert(`Your balance: ${formattedBalance} BNB`);
            console.log("Balance:", formattedBalance);
        } catch (error) {
            console.error("Balance check failed:", error);
            alert("Balance check failed: " + error.message);
        }
    });
});
