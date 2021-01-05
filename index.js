var redirect = confirm("엔트리봇 설치페이지로 이동하시겠습니까?")
if (redirect === true) {
    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=781118354445303818&permissions=14342&redirect_uri=https%3A%2F%2Fxn--oy2bk5dcxkf0n.ml%2F&response_type=code&scope=bot%20guilds%20guilds.join%20messages.read%20applications.commands"
}