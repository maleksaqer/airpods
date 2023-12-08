<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PGP Registration</title>
    <script src="https://openpgpjs.org/openpgp.js"></script>
</head>
<body>
    <h2>PGP Registration</h2>
    
    <label for="username">Username:</label>
    <input type="text" id="username" required><br>

    <label for="email">Email:</label>
    <input type="email" id="email" required><br>

    <button onclick="generatePGPKey()">Generate PGP Key</button>

    <script>
        async function generatePGPKey() {
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;

            // Generate PGP key pair
            const { privateKeyArmored, publicKeyArmored } = await openpgp.generateKey({
                userIds: [{ name: username, email: email }],
                curve: 'ed25519', // Use a strong elliptic curve
                passphrase: prompt('Enter passphrase for private key:')
            });

            // Store the keys securely (e.g., on a server)
            console.log('Private Key:', privateKeyArmored);
            console.log('Public Key:', publicKeyArmored);

            alert('PGP key pair generated successfully!');
        }
    </script>
</body>
</html>