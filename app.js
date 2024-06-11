<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ABOT WEB ChatBOT</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            width: 100%;
        }
        .flex-container {
            display: flex;
            gap: 20px;
        }
        .column {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        #chatbox {
            width: 60%;
            height: 400px;
            border: 1px solid #ccc;
            padding: 10px;
            overflow-y: auto;
            resize: both;
        }
        .user-list {
            width: 200px;
        }
        .chat-controls {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .chat-container {
            display: flex;
        }
        .emoji-list {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
        }
        .emoji-item {
            cursor: pointer;
            font-size: 24px;
        }
        .green {
            color: green;
        }
        .darkgreen {
            color: darkgreen;
        }
        .role-creator {
            color: red;
        }
        .role-owner {
            color: blue;
        }
        .role-admin {
            color: purple;
        }
        .role-member {
            color: black;
        }
        .role-none {
            color: grey;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="column">
            <div class="flex-container">
                <div>
                    <label for="username">Username:</label>
                    <input type="text" id="username">
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password">
                </div>
                <button id="loginButton">Login</button>
            </div>

            <div id="status"></div>

            <div class="flex-container">
                <div>
                    <label for="room">Room:</label>
                    <input type="text" id="room">
                    <button id="joinRoomButton">Join Room</button>
                    <button id="leaveRoomButton">Leave Room</button>
                    <select id="roomListbox"></select>
                    <div id="count"></div>
                </div>
            </div>
 <div>
    <input type="text" id="master" placeholder="Type your master username here...">
                <label for="welcomeCheckbox">Send Welcome Messages</label>
                <input type="checkbox" id="welcomeCheckbox">
        <label for="spinCheckbox">Spin</label>
                <input type="checkbox" id="spinCheckbox">
            </div>
<div>
    <input type="checkbox" id="activateQuizCheckbox">
    <label for="activateQuizCheckbox">Activate Quiz</label>       
</div>
            <div class="chat-container">
                <div id="chatbox"></div>
                <div class="user-list">
                    <label for="userListbox">Current Users:</label>
                    <select id="userListbox" size="10" multiple></select>
<ul id="roomlistbox"></ul>
                </div>
            </div>

            <div class="chat-controls">
                <input type="text" id="message" placeholder="Type your message here...">
                <button id="sendMessageButton">Send Message</button>   
<button id="sendCaptchaButton">Send Captcha</button> 
<input type="text" id="captchaUrl" placeholder="Enter captcha URL">
            </div>
<div>
     <input type="text" id="target" placeholder="Type your target username here...">
                <button id="banButton">Ban</button>
                <button id="kickButton">Kick</button>
                <button id="memButton">Member</button>
                <button id="adminButton">Admin</button>
                <button id="ownerButton">Owner</button>
                <button id="noneButton">None</button>
</div>
           <div id="emojiList">
        <!-- Smileys & People -->
        <span class="emoji-item">😀</span>
        <span class="emoji-item">😁</span>
        <span class="emoji-item">😂</span>
        <span class="emoji-item">🤣</span>
        <span class="emoji-item">😃</span>
        <span class="emoji-item">😄</span>
        <span class="emoji-item">😅</span>
        <span class="emoji-item">😆</span>
        <span class="emoji-item">😉</span>
        <span class="emoji-item">😊</span>
        <span class="emoji-item">😋</span>
        <span class="emoji-item">😎</span>
        <span class="emoji-item">😍</span>
        <span class="emoji-item">😘</span>
        <span class="emoji-item">😗</span>
        <span class="emoji-item">😙</span>
        <span class="emoji-item">😚</span>
        <span class="emoji-item">🙂</span>
        <span class="emoji-item">🤗</span>
        <span class="emoji-item">🤔</span>
        <span class="emoji-item">😐</span>
        <span class="emoji-item">😑</span>
        <span class="emoji-item">😶</span>
        <span class="emoji-item">🙄</span>
        <span class="emoji-item">😏</span>
        <span class="emoji-item">😣</span>
        <span class="emoji-item">😥</span>
        <span class="emoji-item">😮</span>
        <span class="emoji-item">🤐</span>
        <span class="emoji-item">😯</span>
        <span class="emoji-item">😪</span>
        <span class="emoji-item">😫</span>
        <span class="emoji-item">😴</span>
        <span class="emoji-item">😌</span>
        <span class="emoji-item">😛</span>
        <span class="emoji-item">😜</span>
        <span class="emoji-item">😝</span>
        <span class="emoji-item">🤤</span>
        <span class="emoji-item">😒</span>
        <span class="emoji-item">😓</span>
        <span class="emoji-item">😔</span>
        <span class="emoji-item">😕</span>
        <span class="emoji-item">🙃</span>
        <span class="emoji-item">🤑</span>
        <span class="emoji-item">😲</span>
        <span class="emoji-item">☹️</span>
        <span class="emoji-item">🙁</span>
        <span class="emoji-item">😖</span>
        <span class="emoji-item">😞</span>
        <span class="emoji-item">😟</span>
        <span class="emoji-item">😤</span>
        <span class="emoji-item">😢</span>
        <span class="emoji-item">😭</span>
        <span class="emoji-item">😦</span>
        <span class="emoji-item">😧</span>
        <span class="emoji-item">😨</span>
        <span class="emoji-item">😩</span>
        <span class="emoji-item">😬</span>
        <span class="emoji-item">😰</span>
        <span class="emoji-item">😱</span>
        <span class="emoji-item">😳</span>
        <span class="emoji-item">😵</span>
        <span class="emoji-item">😡</span>
        <span class="emoji-item">😠</span>
        <span class="emoji-item">😷</span>
        <span class="emoji-item">🤒</span>
        <span class="emoji-item">🤕</span>
        <span class="emoji-item">🤢</span>
        <span class="emoji-item">🤧</span>
        <span class="emoji-item">😇</span>
        <span class="emoji-item">🤠</span>
        <span class="emoji-item">🤡</span>
        <span class="emoji-item">🤥</span>
        <span class="emoji-item">🤓</span>
        <span class="emoji-item">👿</span>
        <span class="emoji-item">👹</span>
        <span class="emoji-item">👺</span>
        <span class="emoji-item">💀</span>
        <span class="emoji-item">👻</span>
        <span class="emoji-item">👽</span>
        <span class="emoji-item">👾</span>
        <span class="emoji-item">🤖</span>

        <!-- Animals & Nature -->
        <span class="emoji-item">🐶</span>
        <span class="emoji-item">🐱</span>
        <span class="emoji-item">🐭</span>
        <span class="emoji-item">🐹</span>
        <span class="emoji-item">🐰</span>
        <span class="emoji-item">🦊</span>
        <span class="emoji-item">🐻</span>
        <span class="emoji-item">🐼</span>
        <span class="emoji-item">🐨</span>
        <span class="emoji-item">🐯</span>
        <span class="emoji-item">🦁</span>
        <span class="emoji-item">🐮</span>
        <span class="emoji-item">🐷</span>
        <span class="emoji-item">🐽</span>
        <span class="emoji-item">🐸</span>
        <span class="emoji-item">🐵</span>
        <span class="emoji-item">🙈</span>
        <span class="emoji-item">🙉</span>
        <span class="emoji-item">🙊</span>
        <span class="emoji-item">🐒</span>
        <span class="emoji-item">🐔</span>
        <span class="emoji-item">🐧</span>
        <span class="emoji-item">🐦</span>
        <span class="emoji-item">🐤</span>
        <span class="emoji-item">🐣</span>
        <span class="emoji-item">🐥</span>
        <span class="emoji-item">🦆</span>
        <span class="emoji-item">🦅</span>
        <span class="emoji-item">🦉</span>
        <span class="emoji-item">🦇</span>
        <span class="emoji-item">🐺</span>
        <span class="emoji-item">🐗</span>
        <span class="emoji-item">🐴</span>
        <span class="emoji-item">🦄</span>
        <span class="emoji-item">🐝</span>
        <span class="emoji-item">🐛</span>
        <span class="emoji-item">🦋</span>
        <span class="emoji-item">🐌</span>
        <span class="emoji-item">🐞</span>
        <span class="emoji-item">🐜</span>
        <span class="emoji-item">🦟</span>
        <span class="emoji-item">🦗</span>
        <span class="emoji-item">🕷️</span>
        <span class="emoji-item">🕸️</span>
        <span class="emoji-item">🐢</span>
        <span class="emoji-item">🐍</span>
        <span class="emoji-item">🦎</span>
        <span class="emoji-item">🦖</span>
        <span class="emoji-item">🦕</span>
        <span class="emoji-item">🐙</span>
        <span class="emoji-item">🦑</span>
        <span class="emoji-item">🦐</span>
        <span class="emoji-item">🦞</span>
        <span class="emoji-item">🦀</span>
        <span class="emoji-item">🐡</span>
        <span class="emoji-item">🐠</span>
        <span class="emoji-item">🐟</span>
        <span class="emoji-item">🐬</span>
        <span class="emoji-item">🐳</span>
        <span class="emoji-item">🐋</span>
        <span class="emoji-item">🦈</span>
        <span class="emoji-item">🐊</span>
        <span class="emoji-item">🐅</span>
        <span class="emoji-item">🐆</span>
        <span class="emoji-item">🦓</span>
        <span class="emoji-item">🦍</span>
        <span class="emoji-item">🐘</span>
        <span class="emoji-item">🦏</span>
        <span class="emoji-item">🦛</span>
        <span class="emoji-item">🐪</span>
        <span class="emoji-item">🐫</span>
        <span class="emoji-item">🦙</span>
        <span class="emoji-item">🦒</span>
        <span class="emoji-item">🐃</span>
        <span class="emoji-item">🐂</span>
        <span class="emoji-item">🐄</span>
        <span class="emoji-item">🐎</span>
        <span class="emoji-item">🐖</span>
        <span class="emoji-item">🐏</span>
        <span class="emoji-item">🐑</span>
        <span class="emoji-item">🐐</span>
        <span class="emoji-item">🦌</span>
        <span class="emoji-item">🐕</span>
        <span class="emoji-item">🐩</span>
        <span class="emoji-item">🦮</span>
        <span class="emoji-item">🐕‍🦺</span>
        <span class="emoji-item">🐈</span>
        <span class="emoji-item">🐈‍⬛</span>
        <span class="emoji-item">🦢</span>
        <span class="emoji-item">🐓</span>
        <span class="emoji-item">🦃</span>
        <span class="emoji-item">🦚</span>
        <span class="emoji-item">🦜</span>
        <span class="emoji-item">🦢</span>
        <span class="emoji-item">🦩</span>
        <span class="emoji-item">🦝</span>
        <span class="emoji-item">🦨</span>
        <span class="emoji-item">🦡</span>
        <span class="emoji-item">🦦</span>
        <span class="emoji-item">🦥</span>
        <span class="emoji-item">🐁</span>
        <span class="emoji-item">🐀</span>
        <span class="emoji-item">🐿️</span>
        <span class="emoji-item">🦔</span>
        <span class="emoji-item">🌵</span>
        <span class="emoji-item">🎄</span>
        <span class="emoji-item">🌲</span>
        <span class="emoji-item">🌳</span>
        <span class="emoji-item">🌴</span>
        <span class="emoji-item">🪵</span>
        <span class="emoji-item">🌱</span>
        <span class="emoji-item">🌿</span>
        <span class="emoji-item">☘️</span>
        <span class="emoji-item">🍀</span>
        <span class="emoji-item">🎍</span>
        <span class="emoji-item">🪴</span>
        <span class="emoji-item">🎋</span>
        <span class="emoji-item">🍃</span>
        <span class="emoji-item">🍂</span>
        <span class="emoji-item">🍁</span>
        <span class="emoji-item">🍄</span>
        <span class="emoji-item">🐚</span>
        <span class="emoji-item">🪨</span>
        <span class="emoji-item">🌾</span>
        <span class="emoji-item">💐</span>
        <span class="emoji-item">🌷</span>
        <span class="emoji-item">🌹</span>
        <span class="emoji-item">🥀</span>
        <span class="emoji-item">🌺</span>
        <span class="emoji-item">🌸</span>
        <span class="emoji-item">🌼</span>
        <span class="emoji-item">🌻</span>
        <span class="emoji-item">🌞</span>
        <span class="emoji-item">🌝</span>
        <span class="emoji-item">🌛</span>
        <span class="emoji-item">🌜</span>
        <span class="emoji-item">🌚</span>
        <span class="emoji-item">🌕</span>
        <span class="emoji-item">🌖</span>
        <span class="emoji-item">🌗</span>
        <span class="emoji-item">🌘</span>
        <span class="emoji-item">🌑</span>
        <span class="emoji-item">🌒</span>
        <span class="emoji-item">🌓</span>
        <span class="emoji-item">🌔</span>
        <span class="emoji-item">🌙</span>
        <span class="emoji-item">🌎</span>
        <span class="emoji-item">🌍</span>
        <span class="emoji-item">🌏</span>
        <span class="emoji-item">🪐</span>
        <span class="emoji-item">💫</span>
        <span class="emoji-item">⭐</span>
        <span class="emoji-item">🌟</span>
        <span class="emoji-item">✨</span>
        <span class="emoji-item">⚡</span>
        <span class="emoji-item">☄️</span>
        <span class="emoji-item">💥</span>
        <span class="emoji-item">🔥</span>
        <span class="emoji-item">🌪️</span>
        <span class="emoji-item">🌈</span>
        <span class="emoji-item">☀️</span>
        <span class="emoji-item">🌤️</span>
        <span class="emoji-item">⛅</span>
        <span class="emoji-item">🌥️</span>
        <span class="emoji-item">☁️</span>
        <span class="emoji-item">🌦️</span>
        <span class="emoji-item">🌧️</span>
        <span class="emoji-item">⛈️</span>
        <span class="emoji-item">🌩️</span>
        <span class="emoji-item">🌨️</span>
        <span class="emoji-item">❄️</span>
        <span class="emoji-item">☃️</span>
        <span class="emoji-item">⛄</span>
        <span class="emoji-item">🌬️</span>
        <span class="emoji-item">💨</span>
        <span class="emoji-item">💧</span>
        <span class="emoji-item">💦</span>
        <span class="emoji-item">☔</span>
        <span class="emoji-item">☂️</span>
        <span class="emoji-item">🌊</span>
        <span class="emoji-item">🌫️</span>

        <!-- Add more emojis as needed -->
    </div>

       
            <div>
                <label for="debugBox">Debug Messages:</label>
                <textarea id="debugBox" rows="10" cols="50" readonly></textarea>
            </div>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>