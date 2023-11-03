document.getElementById("emojiButton").addEventListener("click", function () {
    const emojiContainer = document.getElementById("emojiContainer");
    const emojis = ["😀", "😎", "🚀", "👾", "🤖", "👽", "💡", "👹", "👺", "🤡", "💩", "👻", "💀", "☠️", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "🦄", "🌈", "🌟", "🍕", "🍔", "🍦", "🎈", "🎉", "🎶", "🏆", "🍭", "🍬", "🚁", "🚂", "🏰", "🌍", "🌊", "🌸", "🌴", "🌞", "🌝", "🌚", "🍄", "🍁", "🍂", "🍃", "🎃", "🎄", "🎅", "🎁", "🌦", "🌧", "🌩", "❄️", "🌬️", "🌪️", "🌫️", "🌏", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌚", "🌝", "🌛", "🌜", "🌍", "🌎", "🌏", "🌞", "🌙", "🌤", "🌥", "🌦", "🌧", "🌩", "🌪", "🌫", "☀️", "☁️", "⛅", "⛈️", "❄️", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🍔"];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];
    emojiContainer.textContent = randomEmoji;
    emojiContainer.style.opacity = 1;

    // Desvanecer el emoji después de 2 segundos
    setTimeout(function () {
        emojiContainer.style.opacity = 0;
    }, 2000);
});

document.getElementById("xenodataButton").addEventListener("click", function () {
    const xenodataText = document.getElementById("xenodataText");
    xenodataText.classList.toggle("hidden");
});