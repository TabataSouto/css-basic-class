const characters = [
  {
    name: 'Ahri',
    location: 'Ionia',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1259276b6d1efa78/5db05fa86e8b0c6d038c5ca2/RiotX_ChampionList_ahri.jpg?quality=90&width=250',
  },
  {
    name: 'Bardo',
    location: 'Runeterra',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbbe3ce0c0ae1305b/5db05fb23a326d6df6c0e7b3/RiotX_ChampionList_bard.jpg?quality=90&width=250',
  },
  {
    name: 'Caitlyn',
    location: 'Piltover',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt014f4b6fc9bacd10/61b1eb901d158d4007de9685/RiotX_ChampionList_caitlyn_v2.jpg?quality=90&width=250',
  },
  {
    name: 'Darius',
    location: 'Noxus',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt38b52be4a2cb1004/5db05fb19481396d6bdd01ac/RiotX_ChampionList_darius.jpg?quality=90&width=250',
  },
  {
    name: 'Elise',
    location: 'Ilhas das Sombras',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfe21ff2ddb84d5d1/5db05fbd0b39e86c2f83dc05/RiotX_ChampionList_elise.jpg?quality=90&width=250',
  },
  {
    name: 'Fizz',
    location: 'Runeterra',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6000fa69e03c25c0/5db05fbc56458c6b3fc17513/RiotX_ChampionList_fizz.jpg?quality=90&width=250',
  },
  {
    name: 'Gwen',
    location: 'Ilhas das Sombras',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7a3d6c549708c048/607496eb1f74bb759da6a062/RiotX_ChampionList_gwen.jpg?quality=90&width=250',
  },
  {
    name: 'Hecarim',
    location: 'Ilhas das Sombras',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blteb9ce5304ec48e19/5db05fc5df78486c826dccfa/RiotX_ChampionList_hecarim.jpg?quality=90&width=250',
  },
  {
    name: 'Irelia',
    location: 'Ionia',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf5f2b8de93870aef/5db05fcea6470d6ab91ce59a/RiotX_ChampionList_irelia.jpg?quality=90&width=250',
  },
  {
    name: 'Jayce',
    location: 'Piltover',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt51557edc36ad88a1/5db05fcf0b39e86c2f83dc13/RiotX_ChampionList_jayce.jpg?quality=90&width=250',
  },
  {
    name: 'Karma',
    location: 'Ionia',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt39748c7b67252d6f/5db05fd70b39e86c2f83dc19/RiotX_ChampionList_karma.jpg?quality=90&width=250',
  },
  {
    name: 'Lucian',
    location: 'Runeterra',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3db0d62352b0b4f1/5db05fdf6e8b0c6d038c5cb4/RiotX_ChampionList_lucian.jpg?quality=90&width=250',
  },
  {
    name: 'Morgana',
    location: 'Demacia',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc81eece55f126d2d/5db05fe86af83b6d7032c904/RiotX_ChampionList_morgana.jpg?quality=90&width=250',
  },
  {
    name: 'Nocturne',
    location: 'Runeterra',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfc73e3c7dda28d31/5db05ff2adc8656c7d24e7f0/RiotX_ChampionList_nocturne.jpg?quality=90&width=250',
  },
  {
    name: 'Orianna',
    location: 'Piltover',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3318fc0e8103706d/5db05ff02140ec675d68f4a7/RiotX_ChampionList_orianna.jpg?quality=90&width=250',
  },
  {
    name: 'Pyke',
    location: 'Águas de Sentina',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt98269cb73e9fce70/5db05ff1347d1c6baa57be3d/RiotX_ChampionList_pyke.jpg?quality=90&width=250',
  },
  {
    name: 'Rakan',
    location: 'Ionia',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltbe844b30961ccb7c/5db05ffb2140ec675d68f4ad/RiotX_ChampionList_rakan.jpg?quality=90&width=250',
  },
  {
    name: 'Sejuani',
    location: 'Piltover',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte4d521b893aa5a3e/5db05ffae9d7526ab429e544/RiotX_ChampionList_sejuani.jpg?quality=90&width=250',
  },
  {
    name: 'Twisted Fate',
    location: 'Águas de sentina',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltaebcdb8b21d440a7/5db0600ce9effa6ba5295fb3/RiotX_ChampionList_twistedfate.jpg?quality=90&width=250',
  },
  {
    name: 'Vi',
    location: 'Freljord',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3bd79abf330fc807/5db06014dc674266df3d5d56/RiotX_ChampionList_vi.jpg?quality=90&width=250',
  },
  {
    name: 'Warwick',
    location: 'Zaun',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt08a92f3897cfc8f5/5db0601ddc674266df3d5d5c/RiotX_ChampionList_warwick.jpg?quality=90&width=250',
  },
  {
    name: 'Xayah',
    location: 'Ionia',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0d029ccdb18a4299/5db0601ba6470d6ab91ce5be/RiotX_ChampionList_xayah.jpg?quality=90&width=250',
  },
  {
    name: 'Yone',
    location: 'Ionia',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3a319fc884dc6880/5db0601c242f426df132f985/RiotX_ChampionList_yasuo.jpg?quality=90&width=250',
  },
  {
    name: 'Zoe',
    location: 'Targon',
    image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd18587f31803441d/5db060226e8b0c6d038c5cc6/RiotX_ChampionList_zoe.jpg?quality=90&width=250',
  },
  ]

module.exports = characters;
