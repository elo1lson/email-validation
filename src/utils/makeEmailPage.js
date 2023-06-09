const style = `
<style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #f8f8f8;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #333;
      margin-bottom: 20px;
    }

    p {
      color: #777;
      line-height: 1.5;
      margin-bottom: 10px;
    }

    .verification-code {
      background-color: #e6e6e6;
      padding: 10px;
      border-radius: 5px;
      font-size: 18px;
      font-weight: bold;
      display: inline-block;
      margin-bottom: 20px;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
    }

    .button:hover {
      background-color: #0056b3;
    }

    .footer {
      margin-top: 40px;
      text-align: center;
      color: #999;
    }

    .footer a {
      color: #999;
      text-decoration: none;
    }
  </style>
`;

const content = (props) => `
<div class="container">
    <h1>Olá, ${props.name}!</h1>
    <img src="https://images.template.net/113287/free-neon-banner-background-t9ht6.jpg" alt="Ilustração 1" style="width: 100%; max-width: 400px; height: auto; margin-bottom: 20px;">
    <p>Aqui está o seu código de verificação:</p>
    <div class="verification-code">${props.code}</div>
    <p>Use o código acima para concluir o processo de verificação.</p>
    <p>Clique no botão abaixo para continuar:</p>
    <a class="button" href=${props.url}>Clique Aqui</a>

    <div class="footer">
      <p>Este e-mail é apenas um exemplo.</p>
      <p>Visite nosso <a href="#">site</a> para obter mais informações.</p>
      <img src="https://example.com/logo.png" alt="Logo da Empresa" style="width: 100px; height: auto; margin-top: 20px;">
    </div>
  </div>`;

const email = (props) => `
<!DOCTYPE html>
<html>
<head>
  <title>E-mail Bonito</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  ${style}
</head>
<body>
  ${content(props)}
</body>
</html>
`;

export default email;
