import BoxSDKNode from "box-node-sdk";

export default function GetBoxAppAuthClient() {
  const sdk = new BoxSDKNode({
    clientID: "u1p94b3hit3uvd25ttwrf4hlpm31jktv",
    clientSecret: "lQ7WUwLts6dgqqaIfkio6nLXow02cALk",
    appAuth: {
      keyID: "x72kspl3",
      privateKey:
        "-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQIKNBrXmH/8yACAggA\nMBQGCCqGSIb3DQMHBAh/gOiSHHftQASCBMiurs75EE5141PB1U7qZMZUGhtbZE1p\nVxe9cXSW1lKkeubn91A+L4UNfwMc9LfpqZvc0mlFPzKHktRU/CgGDZ6AS1tp7cDW\nbyOvGBUGEx1hTXRL9vuIGF2TrhdjIrkQxpth0U0jpRAKg0O0PrbNw/QUhBG6mZiL\nd1CALvdYLK2+QsEc4gGunKiQ39x+iIh2Gox8xBl/QW+Dxq0/m51rvWenFS6pbajb\neJwFovJMYLFejboMGtSqEKhsYVLBo3yy1yM32bhGUyp2aJ0KofJzGIMvnP5nEexQ\nrU/9DLXWop3tX3mMt+E8sJKYeBjT/M1o+bNkmizOe0GgsLv+ik7uY4lgUBY84iAt\nKoJl8TgEurRLYWDCPuQEQk/OzS+mRixPRGCF+VdmHy14LQFegb9V/BqZhAhFGnsg\nXy8uvlu/JJlPTilAjP6KPclzNubAVIvsS4DS/tFfpAX8pTyvH7HzJLJ3TrJlesgi\nLMX4cN1bObG1A9f4RL2g6Y3t5YInM3Q2vYi1ECCP5rFTQlOCXnFlRNsB5+0YvGXE\nwyh12gMi8EZYPucG3RmRfAchh6NBt1NLvMubozL7tSoqll2cWCpslrZDYy8Zqq0I\nRKF+9mubKUREmiGt1/i3Obla/8JoCLkugHloDWr7G7yu17MJfSoAOBoW+mYzZz5u\nG93R8K57/IriYwJH6WdVcVIbWBAOUphI9yIn5u1MQANHWHIRp9NiZaGNqHjA36V6\nZAPki/LFQ1XdnL4qx0iPQWlKAspEkrWmWTK45hNau6L28v7+GHD+Kj6i5Laj7bdK\nzTra5tq+6C3q7uouNlUJr82IEoBKKUeTf0PbQJgIofguMxq+QMyfKJ5CjoSB6WGj\nNk3uNX5Z3dDjfI8dMp141B9w8E/WbfyWTXTTUBYL6f7H+WnjTOibunwnAnUagKX7\nWvS8FY5DzbG4YE/vtRFmre5fon/3QShdzkckLzE+0oWrhqgeyca6ftG/4HDeySob\nScTDtTGsp1Bd1JDomx/9KfTkngwaBezHZix3hSE5P7jwNsXAp5k//hSBVUiVlrij\nsOrXRVyAGx1nJ3oYD2oSi3JcLP6EPKgPmtDMW52OCnFZiee4xhLbPKxxa3xiyiYh\n9ts46+LLt0sEldyWDMJmdEG4xuOx/wbad3JidP9a2ap+QJMeWrF2z57ixN37vTnv\nMY7KqP1AMC6/br7fxcKDXy3/4FABl6tjqJokkif59CD/cnHMSHmipswP27hiPKoc\ng+Md9Wru6p/6nIL6onWFox7x9Caot/xUpCX+L98OgYU3E/4caF9Ppry5tuPC3QAR\nuxplyCbQat5uTTX1ANmDdKIlW+2QqM3uu3fUX9dZIRDFtSrckraTn4J7GHuhe5OK\nKjCLRK898La1Y+ha6BPD+ldROegkrunXenwDj7TLRdgYrWnxT2vWCcfAZhNFWQXG\nXvV0yILPagFkuRLjRk5jQ8G94FB64+wswtf7U3XHhEzafaPRiDy15GOYus81gmd4\nhyKTKEo7zA79giijmBIMhIwQzZF1qBkR5lXHObeZYQijRAG1EbfeMT2QbS2NsSBh\nN/7u8F7YibADrTbdqlYElyV9TB3O67SUXtkVzACcYF2R6bRnW/r1zqU1AGTMqB75\nZbA=\n-----END ENCRYPTED PRIVATE KEY-----\n",
      passphrase: "f057d7e8112a115e1602b48e5c1c0865",
    },
  });

  return sdk.getAppAuthClient("enterprise", "1006685045");
}
