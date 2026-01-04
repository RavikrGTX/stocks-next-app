export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Welcome to Stocks Gravity</title>
<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #050505;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }
  .container {
    max-width: 600px;
    margin: 40px auto;
    background-color: #141414;
    border: 1px solid #30333A;
    border-radius: 8px;
    padding: 40px;
  }
  h1 {
    color: #E8BA40;
    font-size: 26px;
    margin-bottom: 20px;
  }
  p {
    color: #CCDADC;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 16px;
  }
  ul {
    padding-left: 20px;
    color: #CCDADC;
  }
  li {
    margin-bottom: 10px;
  }
  .footer {
    margin-top: 40px;
    font-size: 14px;
    color: #9ca3af;
    text-align: center;
  }
</style>
</head>

<body>
  <div class="container">
    <h1>Welcome aboard, {{name}}</h1>

    <p>{{intro}}</p>

    <p><strong>Here’s what you can do right now:</strong></p>
    <ul>
      <li>Set up your watchlist to track your favorite stocks</li>
      <li>Create price and volume alerts</li>
      <li>Monitor market trends and breaking updates</li>
    </ul>

    <p>
      Stocks Gravity helps you stay informed with timely insights and alerts
      so you can make confident market decisions.
    </p>

    <div class="footer">
      You’re receiving this email because you signed up for Stocks Gravity.<br/>
      © 2025 Stocks Gravity
    </div>
  </div>
</body>
</html>
`;


export const NEWS_SUMMARY_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Market News Summary</title>
<style>
body {
  margin: 0;
  padding: 0;
  background-color: #050505;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.container {
  max-width: 600px;
  margin: 40px auto;
  background-color: #141414;
  border: 1px solid #30333A;
  border-radius: 8px;
  padding: 40px;
}
h1 {
  color: #E8BA40;
  font-size: 26px;
  margin-bottom: 10px;
}
p {
  color: #CCDADC;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 16px;
}
.footer {
  margin-top: 40px;
  font-size: 13px;
  color: #9ca3af;
  text-align: center;
}
</style>
</head>

<body>
<div class="container">
  <h1>Market News Summary</h1>
  <p>{{date}}</p>

  {{newsContent}}

  <div class="footer">
    You’re receiving this because you subscribed to Stocks Gravity updates.<br/>
    © 2025 Stocks Gravity
  </div>
</div>
</body>
</html>
`;


export const STOCK_ALERT_UPPER_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Price Alert</title>
<style>
body {
  margin: 0;
  padding: 0;
  background-color: #050505;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.container {
  max-width: 600px;
  margin: 40px auto;
  background-color: #141414;
  border: 1px solid #30333A;
  border-radius: 8px;
  padding: 40px;
}
h1 {
  color: #10b981;
  font-size: 26px;
}
p {
  color: #CCDADC;
  font-size: 15px;
  line-height: 1.6;
}
.section {
  margin-top: 20px;
}
.footer {
  margin-top: 40px;
  font-size: 13px;
  color: #9ca3af;
  text-align: center;
}
</style>
</head>

<body>
<div class="container">
  <h1>📈 Upper Price Alert</h1>
  <p>{{timestamp}}</p>

  <div class="section">
    <p><strong>Stock:</strong> {{symbol}}</p>
    <p><strong>Company:</strong> {{company}}</p>
    <p><strong>Current Price:</strong> {{currentPrice}}</p>
    <p><strong>Target Price:</strong> {{targetPrice}}</p>
  </div>

  <p>
    {{symbol}} has crossed your upper price target.  
    This could be a good opportunity to review your position.
  </p>

  <div class="footer">
    Stocks Gravity price alerts · © 2025 Stocks Gravity
  </div>
</div>
</body>
</html>
`;


export const STOCK_ALERT_LOWER_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Price Alert</title>
<style>
body {
  margin: 0;
  padding: 0;
  background-color: #050505;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.container {
  max-width: 600px;
  margin: 40px auto;
  background-color: #141414;
  border: 1px solid #30333A;
  border-radius: 8px;
  padding: 40px;
}
h1 {
  color: #ef4444;
  font-size: 26px;
}
p {
  color: #CCDADC;
  font-size: 15px;
  line-height: 1.6;
}
.footer {
  margin-top: 40px;
  font-size: 13px;
  color: #9ca3af;
  text-align: center;
}
</style>
</head>

<body>
<div class="container">
  <h1>📉 Lower Price Alert</h1>
  <p>{{timestamp}}</p>

  <p><strong>Stock:</strong> {{symbol}}</p>
  <p><strong>Company:</strong> {{company}}</p>
  <p><strong>Current Price:</strong> {{currentPrice}}</p>
  <p><strong>Target Price:</strong> {{targetPrice}}</p>

  <p>
    {{symbol}} has dropped below your lower target price.
    This may be a potential buying opportunity.
  </p>

  <div class="footer">
    Stocks Gravity price alerts · © 2025 Stocks Gravity
  </div>
</div>
</body>
</html>
`;


export const VOLUME_ALERT_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Volume Alert</title>
<style>
body {
  margin: 0;
  padding: 0;
  background-color: #050505;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.container {
  max-width: 600px;
  margin: 40px auto;
  background-color: #141414;
  border: 1px solid #30333A;
  border-radius: 8px;
  padding: 40px;
}
h1 {
  color: #7c3aed;
  font-size: 26px;
}
p {
  color: #CCDADC;
  font-size: 15px;
  line-height: 1.6;
}
.footer {
  margin-top: 40px;
  font-size: 13px;
  color: #9ca3af;
  text-align: center;
}
</style>
</head>

<body>
<div class="container">
  <h1>📊 Volume Alert</h1>
  <p>{{timestamp}}</p>

  <p><strong>Stock:</strong> {{symbol}}</p>
  <p><strong>Company:</strong> {{company}}</p>
  <p><strong>Current Volume:</strong> {{currentVolume}}M</p>
  <p><strong>Average Volume:</strong> {{averageVolume}}M</p>

  <p>
    A significant volume spike was detected.
    High trading volume often indicates increased market interest.
  </p>

  <div class="footer">
    Stocks Gravity alerts · © 2025 Stocks Gravity
  </div>
</div>
</body>
</html>
`;


export const INACTIVE_USER_REMINDER_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>We Miss You</title>
<style>
body {
  margin: 0;
  padding: 0;
  background-color: #050505;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.container {
  max-width: 600px;
  margin: 40px auto;
  background-color: #141414;
  border: 1px solid #30333A;
  border-radius: 8px;
  padding: 40px;
}
h1 {
  color: #E8BA40;
  font-size: 26px;
}
p {
  color: #CCDADC;
  font-size: 15px;
  line-height: 1.6;
}
.footer {
  margin-top: 40px;
  font-size: 13px;
  color: #9ca3af;
  text-align: center;
}
</style>
</head>

<body>
<div class="container">
  <h1>We Miss You, {{name}}</h1>

  <p>
    You haven’t checked Stocks Gravity in a while.
    The markets have been active and there may be opportunities waiting.
  </p>

  <p>
    Your watchlists and alerts are still active and ready whenever you return.
  </p>

  <div class="footer">
    Stocks Gravity reminders · © 2025 Stocks Gravity
  </div>
</div>
</body>
</html>
`;
