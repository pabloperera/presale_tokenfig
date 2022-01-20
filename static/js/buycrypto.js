const serverUrl = "https://qrzyegrrnorv.usemoralis.com:2053/server";
const appId = 'q4tSwN7djyetxn3d3KvLukWPa7j6Z5D4wBGhNX0s';

Moralis.start({ serverUrl, appId });

(async function () {
    Moralis.initPlugins();
})();

function buycrypto() {
    Moralis.Plugins.fiat.buy();
}

async function iframefiat() {
    let response = await Moralis.Plugins.fiat.buy({}, { disableTriggers: true });
    document.getElementById('myIframe').style.display = 'block';
    document.getElementById('myIframe').src = response.result.data;

};

